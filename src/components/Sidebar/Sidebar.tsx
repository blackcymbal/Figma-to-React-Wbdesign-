import React from "react"
import styles from "./Sidebar.module.scss"
import samanthaImg from "../../assets/png/samantha.png"
import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
  const location = useLocation()

  const sidebarNavLinks = [
    "dashbaord",
    "expenses",
    "wallet",
    "summery",
    "accounts",
    "settings",
  ]

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.ProfileImageDiv}>
              <img src={samanthaImg} alt='samantha' />
              <p className={styles.notifications}>4</p>
            </div>
            <p className={styles.userName}>Samantha</p>
            <p className={styles.userEmail}>samantha@gmail.com</p>
          </div>

          <nav className={styles.sidebarNav}>
            <ul>
              {sidebarNavLinks.map((item) => (
                <li className={styles.sidebarNavItem} key={item}>
                  <Link
                    className={
                      location.pathname === `/${item}`
                        ? styles.sidebarNavLinkActive
                        : styles.sidebarNavLink
                    }
                    to={`/${item}`}
                  >
                    {item.charAt(0).toLocaleUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
