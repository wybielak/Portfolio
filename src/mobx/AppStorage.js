import { makeAutoObservable } from "mobx";


export default class AppStorage {
    constructor() {
        makeAutoObservable(this)
    }

    devProjects = []
    devDesc = "i am it student"

    workshopProjects = [
        {"name": "Mjolnir", "description": "This is Mjolnir", "category": "", "photo": "/images/workshop/mjolnir1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CiQopkrtE6l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
        {"name": "Mjolnir", "description": "This is Mjolnir", "category": "", "photo": "/images/workshop/sword1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CiQopkrtE6l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
        {"name": "Mjolnir", "description": "This is Mjolnir", "category": "", "photo": "/images/workshop/vikingsaxe1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CiQopkrtE6l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
        {"name": "Mjolnir", "description": "This is Mjolnir", "category": "", "photo": "/images/workshop/witchersword1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CiQopkrtE6l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
    ]
    workshopDesc = "knifemaking is my hobby"

    pizzaProject = []
    pizzaDesc = "i love pizza"

}