"use client";

import * as React from "react";
import Link from "next/link";
import styles from "@/components/Social/Profile/NavList/NavList.module.css";
import { usePathname } from "next/navigation";

const NavList: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className={styles.profileNavLinks}>
        <li>
          <Link
            href="/social/profile/"
            className={`link ${
              pathname === "/social/profile/" ? `${styles.active}` : ""
            }`}
          >
            Timeline
          </Link>
        </li>

        <li>
          <Link
            href="/social/about/"
            className={`link ${
              pathname === "/social/about/" ? `${styles.active}` : ""
            }`}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/social/activity/"
            className={`link ${
              pathname === "/social/activity/" ? `${styles.active}` : ""
            }`}
          >
            Activity
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
