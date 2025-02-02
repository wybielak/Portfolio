import { makeAutoObservable } from "mobx";


export default class AppStorage {
    constructor() {
        makeAutoObservable(this)
    }

    devProjects = [
        { "name": "Misty Horizon", "description": "Lorm ipsum lorem ipusm", "date": "XII 2024", "category": "unity", "photo": "/images/dev/mistyhorizon1.jpg", "github": "", "youtube": "https://youtube.com/shorts/kasVuHcKGoc?feature=share", "tiktok": "", "instagram": "" },
        { "name": "At Last Apocalypse", "description": "Lorm ipsum lorem ipusm", "date": "XII 2024", "category": "godot", "photo": "/images/dev/atlastapocalypse1.jpg", "github": "", "youtube": "https://youtu.be/iTRFJ-8KZ_I", "tiktok": "", "instagram": "" },
        { "name": "Califit", "description": "Lorm ipsum lorem ipusm", "date": "X 2024", "category": "react", "photo": "/images/dev/califit1.jpg", "github": "https://github.com/wybielak/CaliFit", "youtube": "https://youtube.com/shorts/0nrO-G-5kDQ?feature=share", "tiktok": "", "instagram": "" },
        { "name": "Kansha", "description": "Lorm ipsum lorem ipusm", "date": "VI 2024", "category": "react", "photo": "/images/dev/kansha1.jpg", "github": "https://github.com/wybielak/Kansha", "youtube": "https://youtube.com/shorts/Xwb9ZFUucaI?feature=share", "tiktok": "", "instagram": "" },
        { "name": "Flashback", "description": "Lorm ipsum lorem ipusm", "date": "III 2024", "category": "react", "photo": "/images/dev/flashback1.jpg", "github": "https://github.com/wybielak/Flashback", "youtube": "https://youtube.com/shorts/fdDC-oPJNB4?feature=share", "tiktok": "", "instagram": "" },
        { "name": "Two Daves", "description": "Lorm ipsum lorem ipusm", "date": "VI 2024", "category": "godot", "photo": "/images/dev/twodaves1.jpg", "github": "", "youtube": "https://youtu.be/uIMnzqB_26A", "tiktok": "", "instagram": "" },
        { "name": "Weather App", "description": "Lorm ipsum lorem ipusm", "date": "XII 2023", "category": "js", "photo": "/images/dev/weather1.jpg", "github": "https://github.com/wybielak/WeatherApp", "youtube": "https://youtube.com/shorts/RSgxLYeSJFU?feature=share", "tiktok": "", "instagram": "" },
        { "name": "Bomberman", "description": "Lorm ipsum lorem ipusm", "date": "II 2022", "category": "cpp", "photo": "/images/dev/bomberman1.jpg", "github": "https://github.com/wybielak/Bomberman", "youtube": "https://youtu.be/Q2gwOLikO_4", "tiktok": "", "instagram": "" },
        { "name": "MyKingdom", "description": "Lorm ipsum lorem ipusm", "date": "VI 2022", "category": "cpp", "photo": "/images/dev/mykingdom1.jpg", "github": "https://github.com/wybielak/MyKingdom", "youtube": "https://youtu.be/x7hJ-xeFIZI", "tiktok": "", "instagram": "" },
    ]

    devDesc = "Computer science is not only my education and career path, but also one of my interests. Initially, I focused on creating mobile applications, but recently I started working more on game dev."

