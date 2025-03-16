import Link from "next/link";
import { usePathname } from "next/navigation";
import {  motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/services", name: "services" },
  { path: "/contact", name: "contact" },
];

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const Nav: React.FC<NavProps> = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <nav className={containerStyles}>
      {links.map((link) => (
        <Link key={link.path} href={link.path} className={`capitalize ${linkStyles}`}>
          {link.path === path && (
            <motion.span initial={{ y: '100%' }} animate={{y: 0}} transition={{type: 'tween'}} layoutId='underline' className={underlineStyles} />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;