import { links } from "../constants";
import styles from "../styles";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center`}
    >
      <Logo className={`w-12 aspect-square ${props.iconStyle}`} />
      <div className="flex justify-center items-center gap-8">
        {links.map((link, i) => (
          <Link
            href={`${link.to}`}
            key={i}
            className={`md:block hidden text-base font-medium z-10 transition-all ease-in duration-300 hover:text-primary-hover ${props.linkStyle}`}
          >
            {link.name}
          </Link>
        ))}
        {props.title === "Sign In" ? (
          <Link
            href="/signup"
            className="bg-secondary-color px-6 py-2 rounded-sm text-white font-medium z-10 hover:bg-primary-hover focus:ring-2 focus:ring-sky-300 transition-all ease-cubic-bezier duration-300 delay-0 active:bg-secondary-color drop-shadow-lg"
          >
            Daftar
          </Link>
        ) : (
          <Link
            href="/signin"
            className="bg-secondary-color px-6 py-2 rounded-sm text-white font-medium z-10 hover:bg-primary-hover focus:ring-2 focus:ring-sky-300 transition-all ease-cubic-bezier duration-300 delay-0 active:bg-secondary-color drop-shadow-lg"
          >
            Masuk
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
