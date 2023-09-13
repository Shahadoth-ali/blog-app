import React from 'react'
import styles from "./card.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
              <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
            <h1>lorem ipsum dolor sit amet consector adipiscing elit</h1>
            </Link>
         
            <p className={styles.desc}>
                Lorem diam consetetur sed at accusam et at aliquyam 
                dolore kasd. Magna amet dolores dolor et takimata 
                rebum kasd tempor et. Takimata dolore et ipsum 
                dolore nonumy, rebum lorem et eirmod voluptua
                 eirmod justo, aliquyam duo magna ea duo. Lorem.
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card
