import Link from "next/link";

type LinkProps = {
  href: string;
  label: string;
};

const CustomLink = ({ href, label }: LinkProps) => {
  return (
    <Link href={href} className=" w-full px-4 py-2 rounded-2xl text-center">
      {label}
    </Link>
  );
};
export default CustomLink;
