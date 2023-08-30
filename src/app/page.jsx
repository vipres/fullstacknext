
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Image from 'next/image'

export default function Home() {
  return (
   <div className="">
    <div className={styles.texts}>
      <h1>Better design for your digital products.</h1>
      <p>Turning your Idea into Reality, We bring together the teams from the global tech.</p>
    </div>
    <div className={styles.imgContainer}></div>
    <Image src={Hero} alt="hero" className={styles.img}/>
   </div>
  )
}
