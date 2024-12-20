import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInputBox({
    searchQuery,
    handleSearchChange,
    fetchRepositories,
}) {
  return (
    <div className="flex mb-4 py-2 px-3 items-center gap-2 w-full shadow-sm-[#0A0D120D] shadow-sm sm:w-[366px] border border-[#D5D7DA] rounded-md">
    <FontAwesomeIcon icon={faSearch} className="cursor-pointer"/>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search repositories..."
        className="flex-1 border-none outline-none"
      />
    </div>
  );
}
