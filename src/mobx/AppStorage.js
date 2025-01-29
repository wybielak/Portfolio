import { makeAutoObservable } from "mobx";


export default class AppStorage {
    constructor() {
        makeAutoObservable(this)
    }

    devProjects = []
    devDesc = "i am it student"

    workshopProjects = [
  {"name": "Knives", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/knives1.jpeg", "github": "", "youtube": "", "tiktok": "https://www.tiktok.com/@wybielak_workshop/video/7463836974684704022", "instagram": "https://www.instagram.com/p/DFP_D_BtnBF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Viking's dagger", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/vikingsdag1.jpeg", "github": "", "youtube": "", "tiktok": "https://www.tiktok.com/@wybielak_workshop/video/7445387009624952086", "instagram": ""},
  {"name": "Mehrunes razor", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/mehdagger1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/DCIAX5CtZ7p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "My workshop", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/workshop1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/C_WLDLUNShY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Witcher's sword", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/witchersword1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/C5MVUGlNVjL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Wide desk", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/desk1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CuhV9OftOkg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Mjolnir", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/mjolnir1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CiQopkrtE6l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Viking's axe", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/vikingsaxe1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CmzKlvJt-K2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Viking's sword", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/sword2.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CgpgVk_N4k7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Bookshelf", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/shelf1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CXZWoSWt7YT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Capitan America shield", "description": "Lorm ipsum lorem ipusm", "category": "", "photo": "/images/workshop/cptam1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CU-oBwaNSjW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Workout log", "description": "Workout equipment", "category": "", "photo": "/images/workshop/log1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CUF4Phftf9r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Iron rose", "description": "Eternal rose for eternal love", "category": "", "photo": "/images/workshop/rose1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CTiPd4KtRNN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Dragon sword", "description": "My second sword", "category": "", "photo": "/images/workshop/sword1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CTfuMZXt1p_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="},
  {"name": "Samurai sword", "description": "My first sword", "category": "", "photo": "/images/workshop/katana1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CTfuBg7t7OC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="}
]
    workshopDesc = "My main hobby is craftsmanship, including woodworking, metalworking, and knife-making. It provides an excellent escape from the field I work in professionally and studied for, which is IT."

    pizzaProject = []
    pizzaDesc = "i love pizza"

}