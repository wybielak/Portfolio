import { makeAutoObservable } from "mobx";


export default class AppStorage {
    constructor() {
        makeAutoObservable(this)
    }

    devProjects = [
        { "id": "11", "short_name": "Witryna pływalni", "name": "Pływalnia Wodnik", "description": "", "date": "", "category": "wp", "photo": "", "github": "", "youtube": "", "directlink": ""},
        { "id": "10", "short_name": "Panel zarządzania procesami", "name": "IT Dashboard", "description": "", "date": "", "category": "react", "photo": "", "github": "", "youtube": "", "directlink": ""},
        { "id": "9", "short_name": "System aktualizacji produktów", "name": "ScraperHub", "description": "", "date": "", "category": "py", "photo": "", "github": "", "youtube": "", "directlink": ""},
        { "id": "8", "short_name": "Aplikacja zachęcająca do eksploracji", "name": "Misty Horizon", "description": "My college final project. Discover fog on a real world map and add your own spots in the discovered terrain.", "date": "XII 2024", "category": "unity", "photo": "/images/dev/mistyhorizon1.jpg", "github": "", "youtube": "https://youtube.com/shorts/kasVuHcKGoc?feature=share", "directlink": ""},
        { "id": "7", "short_name": "Aplikacja fitness", "name": "Califit", "description": "Plan and log your workouts and exercises.", "date": "X 2024", "category": "react", "photo": "/images/dev/califit1.jpg", "github": "https://github.com/wybielak/CaliFit", "youtube": "https://youtube.com/shorts/0nrO-G-5kDQ?feature=share", "directlink": ""},
        { "id": "6", "short_name": "Aplikacja do zapisywania wdzięczności", "name": "Kansha", "description": "Create calendar pages and write down the things you are grateful for.", "date": "VI 2024", "category": "react", "photo": "/images/dev/kansha1.jpg", "github": "https://github.com/wybielak/Kansha", "youtube": "https://youtube.com/shorts/Xwb9ZFUucaI?feature=share", "directlink": ""},
        { "id": "5", "short_name": "Aplikacja społecznościowa", "name": "Flashback", "description": "Social media app. Save your memories with short description and share it with your friends.", "date": "III 2024", "category": "react", "photo": "/images/dev/flashback1.jpg", "github": "https://github.com/wybielak/Flashback", "youtube": "https://youtube.com/shorts/fdDC-oPJNB4?feature=share", "directlink": ""},
        { "id": "4", "short_name": "Gra survivalowa z otwartym światem", "name": "At Last Apocalypse", "description": "My zombie survival game. I'm still working on it. It's pre pre alpha version.", "date": "XII 2024", "category": "godot", "photo": "/images/dev/atlastapocalypse1.jpg", "github": "", "youtube": "https://youtu.be/iTRFJ-8KZ_I", "directlink": ""},
        { "id": "3", "short_name": "Aplikacja z pogodą", "name": "Weather App", "description": "My first web application. HTML, CSS, JS weather forecast app with forecast details.", "date": "XII 2023", "category": "js", "photo": "/images/dev/weather1.jpg", "github": "https://github.com/wybielak/WeatherApp", "youtube": "https://youtube.com/shorts/RSgxLYeSJFU?feature=share", "directlink": ""},
        { "id": "2", "short_name": "Gra fabularna RPG", "name": "Two Daves", "description": "One of my study projects. 2D RPG in which you control two main characters who must work together to fight and survive.", "date": "VI 2024", "category": "godot", "photo": "/images/dev/twodaves1.jpg", "github": "", "youtube": "https://youtu.be/uIMnzqB_26A", "directlink": ""},
        { "id": "1", "short_name": "Klon gry Bomberman", "name": "Bomberman", "description": "One of my study projects. Console full implementation of bomberman game.", "date": "II 2022", "category": "cpp", "photo": "/images/dev/bomberman1.jpg", "github": "https://github.com/wybielak/Bomberman", "youtube": "https://youtu.be/Q2gwOLikO_4", "directlink": ""},
    ]
}