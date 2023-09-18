
import Menu from "./components/Menu/Menu";
import CardList from "./components/cardList/CardList";
import CategoryList from "./components/categoryList/CategoryList";
import Feature from "./components/feature/Feature";
import styles from "./homepage.module.css";


export default function Home({searchParams}) {

const page=parseInt(searchParams.page) || 1;



  return (
   <div className={styles.container}> 
<Feature />
<CategoryList />
<div className={styles.content}>
<CardList page={page}/>
<Menu />
</div>
   </div>
  )
}
