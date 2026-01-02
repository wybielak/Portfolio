import { makeAutoObservable } from "mobx";


export default class AppStorage {
    constructor() {
        makeAutoObservable(this)
    }

    devProjects = [
        { "id": "10", "short_name": "Aplikacja do statystyk finansowych", "name": "Cashflow", "description": "Aplikacja pozwalająza śledzić przepływ środków w firmie na podstawie danych o fakturach.", "date": "XII 2025", "category": "react", "photo": "/images/dev/cashflow1.jpg", "github": "", "youtube": "", "directlink": ""},
        { "id": "9", "short_name": "Witryna pływalni", "name": "Pływalnia Wodnik", "description": "Nowa witryna internetowa dla pływalni, spełniająca wszystkie wymagania witryn internetowych dla firm.", "date": "IX 2025", "category": "wp", "photo": "/images/dev/wodnik1.jpg", "github": "", "youtube": "", "directlink": "https://wodnik-paniowki.pl/"},
        { "id": "8", "short_name": "Panel zarządzania procesami IT", "name": "IT Dashboard", "description": "Panel pozwalający śledzić aktualny stan procesów informatycznych w firmie.", "date": "V2024", "category": "react", "photo": "/images/dev/dashboard1.jpg", "github": "", "youtube": "", "directlink": ""},
        { "id": "7", "short_name": "Sklep internetowy z podłogami", "name": "WITAN Centrum Podłóg", "description": "Sklep internetowy firmy Witan Centrum Podłóg.", "date": "II2024", "category": "shop", "photo": "/images/dev/sklepwitan1.jpg", "github": "", "youtube": "", "directlink": "https://sklep.witan-posadzki.pl/"},
        { "id": "6", "short_name": "System aktualizacji produktów", "name": "ScraperHub", "description": "System automatycznego pobierania danych produktów oparty o informacje na stronach producentów.", "date": "I 2024", "category": "py", "photo": "/images/dev/scraperhub1.jpg", "github": "", "youtube": "", "directlink": ""},
        { "id": "5", "short_name": "Aplikacja zachęcająca do eksploracji", "name": "Misty Horizon", "description": "Odkrywaj mgłę na mapie prawdziwego świata i dodawaj ciekawe miejsca w odkrytych lokalizacjach.", "date": "XII 2024", "category": "unity", "photo": "/images/dev/mistyhorizon1.jpg", "github": "", "youtube": "https://youtube.com/shorts/kasVuHcKGoc?feature=share", "directlink": ""},
        { "id": "4", "short_name": "Aplikacja fitness", "name": "Califit", "description": "Planuj i zapisuj twoje treningi i ćwiczenia.", "date": "X 2024", "category": "react", "photo": "/images/dev/califit1.jpg", "github": "https://github.com/wybielak/CaliFit", "youtube": "https://youtube.com/shorts/0nrO-G-5kDQ?feature=share", "directlink": "https://califit-a4835.web.app/"},
        { "id": "3", "short_name": "Aplikacja do zapisywania wdzięczności", "name": "Kansha", "description": "Twórz kartki z kalendarza i zapisuj rzeczy za które jesteś wdzięczny.", "date": "VI 2024", "category": "react", "photo": "/images/dev/kansha1.jpg", "github": "https://github.com/wybielak/Kansha", "youtube": "https://youtube.com/shorts/Xwb9ZFUucaI?feature=share", "directlink": "https://kansha-72cc0.web.app/"},
        { "id": "2", "short_name": "Aplikacja społecznościowa", "name": "Flashback", "description": "Zapisuj wspomienia z krótkim opisem i dziel się nimi ze znajomymi.", "date": "III 2024", "category": "react", "photo": "/images/dev/flashback1.jpg", "github": "https://github.com/wybielak/Flashback", "youtube": "https://youtube.com/shorts/fdDC-oPJNB4?feature=share", "directlink": ""},
        { "id": "1", "short_name": "Aplikacja z pogodą", "name": "Weather App", "description": "Śledź aktualną pogodę wraz z podglądem danych szczegółowych.", "date": "XII 2023", "category": "js", "photo": "/images/dev/weather1.jpg", "github": "https://github.com/wybielak/WeatherApp", "youtube": "https://youtube.com/shorts/RSgxLYeSJFU?feature=share", "directlink": ""},
    ]
}