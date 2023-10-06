import styles from "./index.module.css"

const NotMain = () => {
    return (
        <div className={styles.root}>
            <span></span>
            <div className={styles.grid}>
                <button>9</button>
                <button>8</button>
                <button>7</button>
                <button>6</button>
                <button>5</button>
                <button>4</button>
                <button>3</button>
                <button>2</button>
                <button>1</button>
                <button>0</button>
            </div>
        </div>
    )
}

export default NotMain