import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <Link
      className={`flex items-center gap-1 fixed top-[20px] z-[0] left-0 px-2 xl:px-4`}
      to={"React-Projects/"}
    >
      <FaArrowLeft className="fill-foreground text-[16px] xl:text-[14px] 2xl:text-[18px]" />
      <Button
        className="p-0 text-foreground hidden xl:block 2xl:text-[20px] font-light"
        variant="link"
      >
        Back
      </Button>
    </Link>
  );
};

export default GoBack;
