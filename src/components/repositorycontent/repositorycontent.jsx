import { faAdd, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RepositoryContent({
  totalCount,
  fetchRepositories,
  searchQuery,
}) {
  return (
    <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-2 md:items-center mb-4">
      <div>
        <h1 className="text-2xl font-semibold">Repositories</h1>
        <p className="text-sm font-normal text-[#414651]">
          {totalCount ? totalCount : 0} Total Repositories
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => fetchRepositories(searchQuery)}
          className="px-4 py-2 flex items-center border rounded-md gap-1 text-[#414651] text-sm font-normal"
        >
          <FontAwesomeIcon icon={faSync} className="w-4 h-4" />
          Refresh
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 border rounded-md flex items-center gap-1 text-sm font-normal">
          <FontAwesomeIcon icon={faAdd} className="w-4 h-4" />
          Add Repository
        </button>
      </div>
    </div>
  );
}
