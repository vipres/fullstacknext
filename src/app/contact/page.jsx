import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>
      Let's Keep in Touch
      </h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt='' fill={true} className={styles.image}/>
      </div>
      <form className={styles.formContainer}>
        <input type="text" placeholder="Name" className={styles.input}/>
        <input type="email" placeholder="Email" className={styles.input}/>
        <textarea placeholder="Message" className={styles.textarea}/>
        <Button url='#' text="Send" className={styles.button}/>
      </form>
      </div>
    </div>
  )
}

export default Contact
