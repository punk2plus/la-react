import React from "react"
import styles from "./index.module.css"

const UserLayout: React.FC = ({ children }) => {
  return <div className={styles["page-content"]}>{children}</div>
}

export default UserLayout
