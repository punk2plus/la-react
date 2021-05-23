import React from "react"
import styles from "./index.module.css"
import SideBar from "../../components/SideBar"
const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <SideBar />
      <div className={styles["page-content"]}>{children}</div>
    </>
  )
}

export default MainLayout
