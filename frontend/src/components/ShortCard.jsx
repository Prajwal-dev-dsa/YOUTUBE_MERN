import { useNavigate } from "react-router-dom";

const ShortCard = ({ shortUrl, title, channelName, avatar, views, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full max-w-[210px] mx-auto cursor-pointer relative group flex flex-col gap-2"
      onClick={() => navigate(`/play-short/${id}`)}
    >
      <div className="rounded-xl overflow-hidden bg-black w-full aspect-[9/16] border border-gray-700 relative">
        <video
          src={shortUrl}
          className="w-full h-full object-cover"
          muted
          playsInline
          onContextMenu={(e) => e.preventDefault()}
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        <div className="absolute bottom-2 left-2 right-2 z-10">
          <h3 className="text-sm font-bold text-white line-clamp-2 drop-shadow-md mb-1">
            {title}
          </h3>
          <span className="text-xs text-gray-200 font-medium drop-shadow-md">
            {Number(views) >= 1_000_000
              ? `${(Number(views) / 1_000_000).toFixed(1)}M views`
              : Number(views) >= 1_000
              ? `${(Number(views) / 1_000).toFixed(1)}K views`
              : views}{" "}
            views
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShortCard;
