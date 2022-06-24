import Image from 'next/image'
import Link from 'next/link'

import styles from './Footer.module.scss'

import Google from 'assets/svg/google.svg'
import Instagram from 'assets/svg/instagram.svg'
import LinkedIn from 'assets/svg/linked-in.svg'
import logo from 'assets/svg/logo.svg'

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logoContainer}>
        <Image src={logo} layout="intrinsic" width="60px" alt="footer-logo" />
      </div>
      <div className={styles.footer__pathContainer}>
        <Link href="/about" className={styles.footer__pathItem}>
          About
        </Link>
        <Link href="/teams" className={styles.footer__pathItem}>
          Teams
        </Link>
        <Link href="/events" className={styles.footer__pathItem}>
          Events
        </Link>
      </div>
      <hr />
      <div className={styles.footer__logoContainer}>
        <a
          href="https://gdsc.community.dev/waseda-university/"
          target="_blank"
          className={styles.footer__pathItem}
          rel="noreferrer"
        >
          <Image src={Google} alt="google" />
        </a>
        <a
          href="https://www.instagram.com/gdsc_waseda/"
          className={styles.footer__pathItem}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/google-dsc-waseda-university"
          className={styles.footer__pathItem}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={LinkedIn} alt="linkdin" />
        </a>
      </div>
      <div className={styles.footer__reserved}>
        All Rights Reserved by GDSC Waseda
      </div>
    </footer>
  )
}

export default Footer
