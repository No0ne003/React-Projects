export const Suggesstions = ({ data, handleClick }) => {
  return (
    <ul className="w-full border-input border-[1px] border-t-0 px-4 py-2 empty:hidden flex flex-col gap-1">
      {data && data.length
        ? data.map((item, index) => <li className="text-sm cursor-pointer" key={index} onClick={handleClick}>{item}</li>)
        : null}
    </ul>
  );
};
