"use client";

import styles from "./styles.module.scss";
import Link from "next/link";

function Home() {
  return (
    <div className={styles.main}>
      <Link href="/counter" className={styles.link}>
        Contador
      </Link>
      <Link href="/posts" className={styles.link}>
        Posts
      </Link>
      <Link href="/users" className={styles.link}>
        Usuarios
      </Link>
    </div>
  );
}

export default Home;
