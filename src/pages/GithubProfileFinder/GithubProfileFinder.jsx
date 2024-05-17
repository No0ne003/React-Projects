import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";
import User from "./User";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("No0ne003");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData(signal) {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`, {
      signal,
    });

    const data = await res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
    }

    console.log(data);
  }

  function handleSumbit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchGithubUserData(signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="container flex flex-col gap-3 justify-start items-center py-3">
      <div id="input-warrper" className="flex gap-3">
        <Input
          className="placeholder:text-foreground/70"
          name="search-by-username"
          type="text"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <Button
          onClick={handleSumbit}
          disabled={userName ? false : true}
          type="submit"
        >
          Search
        </Button>
      </div>
      {loading ? (
        <div className="absolute flex justify-center items-center m-auto inset-0">
          <Loading />
        </div>
      ) : userData !== null ? (
        <div className="my-24">
          <User user={userData} />
        </div>
      ) : null}
    </div>
  );
};

export default GithubProfileFinder;
