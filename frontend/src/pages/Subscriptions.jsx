import { useEffect, useState } from "react";
import { useSubscribedContentStore } from "../store/useSubscribedContentStore";
import { useNavigate } from "react-router-dom";
import PlaylistCard from "../components/PlaylistCard";
import VideoCard from "../components/VideoCard";
import ShortCard from "../components/ShortCard";
import { SiYoutubeshorts } from "react-icons/si";
import { GoVideo } from "react-icons/go";
import { FaList } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import CommunityPostCard from "../components/CommunityPostCard";
import { ClipLoader } from "react-spinners";
import getVideoDuration from "../components/GetVideoDuration";

const Subscriptions = () => {
  const {
    setSusbscribedChannels,
    subscribedChannels,
    subscribedChannelVideos,
    subscribedChannelShorts,
    subscribedChannelPlaylists,
    subscribedChannelCommunityPosts,
  } = useSubscribedContentStore();
  const [duration, setDuration] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      Array.isArray(subscribedChannelVideos) &&
      subscribedChannelVideos.length > 0
    ) {
      subscribedChannelVideos.forEach((video) => {
        if (video?.videoUrl) {
          getVideoDuration(video.videoUrl, (formattedTime) => {
            setDuration((prev) => ({ ...prev, [video._id]: formattedTime }));
          });
        }
      });
    }
    setLoading(false);
  }, [subscribedChannelVideos]);

  const handlePostUpdate = (updatedPost) => {
    setSusbscribedChannels((prevChannel) => {
      const updatedPosts = prevChannel.communityPosts.map((post) =>
        post._id === updatedPost._id ? updatedPost : post
      );
      return { ...prevChannel, communityPosts: updatedPosts };
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-white">
        <ClipLoader color="#fff" size={40} />
      </div>
    );
  }

  if (!subscribedChannels || subscribedChannels.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h2 className="text-xl text-gray-400 font-semibold mb-2">
          Don't miss new videos
        </h2>
        <p className="text-sm text-gray-500">
          Subscribe to see updates from your favorite YouTube channels
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 py-4 min-h-screen">
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide border-b border-gray-800 mb-6">
        {subscribedChannels.map((channel) => (
          <div
            key={channel._id}
            className="flex flex-col items-center flex-shrink-0 cursor-pointer w-16"
            onClick={() => navigate(`/channel-page/${channel._id}`)}
          >
            <div className="relative">
              <img
                src={channel?.avatar}
                alt=""
                className="w-14 h-14 object-cover rounded-full border-2 border-transparent hover:border-white transition-all"
              />
            </div>
            <p className="text-xs text-gray-400 text-center truncate w-full mt-1">
              {channel?.name}
            </p>
          </div>
        ))}
      </div>

      {/* 2. Recent Shorts */}
      {subscribedChannelShorts?.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
            <SiYoutubeshorts className="text-red-600 text-2xl" />
            Shorts
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {subscribedChannelShorts.map((short) => (
              <div
                className="flex-shrink-0 w-[160px] sm:w-[210px]"
                key={short._id}
              >
                <ShortCard
                  shortUrl={short?.shortUrl}
                  title={short?.title}
                  channelName={short?.channel?.name}
                  avatar={short?.channel?.avatar}
                  views={short?.views}
                  id={short?._id}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Recent Videos */}
      {subscribedChannelVideos?.length > 0 && (
        <div className="mb-10 border-t border-gray-800 pt-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
            <GoVideo className="text-red-600 text-2xl" />
            Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4">
            {subscribedChannelVideos.map((video) => (
              <VideoCard
                key={video._id}
                videoUrl={video?.videoUrl}
                title={video?.title}
                channelName={video?.channel?.name}
                channelLogo={video?.channel?.avatar}
                thumbnail={video?.thumbnail}
                views={video?.views}
                id={video?._id}
                duration={duration[video?._id] || "0:00"}
              />
            ))}
          </div>
        </div>
      )}

      {/* 4. Playlists */}
      {subscribedChannelPlaylists?.length > 0 && (
        <div className="mb-10 border-t border-gray-800 pt-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
            <FaList className="text-red-600 text-xl" />
            Playlists
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4">
            {subscribedChannelPlaylists.map((playlist) => (
              <PlaylistCard
                key={playlist?._id}
                id={playlist?._id}
                title={playlist?.title}
                videos={playlist?.videos}
                savedBy={playlist?.savedBy}
              />
            ))}
          </div>
        </div>
      )}

      {/* 5. Community Posts */}
      {subscribedChannelCommunityPosts?.length > 0 && (
        <div className="mb-10 border-t border-gray-800 pt-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
            <MdOutlinePostAdd className="text-red-600 text-2xl" />
            Community Posts
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {subscribedChannelCommunityPosts.map((post) => (
              <CommunityPostCard
                key={post._id}
                post={post}
                onUpdatePost={handlePostUpdate}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscriptions;
