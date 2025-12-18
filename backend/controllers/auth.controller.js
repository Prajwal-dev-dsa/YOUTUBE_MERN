import User from "../models/user.model.js";
import validator from "validator";
import { v2 as cloudinary } from "cloudinary";
import uploadOnCloudinary from "../config/cloudinary.js";
import { generateToken } from "../config/generateToken.js";
import bcrypt from "bcryptjs";

const setCookie = (res, token) => {
  res.cookie("token", token, {
    httpOnly: true,       // Prevents JS access (Security)
    secure: true,         // MUST be true for Render (HTTPS)
    sameSite: "none",     // MUST be 'none' for Cross-Site (Vercel -> Render)
    maxAge: 24 * 60 * 60 * 1000, // 1 Day
    partitioned: true,    // NEW: Helps mobile browsers accept cross-site cookies
  });
};

export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password.length < 5) {
      return res
        .status(400)
        .json({ message: "Password must be at least 5 characters long" });
    }

    let photoUrl;
    if (req.file) {
      const result = await uploadOnCloudinary(req.file.path);
      photoUrl = result.secure_url;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      photoUrl,
    });

    // Generate token and set cookies
    const token = await generateToken(user._id);
    setCookie(res, token);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Signup error ${error.message}` });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordMatched = bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate token and set cookies
    const token = await generateToken(user._id);
    setCookie(res, token);

    res.status(200).json({ message: "User logged in successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Login error ${error.message}` });
  }
};

export const logOut = async (req, res) => {
  try {
    // FIXED: clearCookie requires the same options (secure, sameSite) to work
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      partitioned: true,
    });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Logout error ${error.message}` });
  }
};

export const googleSignIn = async (req, res) => {
  try {
    const { userName, email, photoUrl } = req.body;

    let finalPhotoUrl = photoUrl; // Default to the original Google URL

    // If a photoUrl from Google exists, upload it to your Cloudinary account
    if (photoUrl) {
      try {
        const result = await cloudinary.uploader.upload(photoUrl, {
          folder: "youtube_clone_avatars", // Organizes images in Cloudinary
          resource_type: "auto",
        });
        finalPhotoUrl = result.secure_url; // Use the new Cloudinary URL
      } catch (uploadError) {
        console.error(
          "Cloudinary upload failed, using original URL.",
          uploadError
        );
      }
    }

    let user = await User.findOne({ email });

    // If the user doesn't exist, create a new one in your database
    if (!user) {
      user = await User.create({
        userName,
        email,
        photoUrl: finalPhotoUrl,
      });
    }
    // If user exists and contains photo while logging in and previously didn't have any photo
    else if (!user.photoUrl && finalPhotoUrl) {
      user.photoUrl = finalPhotoUrl;
      await user.save();
    }

    // Generate a token for the session and set it as a cookie
    const token = await generateToken(user._id);
    setCookie(res, token);

    res.status(200).json({ message: "Authentication successful", user });
  } catch (error) {
    console.error("Google Sign-In controller error:", error);
    res
      .status(500)
      .json({ message: "An error occurred during authentication." });
  }
};