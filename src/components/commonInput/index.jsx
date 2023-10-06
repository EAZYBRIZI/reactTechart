import styles from './index.module.css'

const CommonInput = ({ type, placeholder, name, id, func }) => {
    return (
        <div className={styles.root}>
            <input 
                type={type} 
                placeholder={placeholder} 
                name={name} 
                onChange={func}
                id={id}
            />
        </div>
    )
}

export default CommonInput