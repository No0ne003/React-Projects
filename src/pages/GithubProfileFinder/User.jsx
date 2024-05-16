const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
    message,
  } = user;

  const createDate = new Date(created_at);

  if (message) {
    return (
      <h1 className="text-3xl my-10">
        <span className="font-bold hover:underline decoration-2 underline-offset-4">
          User
        </span>{" "}
        Not Found
      </h1>
    );
  }

  return (
    <div className="bg-secondary-foreground/5 border border-primary/15 rounded-md flex flex-col justify-center items-center aspect-[3/1] gap-2 py-6 px-10">
      <div className="flex gap-5">
        <div className="size-20 flex justify-center items-center">
          <img
            className="rounded-lg"
            src={avatar_url}
            alt={`${name || login}'s avatar`}
          />
        </div>
        <div className="flex flex-col justify-center items-start">
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg"
          >
            {name || login}
          </a>
          <p className="text-xs text-foreground/70">
            User joined on{" "}
            {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
              month: "short",
            })} ${createDate.getFullYear()}`}
          </p>
        </div>
      </div>
      <div className="flex gap-2 justify-start items-center w-full">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="font-semibold">{public_repos}</p>
          <p className="font-light text-xs text-foreground/70">Repos</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="font-semibold">{followers}</p>
          <p className="font-light text-xs text-foreground/60">Followers</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="font-semibold">{following}</p>
          <p className="font-light text-xs text-foreground/60">Following</p>
        </div>
      </div>
    </div>
  );
};

export default User;
