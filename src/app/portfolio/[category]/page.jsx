import Button from '@/components/button/Button';
import styles from './page.module.css'
import Image from 'next/image';

const Category = ({params}) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptate in fugit beatae quam. Ea dignissimos accusamus cupiditate iure error nulla et quo quibusdam! Delectus veritatis necessitatibus molestiae placeat obcaecati.</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" fill={true} alt="" className={styles.img}/>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At voluptate in fugit beatae quam. Ea dignissimos accusamus cupiditate iure error nulla et quo quibusdam! Delectus veritatis necessitatibus molestiae placeat obcaecati.</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" fill={true} alt="" className={styles.img}/>
        </div>
      </div>
    </div>
  )
}

export default Category
