import React from "react"
import { Link } from 'react-router-dom';
import styles from "./index.module.css"

const SideBar: React.FC = (props) => {
  return <div className={styles.SideBar}>
      <div className={styles.SideBarItem}>
        <Link to="/a">pageA</Link>
      </div>
      <div className={styles.SideBarItem}>
        <Link to="/b">pageB</Link>
      </div>
      <div className={styles.SideBarItem}>
        <Link to="/c">pageC</Link>
      </div>
  </div>
}

export default SideBar
