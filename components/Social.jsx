import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    link: "https://github.com/UnoSerhii",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/devserhiikokorksyi/",
  },
  {
    icon: <FaTelegram />,
    link: "https://t.me/Serhii_Kokorskyi",
  },
];
const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((social) => {
      return (
        <Link
          key={social.link}
          href={social.link}
          target="_blank"
          className={iconStyles}
        >
          {social.icon}
        </Link>
      );
    })}
  </div>;
};

export default Social;
