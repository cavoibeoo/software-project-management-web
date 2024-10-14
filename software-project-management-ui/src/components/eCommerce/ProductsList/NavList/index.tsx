"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/eCommerce/ProductsList/NavList/NavList.module.css";

const NavList: React.FC = () => {
  const pathname = usePathname();
  return (
    <>
      <ul className={styles.navList}>
        <li>
          <Link
            href="/ecommerce/products-list/"
            className={`link ${
              pathname === "/ecommerce/products-list/" ? `${styles.active}` : ""
            }`}
          >
            All Products
          </Link>
        </li>
        <li>
          <Link
            href="/ecommerce/products-list/published/"
            className={`link ${
              pathname === "/ecommerce/products-list/published/"
                ? `${styles.active}`
                : ""
            }`}
          >
            Published Products
          </Link>
        </li>
        <li>
          <Link
            href="/ecommerce/products-list/draft/"
            className={`link ${
              pathname === "/ecommerce/products-list/draft/"
                ? `${styles.active}`
                : ""
            }`}
          >
            Draft Products
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
