"use client";

import * as React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/Apps/Email/InboxNavLinks/InboxNavLinks.module.css";

const InboxNavLinks: React.FC = () => {
	const pathname = usePathname();

	return (
		<>
			<ul className={styles.inboxNavLinks}>
				<li className="d-inline-block">
					<NextLink
						href="/sine/email/"
						className={`link ${
							pathname === "/sine/email/" ? `${styles.active}` : ""
						}`}
					>
						<i className="material-symbols-outlined">inbox</i>
						Primary
					</NextLink>
				</li>

				<li className="d-inline-block">
					<NextLink
						href="/sine/email/promotions/"
						className={`link ${
							pathname === "/sine/email/promotions/" ? `${styles.active}` : ""
						}`}
					>
						<i className="material-symbols-outlined">shoppingmode</i>
						Promotions
					</NextLink>
				</li>
			</ul>
		</>
	);
};

export default InboxNavLinks;
