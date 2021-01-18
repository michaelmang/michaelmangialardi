import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Icon({ className, icon, ...rest }) {
  return <FontAwesomeIcon {...rest} className={className} icon={icon} />
}
