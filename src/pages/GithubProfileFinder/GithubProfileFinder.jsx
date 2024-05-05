import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { User } from "./User";

export const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("No0ne003");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
    }

    console.log(data)
  }

  function handleSumbit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div className="flex flex-col gap-3 justify-start items-center py-3">
      <div id="input-warrper" className="flex gap-3">
        <Input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <Button onClick={handleSumbit} type='submit'>
          Search
        </Button>
      </div>
      {loading ? (
        <div className="absolute inset-0 m-auto flex justify-center items-center">
          <div className="loader "></div>
        </div>
      ) : userData !== null ? (
        <User user={userData} />
      ) : null}
    </div>
  );
};
