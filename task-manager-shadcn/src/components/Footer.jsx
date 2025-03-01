"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-36 bg-amber-500 flex justify-around items-center">
      <div className="flex">
        <div>
          <h1 className="text-2xl">Work Manager</h1>
          <p>powered by ankit singh yadav</p>
        </div>
      </div>
      <div>
        <ul className=" space-x-6">
          <li className="hover:text-amber-300">
            <Link href="https://www.linkedin.com/in/ankit-singh-yadav-a0883022b/">
              Linked In
            </Link>
          </li>
          <li className="hover:text-amber-300">
            <Link href="https://www.instagram.com/professor__ankit/">
              Instagram
            </Link>
          </li>
          <li>
            <p> Email : ankitsinghyadav009@gmail.com</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
