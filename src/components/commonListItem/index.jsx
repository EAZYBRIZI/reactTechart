import React from "react";
import styles from "./index.module.css"
import Button from "../commonButton";
import EditUser from "../../modules/editUser"
import ModalStore from "../../store/ModalStore"

const ListItem = ({ id, name, website, deleteRow, index }) => {

    const {changeModalState, setModalComponent } = {...ModalStore}

    const openModalHandler = (index) => {
        changeModalState(true)
        setModalComponent(<EditUser/>, index)
    }

    return (
        <div className={styles.root}>
            <div className={styles.rowId}>{id}</div>
            <div className={styles.rowName}>{name}</div>
            <div className={styles.rowWebsite}>{website}</div>
            <div className={styles.deleteButton}>
                <Button 
                    deleteRow={deleteRow}
                    index={index}
                    text={'Удалить'}
                    func={() => deleteRow(index)}
                    type="delete"
                />
            </div>
            <div className={styles.editButton}>
                <Button 
                    index={index}
                    text={'Редактировать'}
                    func={() => openModalHandler(index)}
                    type="edit"
                />
            </div>
        </div>
    )
}

export default ListItem