import styles from './index.module.css'

const FoundListItem = ({ id, name, website }) => {
    return (
        <div className={styles.root}>
            <div className={styles.rowId}><span>{id}</span></div>
            <div className={styles.rowName}><span>{name}</span></div>
            <div className={styles.rowWebsite}><span>{website}</span></div>
        </div>
    )
}

export default FoundListItem