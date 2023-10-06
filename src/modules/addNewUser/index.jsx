import styles from "./index.module.css"
import { useForm } from "react-hook-form"
import Button from "../../components/commonButton"
import Title from "../../components/commonTitle"
import clsx from "clsx"
import MainStore from "./../../store/MainStore"
import ModalStore from "./../../store/ModalStore"

const AddNewsUser = () => {
    const { addNewUser, getLastId } = {...MainStore}
    const { changeModalState } = {...ModalStore}
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (userData) => {
        addNewUser(userData)
        changeModalState(false)
    }

    return(
        <div className={styles.root}>
            <div><Title text="Добавить нового пользователя"/></div>
            <form className={styles.inputs} onSubmit={handleSubmit(onSubmit)}>
                <input
                    disabled
                    type='text'
                    placeholder={getLastId() + 1}
                    name='ID'
                    id='id'
                    {...register("id", { required: true, pattern: /^[0-9]+$/, value: getLastId() + 1})}
                    className={clsx({
                        [styles.error]: errors.ID
                    })}
                />

                <input 
                    type='text' 
                    placeholder='ФИО' 
                    name='name' 
                    id='name' 
                    {...register("name", {required: true, pattern: /^[A-Za-zА-Яа-я]+$/i })}
                    className={clsx({
                        [styles.error]: errors.name
                    })}
                />

                <input 
                    type='text'
                    placeholder='Website'
                    name='website'
                    id='website'
                    {...register("website", { required: true, pattern: /^[a-zа-я]+\.[a-zа-я]+$/ })}
                    className={clsx({
                        [styles.error]: errors.website
                    })}
                />

                <div className={styles.button}>
                    <Button
                        text="Добавить"
                        type='add'
                    />
                </div>
            </form>
        </div>
    )
}

export default AddNewsUser