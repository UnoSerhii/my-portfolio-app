import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-2xl font-bold">
        Serhii <span className="text-accent">.</span>
      </h1>
    </Link>
  );
};

export default Logo;
