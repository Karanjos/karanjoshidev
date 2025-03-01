import Link from "next/link";

type LinkProps = {
  href: string;
  label: string;
};

const CustomLink = ({ href, label }: LinkProps) => {
  return (
    <Link
      href={href}
      // className="w-full px-0 py-2 rounded-2xl text-center text-gray-700 dark:text-gray-300 hover:text-gray-950 hover:dark:text-white transition-all duration-300 hover:scale-110"
    >
      {label}
    </Link>
  );
};
export default CustomLink;
