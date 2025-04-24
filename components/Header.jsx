import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 bg-pink-50/20 text-white">
      <div className="container mx-auto flex justify-between items-center">
          <Logo />
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href='/contact'>
          <Button>
            Hire me
          </Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
