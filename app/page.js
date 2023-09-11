
import Menu from "./components/Menu/Menu";
import CardList from "./components/cardList/CardList";
import CategoryList from "./components/categoryList/CategoryList";
import Feature from "./components/feature/Feature";
import styles from "./homepage.module.css";


export default function Home() {
  return (
   <div className={styles.container}> 
<Feature />
<CategoryList />
<div className={styles.content}>
<CardList />
<Menu />
</div>
   </div>
  )
}
