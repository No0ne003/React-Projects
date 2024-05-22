import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function NavLinks({ setCursorVariant, link, icon, name }) {
  const handleMouseEnter = () => setCursorVariant("text");
  const handleMouseLeave = () => setCursorVariant("default");

  return (
    <Button
      variant="ghost"
      size="icon"
      asChild
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={link} rel="noopener" tabIndex="-1" target="_blank">
        {icon}
        <span className="sr-only">{name}</span>
      </Link>
    </Button>
  );
}

export default NavLinks;
