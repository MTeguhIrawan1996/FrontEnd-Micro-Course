import { links } from "../constants";
import styles from "../styles";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <nav
      className={`${styles.innerWidth} mx-auto flex justify-between items-center`}
    >
      <Logo className={`w-12 z-10 aspect-square ${props.iconStyle}`} />
      <div className="flex justify-center items-center gap-8">
        {links.map((link, i) => (
          <Link
            href={`${link.to}`}
            key={i}
            className={`link-primary ${props.linkStyle}`}
          >
            {link.name}
          </Link>
        ))}
        {props.title === "Sign In" ? (
          <Link href="/signup" className="btn-primary">
            Daftar
          </Link>
        ) : (
          <Link href="/signin" className="btn-primary">
            Masuk
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
