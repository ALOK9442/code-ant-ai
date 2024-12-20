import Card from "../card/card";

export default function RepositoriesList({ isLoading, repos, languageColors }) {
  console.log("repos", repos);
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div
      className="overflow-y-auto h-full "
      style={{
        scrollbarWidth: "none",
      }}
    >
      {repos.map((repo) => (
        <Card key={repo.id} repo={repo} languageColors={languageColors} />
      ))}
    </div>
  );
}
