import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.maincontainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="" width={400} height={250} className={styles.container} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptas excepturi facere sed quae unde, nostrum quisquam ratione dignissimos dolor modi odio! Praesentium tenetur optio, sint consectetur dolorem blanditiis quia!</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="" width={400} height={250} className={styles.container} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptas excepturi facere sed quae unde, nostrum quisquam ratione dignissimos dolor modi odio! Praesentium tenetur optio, sint consectetur dolorem blanditiis quia!</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="" width={400} height={250} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptas excepturi facere sed quae unde, nostrum quisquam ratione dignissimos dolor modi odio! Praesentium tenetur optio, sint consectetur dolorem blanditiis quia!</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="" width={400} height={250} className={styles.container} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptas excepturi facere sed quae unde, nostrum quisquam ratione dignissimos dolor modi odio! Praesentium tenetur optio, sint consectetur dolorem blanditiis quia!</p>
        </div>
      </Link>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg" alt="" width={400} height={250} className={styles.container} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptas excepturi facere sed quae unde, nostrum quisquam ratione dignissimos dolor modi odio! Praesentium tenetur optio, sint consectetur dolorem blanditiis quia!</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog
