import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => (open ? setOpen(false) : setOpen(true));

  return (
    <>
      <div
        className={`tham tham-e-squeeze tham-w-6 mr-4 md:hidden ${
          open ? "tham-active" : null
        }`}
        onClick={toggleMenu}
      >
        <div className="tham-box">
          <div className="tham-inner bg-yellow-700" />
        </div>
      </div>
      <ul
        className={`flex-col flex text-yellow-700 w-full absolute md:hidden transition-all duration-300 ${
          open ? "top-20" : "-top-20"
        }`}
      >
        <li>
          <Link href="/menu">
            <a>Menu</a>
          </Link>
        </li>
        <li>
          <Link href="/nosotros">
            <a>Nosotros</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
