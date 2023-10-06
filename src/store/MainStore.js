import { makeAutoObservable } from "mobx"

class MainStore {
	data = null
	foundData = []
	sortDirection = false

	constructor() {
		this.fetchData = this.fetchData.bind(this)
		this.deleteRow = this.deleteRow.bind(this)
		this.addNewUser = this.addNewUser.bind(this)
		this.getLastId = this.getLastId.bind(this)
		this.getItemById = this.getItemById.bind(this)
		this.editUser = this.editUser.bind(this)
		this.sortData = this.sortData.bind(this)
		this.searchData = this.searchData.bind(this)
		makeAutoObservable(this)
	}

	async fetchData() {
		const rawData = await fetch('https://jsonplaceholder.typicode.com/users')
		const json = await rawData.json()
		this.data = await json
	}

	deleteRow(i) {
		this.data.splice(i, 1)
	}

	addNewUser(userData) {
		this.data.push(userData)
	}

	getLastId() {
		return (
			this.data.at(-1).id
		)
	}

	getItemById(itemId) {
		return this.data.at(itemId)
	}

	editUser(userData) {
		const nextData = this.data
		const arrI = nextData.findIndex((data) => data.id === userData.id)
		nextData[arrI].name = userData.name
		nextData[arrI].website = userData.website
		this.data = nextData
	}

	sortData(column) {
		const nextData = this.data
		this.sortDirection = !this.sortDirection
		nextData.sort((a, b) => {
			const valueA = a[column].toLowerCase()
			const valueB = b[column].toLowerCase()

			if (valueA < valueB) 
				return this.sortDirection ? -1 : 1
			if (valueA === valueB)
				return 0
			if (valueA > valueB)
				return this.sortDirection ? 1 : -1
			return 0
		})
	}

	searchData(e) {
		const result = this.data.filter((item) => item.website.toLowerCase().includes(e.target.value))
		if (e.target.value !== "")
			this.foundData = result
		else
			this.foundData = []
	}
}

const store = new MainStore()

export default store