import styles from "./index.module.css"
import { NavLink } from "react-router-dom"

const RouterLink = ({ href, text }) => {
    return (
        <div className={styles.root}>
            <NavLink 
                className={styles.link} 
                to={href}>
                {text}
            </NavLink>
        </div>
    )
}

export default RouterLink