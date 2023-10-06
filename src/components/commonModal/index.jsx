import styles from './index.module.css'
import Store from '../../store/ModalStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const Modal = observer(() => {
    const {component, modalState, changeModalState} = {...Store}

    useEffect(() => {
        const escapeDownHandler = (e) => {
            if(e.key === 'Escape' && modalState === true)
                changeModalState(false)
        }
      
        document.addEventListener('keydown', escapeDownHandler)

        return () => document.removeEventListener('keydown', escapeDownHandler)
    }, [modalState, changeModalState])

    if(!modalState)
        return null

    return (
        <div className={styles.root}>
            <div className={styles.background} onClick={() => changeModalState(false)}></div>
            <div className={styles.contentWrapper}>
                <div className={styles.buttonWrapper}>
                    <div className={styles.button} onClick={() => changeModalState(false)}>
                        X
                    </div>
                </div>
                <div className={styles.content}>
                    {component}
                </div>
            </div>
        </div>
    )
})

export default Modal