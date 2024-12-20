import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import RepositoriesList from "../../components/repositorieslist/repositorieslist";
import SearchInputBox from "../../components/searchinputbox/searchinputbox";
import RepositoryContent from "../../components/repositorycontent/repositorycontent";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeLink, setActiveLink] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const fetchRepositories = async (query) => {
    const effectiveQuery = query || "react";
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${effectiveQuery}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setRepos(data.items || []);
      setTotalCount(data.items.length);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedFetch = useCallback(debounce(fetchRepositories, 500), []);

  useEffect(() => {
    fetchRepositories("react");
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedFetch(query);
  };

  const languageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572A5",
    Ruby: "#701516",
    Java: "#b07219",
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
      <div className="flex-1 p-6 md:mt-0 mt-12">
        <RepositoryContent
          totalCount={totalCount}
          fetchRepositories={fetchRepositories}
          searchQuery={searchQuery}
        />
        <SearchInputBox
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          fetchRepositories={fetchRepositories}
        />
        <RepositoriesList
          repos={repos}
          isLoading={isLoading}
          languageColors={languageColors}
        />
      </div>
    </div>
  );
}
