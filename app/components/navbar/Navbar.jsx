import React from 'react'
import styles from "./navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';


const Navbar = () => {
  return (
    <div className={styles.container}>
 


{/* this is first component of navbar */}
<div className={styles.social}>
<Image src="/facebook.png" alt='facebook' width={24} height={24}/>
<Image src="/instagram.png" alt='instagram' width={24} height={24}/>
<Image src="/tiktok.png" alt='tiktok' width={24} height={24}/>
<Image src="/youtube.png" alt='youtube' width={24} height={24}/>

</div>


{/* this is second component of navbar */}
<div className={styles.logo}>
    lamablog
</div>

{/* this is third component of navbar */}
<div className={styles.links}>
    <ThemeToggle />
    <Link href="/" className={styles.link}>Homepage</Link>
    <Link href="/" className={styles.link}>Contact</Link>
    <Link href="/" className={styles.link}>About</Link>
<AuthLinks />
</div>
    </div>
  )
}

export default Navbar
