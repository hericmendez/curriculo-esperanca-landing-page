import { FC, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50 min-h-[60px] flex flex-row justify-center  items-center">
      <button
        onClick={toggleMenu}
        className="md:hidden text-pink-500 dark:text-yellow-400 text-2xl"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>
      {/* Links de navegação */}
      <nav
        className={`md:flex justify-center gap-6 font-semibold text-pink-500
          ${
            isOpen ? "block px-6 pb-4" : "hidden"
          } md:pb-0 md:px-0 gap-10 text-xl`}
      >
        <Link
          to="/"
          className="block py-2 hover:text-pink-300"
          onClick={() => setIsOpen(false)}
        >
          Início
        </Link>
        {/*        <Link
          to="/sobre"
          className="block py-2 hover:text-pink-300 "
          onClick={() => setIsOpen(false)}
        >
          Sobre
        </Link> */}
        <Link
          to="/servicos"
          className="block py-2 hover:text-pink-300 "
          onClick={() => setIsOpen(false)}
        >
          Serviços
        </Link>
        <Link
          to="/talentos"
          className="block py-2 hover:text-pink-300 dark:"
          onClick={() => setIsOpen(false)}
        >
          Banco de talentos
        </Link>
        <Link
          to="/blog"
          className="block py-2 hover:text-pink-300 "
          onClick={() => setIsOpen(false)}
        >
          Blog
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
