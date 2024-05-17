import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Suggesstions } from "./Suggesstions";
import Loading from "@/components/ui/Loading";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [controller, setController] = useState(null);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(event) {
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers() {
    if (controller) {
      controller.abort();
    }

    const newController = new AbortController();
    setController(newController);

    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users", {
        signal: newController.signal,
      });
      const data = await response.json();

      console.log(data);
      if (data && data.users && data.users.length) {
        setLoading(false);
        setUsers(data.users.map((userItem) => userItem.firstName));
        setError(null);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        setLoading(false);
        console.log(error);
        setError(error);
      }
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);

  return (
    <div className="container flex flex-col justify-start items-center py-4 w-fit">
      <Input
        value={searchParam}
        onChange={handleChange}
        className="w-80 focus-visible:ring-0"
        name="search"
        placeholder="Search Users Here..."
      />
      {loading ? (
        <div className="absolute inset-0 m-auto flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        showDropDown && (
          <Suggesstions handleClick={handleClick} data={filteredUsers} />
        )
      )}
    </div>
  );
};

export default SearchAutoComplete;
