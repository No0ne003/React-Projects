import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="w-full flex justify-center items-center gap-4">
      <Input
        type="text"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <Button onClick={handleSearch} disabled={search === "" ? true : false}>
        Search
      </Button>
    </div>
  );
};

export default Search;
