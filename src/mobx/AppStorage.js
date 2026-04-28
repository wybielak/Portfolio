import { makeAutoObservable } from "mobx";


export default class AppStorage {
    constructor() {
        makeAutoObservable(this)
    }

    devProjects = [
        {
            id: "4",
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
            id: "3",
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
            id: "2",
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
            id: "1",
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
    ];

}