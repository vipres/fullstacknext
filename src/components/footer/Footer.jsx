
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {


  return (
    <div className={styles.container}>
      <div>2023 Lamamia. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" alt="facebook"  width={15} height={15} className={styles.iconsocial} />
        <Image src="/2.png" alt="instagran"  width={15} height={15} className={styles.iconsocial} />
        <Image src="/3.png" alt="twitter"  width={15} height={15} className={styles.iconsocial} />
        <Image src="/4.png" alt="Youtube"  width={15} height={15} className={styles.iconsocial} />
      </div>
    </div>
  )
}

export default Footer
