import { faDatabase, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ repo, languageColors }) {
  const updatedAt = new Date(repo.updated_at);
  const today = new Date();
  const diffTime = today - updatedAt;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="p-4 mb-2 border rounded shadow-sm hover:bg-gray-100">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-medium">{repo.name}</h2>
          <span className="border rounded-xl border-[#B2DDFF] px-2 text-sm font-normal">
            {repo.private ? (
              <span className="text-[#175CD3]">Private</span>
            ) : (
              <span className="text-[#175CD3]">Public</span>
            )}
          </span>
        </div>
      </div>

      <p className="text-sm font-normal text-[#181D27]">
        {repo.description || "No description available."}
      </p>

      <div className="flex items-center space-x-4 text-sm mt-2">
        <p className="flex items-center gap-1">
          <span
            style={{
              color: languageColors[repo.language] || "#000",
            }}
          >
            ●
          </span>
          <span className="sm:text-sm font-normal text-[#181D27]">
            {repo.language || "Unknown"}
          </span>
        </p>
        <span className="flex gap-1 items-center justify-center text-sm font-normal text-[#181D27]">
          <FontAwesomeIcon icon={faDatabase} className="w-4 h-4" />: {repo.size}{" "}
          KB
        </span>
        <span className="text-sm font-normal text-[#181D27]">
          Last updated:{" "}
          {diffDays <= 7
            ? `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`
            : new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
