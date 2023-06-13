import styles from './Index.module.css'

import rocketLogo from '../../assets/rocket-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="ToDo List Logo" />
    </header>
  )
}