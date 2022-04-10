import Link from "next/link";
import { MobileMenu } from "./mobileMenu";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-orange-200 text-center">
      <Link href="/">
        <a className="ml-4 text-yellow-700">
          <h1 className="text-2xl">Tres Bien</h1>
          <p className="text-xs">Coffee and Juice Bar</p>
        </a>
      </Link>
      <ul className="md:flex justify-evenly text-yellow-700 w-1/2 hidden">
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

      <MobileMenu />
    </nav>
  );
};
