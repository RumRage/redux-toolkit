import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.main}>
      <Link href="/">
        <h1>Manejo Global de Redux Toolkit</h1>
      </Link>
    </div>
  );
};

export default Header;
