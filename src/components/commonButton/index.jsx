import React from "react";
import clsx from "clsx";
import styles from "./index.module.css"

const Button = ({ text, func, type, style}) => {
    
    return (
        <button type="submit"
            style={style}
            className={clsx(styles.root, {
            [styles.addButton]: type === "add",
            [styles.deleteButton]: type === "delete",
            [styles.editButton]: type === "edit",
            [styles.sortButton]: type === "sort"
        })} onClick={func}>{text}</button>
    )
}

export default Button