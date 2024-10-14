"use client";

import * as React from "react";
import styles from "@/components/Social/Profile/Friends/Search.module.css";

const SearchForm: React.FC = () => {
  return (
    <>
      <form className={styles.searchBox}>
        <label>
          <i className="material-symbols-outlined">search</i>
        </label>
        <input
          type="text"
          className={styles.inputSearch}
          placeholder="Search"
        />
      </form>
    </>
  );
};

export default SearchForm;
