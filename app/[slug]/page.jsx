import React from 'react'
import styles from "./singlePage.module.css";
import Menu from '../components/Menu/Menu';
import Image from 'next/image';
import Comments from '../components/comments/Comments';



const Singlepage = () => {
  return (
    <div className={styles.container}>
   
<div className={styles.infoContainer}>
    <div className={styles.textContainer}>
        <h1 className={styles.title}>At stet vero erat consetetur amet kasd
             accusam eirmod. 
         </h1>
         <div className={styles.user}>
            <div className={styles.userImageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.avatar}/>
            </div>
<div className={styles.userTextContainer}>
    <span className={styles.username}>John Doe</span>
    <span className={styles.date}>01.01.2023</span>
</div>

         </div>
    </div>
    <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
    </div>
</div>
<div className={styles.content}>
    <div className={styles.post}>
        <div className={styles.description}>
            <p>
                No gubergren voluptua sadipscing sea ipsum ipsum dolor
                . Erat et rebum magna diam et dolores kasd. Accusam ut
                 est ea rebum et est erat ea, voluptua duo sed ipsum 
                 at, duo est nonumy amet voluptua at. Diam no magna
                  kasd ipsum justo elitr, eos amet ipsum sed et duo,
                   diam.
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
                No gubergren voluptua sadipscing sea ipsum ipsum dolor
                . Erat et rebum magna diam et dolores kasd. Accusam ut
                 est ea rebum et est erat ea, voluptua duo sed ipsum 
                 at, duo est nonumy amet voluptua at. Diam no magna
                  kasd ipsum justo elitr, eos amet ipsum sed et duo,
                   diam.
            </p>
            <p>
                No gubergren voluptua sadipscing sea ipsum ipsum dolor
                . Erat et rebum magna diam et dolores kasd. Accusam ut
                 est ea rebum et est erat ea, voluptua duo sed ipsum 
                 at, duo est nonumy amet voluptua at. Diam no magna
                  kasd ipsum justo elitr, eos amet ipsum sed et duo,
                   diam.
            </p>
        </div>

<div className={styles.comment}>
<Comments />
</div>


    </div>
    <Menu />
</div>

    </div>
  )
}

export default Singlepage
