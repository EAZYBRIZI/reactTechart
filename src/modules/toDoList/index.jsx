import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import styles from "./index.module.css"
import ListItem from "../../components/commonListItem"
import Button from "../../components/commonButton"
import Input from "../../components/commonInput"
import MainStore from '../../store/MainStore'
import ModalStore from "../../store/ModalStore"
import Portal from "../../components/commonPortal"
import Modal from "../../components/commonModal"
import AddNewsUser from "../addNewUser"
import FoundListItem from "../../components/commonFoundListItem"
import { NavLink } from "react-router-dom"

const ToDoList = observer(() => {
    const { fetchData, data, foundData, deleteRow, sortData, searchData } = {...MainStore}
    const { changeModalState, setModalComponent, modalState, component } = {...ModalStore}

    const openModalHandler = () => {
        changeModalState(true)
        setModalComponent(<AddNewsUser/>)
    }

    useEffect(() => {
        fetchData() 
    }, [fetchData])

    if(data === null)
        return <div>Loading</div>

    return (
        <div className={styles.root}>
            <div className={styles.topPanel}>
                <div className={styles.sort}>
                    <Button
                        text="Имя"
                        type="sort"
                        func={() => sortData("name")}
                    />
                    <Button
                        text="Website"
                        type="sort"
                        func={() => sortData("website")}
                    />
                </div>
                <div className={styles.search}>
                    <Input 
                        className={styles.searchInput} 
                        type="search"
                        placeholder="Поиск"
                        func={(e) => searchData(e)}
                    />

                    <div className={styles.searchResult}>
                        {foundData.map((item, i) => 
                            <FoundListItem
                                key={i}
                                id={item.id}
                                name={item.name}
                                website={item.website}
                            />
                        )}
                    </div>
                </div>
            </div>
            {data.map( (item, i) => 
                    <ListItem
                        index={i}
                        key={i}
                        id={item.id}
                        name={item.name}
                        website={item.website}
                        deleteRow={deleteRow}
                    />
                )
            }

            <div className={styles.addButton}>
                <Button 
                    text={'Добавить'}
                    func={() => openModalHandler(true)}
                    type='add'
                />
            </div>
            <NavLink to={"/notmain"}>Not Main</NavLink>
            <Portal
                component={
                    <Modal
                        isVisible={modalState}
                        changeModalState={changeModalState}
                        modalContent={component}
                    />
                }
                elemId={'portal'}
            />
        </div>
    )
})

export default ToDoList