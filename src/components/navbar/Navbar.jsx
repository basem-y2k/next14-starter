import Links from './links/Links';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Nutri Helper</div>
      <div>
        <Links></Links>
        {/* <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
