import { makeAutoObservable } from "mobx";


export default class AppStorage {
    constructor() {
        makeAutoObservable(this)
    }

    devProjects = []
    devDesc = "i am it student"

    workshopProjects = []
    workshopDesc = "knifemaking is my hobby"

    pizzaProject = []
    pizzaDesc = "i love pizza"

}