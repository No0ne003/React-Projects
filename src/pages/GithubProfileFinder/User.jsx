export const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createDate = new Date(created_at);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="size-48 flex justify-center items-center">
        <img className="rounded-lg" src={avatar_url} alt="User" />
      </div>
      <div className="flex justify-center items-center flex-col">
        <a
          className="underline hover:text-white"
          href={`https://github.com/${login}`}
          target="_blank"
        >
          {name || login}
        </a>
        <p className="text-sm">
          User joined on{" "}
          {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
            month: "short",
          })} ${createDate.getFullYear()}`}
        </p>
      </div>
      <div className="flex flex-col my-4 space-y-2 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p>Public Repos</p>
          <p className="font-semibold">{public_repos}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Followers</p>
          <p className="font-semibold">{followers}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>Following</p>
          <p className="font-semibold">{following}</p>
        </div>
      </div>
    </div>
  );
};
