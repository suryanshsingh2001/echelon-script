import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="w-30">
          <Image
            src="/assets/images/logo-black-nobg.svg"
            alt="logo"
            width={150}
            height={38}
          />
        </Link>

      <p>2024 EchelonScript. All right reserved</p>

      </div>
    </footer>
  );
};

export default Footer;
