"use client";

import * as React from "react";
import Link from "next/link";
import styles from "@/components/Profile/NavList/NavList.module.css";
import { usePathname } from "next/navigation";

const NavList: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className={styles.profileNavLinks}>
        <li>
          <Link
            href="/profile/"
            className={`link ${
              pathname === "/profile/" ? `${styles.active}` : ""
            }`}
          >
            Profile
          </Link>
        </li>

        <li>
          <Link
            href="/profile/teams/"
            className={`link ${
              pathname === "/profile/teams/" ? `${styles.active}` : ""
            }`}
          >
            Teams
          </Link>
        </li>

        <li>
          <Link
            href="/profile/projects/"
            className={`link ${
              pathname === "/profile/projects/" ? `${styles.active}` : ""
            }`}
          >
            Projects
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
