import React from 'react'
import styles from "./singlePage.module.css";
import Menu from '@/app/components/Menu/Menu';
import Image from 'next/image';
import Comments from '@/app/components/comments/Comments';


const getData=async (slug)=>{
    const res=await fetch(`http://localhost:3000/api/posts/${slug}}`,{
       cache:"no-store",
    });
  
    if(!res.ok){
       throw new Error("Failed")
    }
    return res.json()
  }




const Singlepage =async ({params}) => {

const {slug}=params;

const data=await getData(slug)


  return (
    <div className={styles.container}>
   
<div className={styles.infoContainer}>
    <div className={styles.textContainer}>
        <h1 className={styles.title}>
           {data?.title}
         </h1>
         <div className={styles.user}>
           {data?.img &&  <div className={styles.userImageContainer}>
            <Image src={data.img} alt='' fill className={styles.avatar}/>
            </div>}
<div className={styles.userTextContainer}>
    <span className={styles.username}>{data?.user.name}</span>
    <span className={styles.date}>01.01.2023</span>
</div>

         </div>
    </div>
    {data?.img && (
 <div className={styles.imageContainer}>
 <Image src={data.img} alt='' fill className={styles.image}/>
</div>
    )}
   
</div>
<div className={styles.content}>
    <div className={styles.post}>

        <div className={styles.description} >
        {/* //  dangerouslySetInnerHTML={{__html:data?.desc}} */}

<p>{data?.desc}</p>
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