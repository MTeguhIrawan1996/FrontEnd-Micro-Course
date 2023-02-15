import React, { useState } from "react";
import styles from "../../styles";
import Link from "next/link";
import Input from "./Input";
import { footer } from "../../constants";

const Footer = () => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  // const footerRef = useRef(null);

  // useEffect(() => {
  //   const stickyOffsetTop = footerRef.current.offsetTop;
  //   const stickyMetaToggler = () => {
  //     dispatch(
  //       setSticky({
  //         isSticky: stickyOffsetTop >= window.pageYOffset + window.innerHeight,
  //       })
  //     );
  //   };

  //   window.addEventListener("scroll", stickyMetaToggler);
  //   return () => {
  //     window.removeEventListener("scroll", stickyMetaToggler);
  //   };
  // }, [dispatch]);

  return (
    <footer className={`mt-12 w-full bg-footer-color px-6 pt-12 sm:px-16`}>
      <div className={`${styles.innerWidth} mx-auto lg:px-12`}>
        <div className="flex flex-col items-start justify-between">
          <div className="flex w-full flex-wrap items-start justify-start gap-6">
            {footer.map((data, i) => (
              <div
                className={`${
                  i === 0 || i === 1
                    ? "w-[40%] lg:flex-[2]"
                    : "w-full lg:flex-[3]"
                } flex flex-col gap-4 lg:w-full`}
                key={i}
              >
                <h2 className="text-lg text-white">{data.title}</h2>
                <ul className="flex flex-col gap-2">
                  {data.list.map((l, indexL) => (
                    <li key={indexL}>
                      <Link
                        href={l.to}
                        className="cursor-pointer text-secondary-black hover:text-primary-hover hover:underline hover:underline-offset-1"
                      >
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex w-full flex-col gap-4 lg:flex-[4]">
              <h2 className="text-lg text-white">Promotions</h2>
              <p className="text-secondary-black">
                Submit your emil for new update
              </p>
              <div className="flex w-full items-center justify-center md:justify-start">
                <div className="flex-1">
                  <Input
                    placeholder="Your email"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    autoComplete="off"
                    styleInput="h-10"
                  />
                </div>
                <Link
                  href="/signup"
                  className="btn-primary flex h-10 items-center justify-center rounded-none bg-orange-400 text-sm focus:ring-0"
                >
                  Daftar Now
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 w-full border-t-[1px] border-solid border-secondary-black p-8 text-center">
            <span className="text-sm text-secondary-black">
              {new Date().getFullYear()} Copyright Micro by Ondev. All Rights
              Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
