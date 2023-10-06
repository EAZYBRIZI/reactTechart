import { makeAutoObservable } from "mobx"

class ModalStore {
    modalState = false
    component = null
    itemId = null;

    constructor() {
		this.changeModalState = this.changeModalState.bind(this)
		this.setModalComponent =this.setModalComponent.bind(this)
        makeAutoObservable(this)
	}

    changeModalState(state) {
        this.modalState = state
    }

    setModalComponent(component, index) {
        this.component = component
        this.itemId = index
    }

}

const store = new ModalStore()

export default store