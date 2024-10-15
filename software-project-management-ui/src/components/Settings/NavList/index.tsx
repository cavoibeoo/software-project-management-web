"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/Settings/NavList/NavList.module.css";

const NavList: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className={styles.navList}>
        <li>
          <Link
            href="/settings/"
            className={`link ${
              pathname === "/settings/" ? `${styles.active}` : ""
            }`}
          >
            Account Settings
          </Link>
        </li>
        <li>
          <Link
            href="/settings/change-password/"
            className={`link ${
              pathname === "/settings/change-password/"
                ? `${styles.active}`
                : ""
            }`}
          >
            Change Password
          </Link>
        </li>
        <li>
          <Link
            href="/settings/connections/"
            className={`link ${
              pathname === "/settings/connections/" ? `${styles.active}` : ""
            }`}
          >
            Connections
          </Link>
        </li>
        <li>
          <Link
            href="/settings/privacy-policy/"
            className={`link ${
              pathname === "/settings/privacy-policy/" ? `${styles.active}` : ""
            }`}
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            href="/settings/terms-conditions/"
            className={`link ${
              pathname === "/settings/terms-conditions/"
                ? `${styles.active}`
                : ""
            }`}
          >
            Terms & Conditions
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
