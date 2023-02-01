import { links } from "../constants";
import styles from "../styles";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center`}
    >
      <Logo className="w-12 aspect-square text-white" />
      <div className="flex justify-center items-center gap-8">
        {links.map((link, i) => (
          <Link
            href={`${link.to}`}
            key={i}
            className="md:block hidden text-white text-base font-medium z-10 transition-all ease-in duration-300 hover:text-primary-hover"
          >
            {link.name}
          </Link>
        ))}
        <Button text="Masuk" />
      </div>
    </div>
  );
};

export default Navbar;
