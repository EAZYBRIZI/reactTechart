import styles from "./index.module.css"
import { useForm } from "react-hook-form"
import Button from "../../components/commonButton"
import Title from "../../components/commonTitle"
import clsx from "clsx"
import MainStore from "./../../store/MainStore"
import ModalStore from "./../../store/ModalStore"

const AddNewsUser = () => {
    const { editUser, getItemById} = {...MainStore}
    const { changeModalState, itemId } = {...ModalStore}
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (userData) => {
        editUser(userData)
        changeModalState(false)
    }

    const item = (itemId) => {
        return getItemById(itemId)
    }

    return(
        <div className={styles.root}>
            <div><Title text="Редактировать данные пользователя"/></div>
            <form className={styles.inputs} onSubmit={handleSubmit(onSubmit)}>
                <input
                    disabled
                    type='text'
                    placeholder={item(itemId).id}
                    name='ID'
                    id='id'
                    {...register("id", { required: true, pattern: /^[0-9]+$/, value: item(itemId).id})}
                    className={clsx(styles.input, {
                        [styles.error]: errors.ID
                    })}
                />

                <input 
                    type='text' 
                    placeholder={item(itemId).name} 
                    name='name' 
                    id='name' 
                    {...register("name", {required: true, pattern: /^[A-Za-zА-Яа-я ]+$/i, value: item(itemId).name  })}
                    className={clsx(styles.input, {
                        [styles.error]: errors.name
                    })}
                />

                <input 
                    type='text'
                    placeholder={item(itemId).website}
                    name='website'
                    id='website'
                    {...register("website", { required: true, pattern: /^[a-zа-я]+\.[a-zа-я]+$/, value: item(itemId).website })}
                    className={clsx(styles.input, {
                        [styles.error]: errors.website
                    })}
                />

                <div className={styles.button}>
                    <Button
                        text="Редактировать"
                        type='edit'
                    />
                </div>
            </form>
        </div>
    )
}

export default AddNewsUser