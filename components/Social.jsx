import Link from "next/link";
import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from "react-icons/fa";

const socials = [
  {icon: <FaGithub />, path: "https://github.com/DeshanJayasinghe"},
  {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/deshan-jayasinghe-656b4025a/"},
  {icon: <FaYoutube />, path: ""},
  {icon: <FaTwitter />, path: ""},
]
const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
      ))}
    </div>
  
};

export default Social
