import { Button } from "@/components/ui/button"
import PropTypes from 'prop-types';

function NavLinks(props) {

  return(
    <a target="_blank" href={props.link} rel="noopener" tabIndex="-1">
      <Button variant="ghost"  size='icon'>
        <img className="size-4" src={props.logo} alt={props.name} />
        <span className="sr-only">{props.name}</span>
      </Button>
    </a>
  )
}

NavLinks.propTypes = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default NavLinks