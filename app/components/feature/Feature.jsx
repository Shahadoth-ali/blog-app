import React from 'react'
import styles from "./feature.module.css";
import Image from 'next/image';

const Feature = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,shahadoth here!</b>
      Discover my stories and creative ideas.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>lorem ipsum dolor sit amet alin consectetur adipisicis cleit</h1>
          <p className={styles.postDesc}>
            Est gubergren dolores ea tempor clita ipsum diam takimata lorem gubergren.
             Et vero elitr diam sit amet amet clita accusam.Justo kasd ipsum et eos labore 
             aliquyam. Tempor ea sea dolor tempor amet invidunt sit,
              duo ea dolores sadipscing erat.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Feature
