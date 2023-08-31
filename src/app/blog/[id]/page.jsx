import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'

const BlogPost = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iusto ipsam dolor molestiae non, dolore ipsa, repudiandae atque dolorem odit quaerat quam et nulla, pariatur sapiente voluptates ad facere inventore!
        </p>
        <div className={styles.author}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>Manolo Cab</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ipsa libero corporis et minima adipisci non quos, quasi alias hic voluptate animi quo amet! At iste saepe reprehenderit fugit fuga?

      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, illum maiores velit aliquam iste pariatur dolore sapiente alias accusantium qui voluptatum quaerat quod eligendi nam sed, porro nulla labore! Totam.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, harum! Modi id harum ratione nam illum fuga, totam obcaecati quam labore sed voluptatibus? Magnam sequi amet ipsam! Numquam, provident dolorum?
      </p>
    </div>
  </div>
  )
}

export default BlogPost
