import { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import ShortCard from "../components/ShortCard";
import getVideoDuration from "../components/GetVideoDuration";

const FilterResults = ({ filterResults }) => {
  const [duration, setDuration] = useState({});
  const category = filterResults?.keywords?.[0];
  if (!category || category.toLowerCase() === "all") {
    return null;
  }

  const isEmpty =
    (!filterResults?.videos || filterResults.videos.length === 0) &&
    (!filterResults?.shorts || filterResults.shorts.length === 0) &&
    (!filterResults?.playlists || filterResults.playlists.length === 0) &&
    (!filterResults?.channels || filterResults.channels.length === 0);

  useEffect(() => {
    if (
      Array.isArray(filterResults?.videos) &&
      filterResults?.videos?.length > 0
    ) {
      filterResults?.videos?.forEach((video) => {
        if (video?.videoUrl) {
          getVideoDuration(video.videoUrl, (formattedTime) => {
            setDuration((prev) => ({ ...prev, [video._id]: formattedTime }));
          });
        }
      });
    }
  }, [filterResults?.videos]);

  return (
    <div className="px-6 py-4 border border-gray-800 my-5 rounded-xl bg-[#0f0f0f]">
      <h2 className="text-2xl font-semibold mb-4 capitalize">
        {category} Results:
      </h2>

      {isEmpty ? (
        <p className="text-gray-400 text-lg">
          No results found for "{category}"
        </p>
      ) : (
        <>
          {filterResults?.videos?.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-4">Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterResults?.videos?.map((video) => (
                  <VideoCard
                    key={video?._id}
                    id={video?._id}
                    thumbnail={video?.thumbnail}
                    title={video?.title}
                    channelName={video?.channel?.name}
                    views={video?.views}
                    duration={duration[video?._id] || "0:00"}
                    channelLogo={video?.channel?.avatar}
                    time={
                      video?.createdAt
                        ? new Date(video.createdAt).toLocaleDateString()
                        : ""
                    }
                  />
                ))}
              </div>
            </div>
          )}

          {filterResults?.shorts?.length > 0 && (
            <div className="mb-12">
              <h3 className="text-lg font-semibold mb-4">Shorts</h3>
              {/* Horizontal Scroll Container */}
              <div className="flex pb-4 gap-4 scrollbar-hide overflow-x-auto">
                {filterResults?.shorts?.map((short) => (
                  // Added w-[210px] to constrain the card width in this flex slider
                  <div className="flex-shrink-0 w-[210px]" key={short?._id}>
                    <ShortCard
                      id={short?._id}
                      shortUrl={short?.shortUrl}
                      title={short?.title}
                      channelName={short?.channel?.name}
                      avatar={short?.channel?.avatar}
                      views={short?.views}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FilterResults;
