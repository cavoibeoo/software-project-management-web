"use client";

import * as React from "react";
import styles from "@/components/eCommerce/OrderDetails/TrackingID/TrackingID.module.css";

const TrackingID: React.FC = () => {
  return (
    <>
      <div className={styles.trackingIdCard}>
        <h5 className={`text-white ${styles.title}`}>
          Tracking ID: 000346798254
        </h5>

        <div className={styles.numbers}>
          <div className={styles.box}>
            <div className="rounded-circle bg-primary text-center transition text-white fw-semibold">
              01
            </div>
            <span className="text-white">Order Placed</span>
          </div>

          <div className={styles.box}>
            <div
              className="rounded-circle bg-primary text-center transition text-white"
              style={{ fontWeight: "600" }}
            >
              02
            </div>
            <span className="text-white">Packed</span>
          </div>

          <div className={`${styles.box} ${styles.active}`}>
            <div
              className="rounded-circle bg-primary text-center transition text-white"
              style={{ fontWeight: "600" }}
            >
              03
            </div>
            <span className="text-white">Shipped</span>
          </div>

          <div className={styles.box}>
            <div
              className="rounded-circle bg-primary text-center transition text-white"
              style={{ fontWeight: "600" }}
            >
              04
            </div>
            <span className="text-white">Delivered</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingID;
