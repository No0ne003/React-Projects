import UseFetchHookTest from "./use-fetch/test";
import UseOnClickOutsideTest from "./use-outside-click/test";

const CustomHooks = () => {
  return (
    <div className="container flex flex-col gap-3 justify-start items-center py-10 space-y-10">
      <UseFetchHookTest />
      <UseOnClickOutsideTest />
    </div>
  );
};

export default CustomHooks;
