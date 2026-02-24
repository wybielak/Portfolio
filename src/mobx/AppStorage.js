import { makeAutoObservable } from "mobx";


export default class AppStorage {
    constructor() {
        makeAutoObservable(this)
    }

    devProjects = [
        {
            id: "14",
            short_name: "Nowoczesna wyszukiwarka inwestycji",
            name: "Znajdź Inwestycję",
            description: "Platforma do analizy inwestycji, filtrowanie, podgląd na mapie, monitoring zmian w jednym miejscu.",
            date: "I 2026",
            category: "react",
            photo: "/images/dev/znajdzinwest2.jpg",
            photo_mobile: "/images/dev/znajdzinwest2-mobile.jpg",
            github: "",
            youtube: "",
            directlink: "https://znajdz-inwestycje.web.app/"
        },
        {
            id: "13",
            short_name: "Nowoczesna wyszukiwarka inwestycji",
            name: "Znajdź Inwestycję",
            description: "Platforma umożliwia przejrzyste wyszukiwanie i oznaczanie inwestycji w interesującym nas regionie.",
            date: "I 2026",
            category: "react",
            photo: "/images/dev/znajdzinwest1.jpg",
            photo_mobile: "/images/dev/znajdzinwest1-mobile.jpg",
            github: "",
            youtube: "",
            directlink: "https://znajdz-inwestycje.web.app/"
        },
        {
            id: "12",
            short_name: "Strona internetowa usług Femdomowych",
            name: "Mistress Delilah",
            description: "Strona internetowa wizytówka, z odnośnikami do social mediów i danymi kontaktowymi dla usług femdomowych",
            date: "II 2026",
            category: "wp",
            photo: "/images/dev/delilah1.jpg",
            photo_mobile: "/images/dev/delilah1-mobile.jpg",
            github: "",
            youtube: "",
            directlink: "https://mistressdelilah.com/"
        },
        {
            id: "11",
            short_name: "Witryna lokalnego knifemakera",
            name: "Wybielak Workshop",
            description: "Strona internetowa - wizytówka lokalnego knifemakera rozwijącego swoją markę noży.",
            date: "I 2026",
            category: "wp",
            photo: "/images/dev/wybielak1.jpg",
            photo_mobile: "/images/dev/wybielak1-mobile.jpg",
            github: "",
            youtube: "",
            directlink: "https://wybielak-workshop.pl/"
        },
        {
            id: "10",
            short_name: "Aplikacja do statystyk finansowych",
            name: "Cashflow",
            description: "Aplikacja pozwalająza śledzić przepływ środków w firmie na podstawie danych o fakturach.",
            date: "XII 2025",
            category: "react",
            photo: "/images/dev/cashflow1.jpg",
            photo_mobile: "/images/dev/cashflow1-mobile.jpg",
            github: "",
            youtube: "",
            directlink: ""
        },
        {
            id: "9",
            short_name: "Witryna pływalni",
            name: "Pływalnia Wodnik",
            description: "Nowa witryna internetowa dla pływalni, spełniająca wszystkie wymagania witryn internetowych dla firm.",
            date: "IX 2025",
            category: "wp",
            photo: "/images/dev/wodnik1.jpg",
            photo_mobile: "/images/dev/wodnik1-mobile.jpg",
            github: "",
            youtube: "",
            directlink: "https://wodnik-paniowki.pl/"
        },
        {
            id: "8",
            short_name: "Panel zarządzania procesami IT",
            name: "IT Dashboard",
            description: "Panel pozwalający śledzić aktualny stan procesów informatycznych w firmie.",
            date: "V 2024",
            category: "react",
            photo: "/images/dev/dashboard1.jpg",
            photo_mobile: "/images/dev/dashboard1-mobile.jpg",
            github: "",
            youtube: "",
            directlink: ""
        },
        {
            id: "7",
            short_name: "Sklep internetowy z podłogami",
            name: "WITAN Centrum Podłóg",
            description: "Sklep internetowy firmy Witan Centrum Podłóg.",
            date: "II 2024",
            category: "shop",
            photo: "/images/dev/sklepwitan1.jpg",
            photo_mobile: "/images/dev/sklepwitan1-mobile.jpg",
            github: "",
            youtube: "",
            directlink: "https://sklep.witan-posadzki.pl/"
        },
        {
            id: "6",
            short_name: "System automatyzacyjny sklepu internetowego",
            name: "ScraperHub",
            description: "System automatyzujący obsługę sklepu internetowego, aktualizacje produktów, agent AI generujący opisy.",
            date: "I 2024",
            category: "py",
            photo: "/images/dev/scraperhub1.jpg",
            photo_mobile: "/images/dev/scraperhub1-mobile.jpg",
            github: "",
            youtube: "",
            directlink: ""
        }
    ];

}