    workshopProjects = [
        { "name": "Knives", "description": "Lorm ipsum lorem ipusm", "date": "I 2025", "category": "", "photo": "/images/workshop/knives1.jpeg", "github": "", "youtube": "", "tiktok": "https://www.tiktok.com/@wybielak_workshop/video/7463836974684704022", "instagram": "https://www.instagram.com/p/DFP_D_BtnBF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Viking's dagger", "description": "Lorm ipsum lorem ipusm", "date": "XII 2024", "category": "", "photo": "/images/workshop/vikingsdag1.jpeg", "github": "", "youtube": "", "tiktok": "https://www.tiktok.com/@wybielak_workshop/video/7445387009624952086", "instagram": "" },
        { "name": "Mehrunes razor", "description": "Lorm ipsum lorem ipusm", "date": "IX 2024", "category": "", "photo": "/images/workshop/mehdagger1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/DCIAX5CtZ7p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "My workshop", "description": "Lorm ipsum lorem ipusm", "date": "VIII 2024", "category": "", "photo": "/images/workshop/workshop1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/C_WLDLUNShY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Witcher's sword", "description": "Lorm ipsum lorem ipusm", "date": "III 2024", "category": "", "photo": "/images/workshop/witchersword1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/C5MVUGlNVjL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Wide desk", "description": "Lorm ipsum lorem ipusm", "date": "VI 2023", "category": "", "photo": "/images/workshop/desk1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CuhV9OftOkg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Mjolnir", "description": "Lorm ipsum lorem ipusm", "date": "III 2023", "category": "", "photo": "/images/workshop/mjolnir1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CiQopkrtE6l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Viking's axe", "description": "Lorm ipsum lorem ipusm", "date": "XII 2022", "category": "", "photo": "/images/workshop/vikingsaxe1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CmzKlvJt-K2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Viking's sword", "description": "Lorm ipsum lorem ipusm", "date": "XII 2022", "category": "", "photo": "/images/workshop/sword2.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CgpgVk_N4k7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Bookshelf", "description": "Lorm ipsum lorem ipusm", "date": "XII 2021", "category": "", "photo": "/images/workshop/shelf1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CXZWoSWt7YT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Capitan America shield", "description": "Lorm ipsum lorem ipusm", "date": "X 2021", "category": "", "photo": "/images/workshop/cptam1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CU-oBwaNSjW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Workout log", "description": "Workout equipment", "date": "V 2021", "category": "", "photo": "/images/workshop/log1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CUF4Phftf9r/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Iron rose", "description": "Eternal rose for eternal love", "III 2020": "I2025", "category": "", "photo": "/images/workshop/rose1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CTiPd4KtRNN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Samurai sword", "description": "My first sword", "date": "IV 2020", "category": "", "photo": "/images/workshop/katana1.jpeg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CTfuBg7t7OC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { "name": "Dragon sword", "description": "My second sword", "date": "IX 2019", "category": "", "photo": "/images/workshop/sword1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "https://www.instagram.com/p/CTfuMZXt1p_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    ]

    workshopDesc = "My main hobby is craftsmanship, including woodworking, metalworking, and knife-making. It provides an excellent escape from the field I work in professionally and studied for, which is IT."

    pizzaProject = [
        { "name": "Pizza 7", "description": "Homemade pizza with basilian pesto, burrata and creme aceto di balsamica", "date": "I 2025", "category": "", "photo": "/images/pizza/pizza7.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "" },
        { "name": "Pizza 6", "description": "Homemade pizza with cherry tomatoes, arugula, parma ham and grana padano", "date": "I 2025", "category": "", "photo": "/images/pizza/pizza6.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "" },
        { "name": "Pizza 5", "description": "Homemade pizza with mozarella and burrata", "date": "I 2025", "category": "", "photo": "/images/pizza/pizza5.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "" },
        { "name": "Pizza 4", "description": "My first pizza from dedicated pizza oven", "date": "XII 2024", "category": "", "photo": "/images/pizza/pizza4.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "" },
        { "name": "Pizza 3", "description": "Homemade pizza with cherry tomatoes, arugula, parma ham and grana padano", "date": "IX 2024", "category": "", "photo": "/images/pizza/pizza3.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "" },
        { "name": "Pizza 2", "description": "My homemade pizzas", "date": "IX 2024", "category": "", "photo": "/images/pizza/pizza2.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "" },
        { "name": "Pizza 1", "description": "My first pizza from kitchen oven", "date": "IX 2024", "category": "", "photo": "/images/pizza/pizza1.jpg", "github": "", "youtube": "", "tiktok": "", "instagram": "" },
    ]

    pizzaDesc = "Making pizza is the most relaxing thing for my. Since I started, I can't stop, especially, apparently my pizza is very good."
}