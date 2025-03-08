import Link from "next/link";
import { Sparkles } from "lucide-react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-sm font-extrabold tracking-wide uppercase text-primary transition-all duration-300 hover:text-primary/80 dark:text-white dark:hover:text-gray-300 sm:text-base md:text-lg"
    >
      <Sparkles className="w-4 h-4 text-primary dark:text-white sm:w-5 sm:h-5" />
      YNAH
    </Link>
  );
};

export default Logo;