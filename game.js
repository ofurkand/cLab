"use strict";

// export class Game {
//     constructor(target){
//         // console.log(target);

//         // window.TotalGames = document.getElementsByClassName(target);
//         // // Oyun İçin Oluşturulan Alan Adı
//         // this.oyun = `Game${TotalGames.length}`;
//         // console.log(this.oyun);

//         // window[oyun] = {};
//         // window[oyun].root = {};
//         // window[oyun].root.gameTarget = document.getElementById(target);
//         // console.log(window[oioaa], window.Game1); // Başarılı

//         this.oyun = this.addToList(target);
//         this.styleSheet(target);
//     }
//     styleSheet(target){
//         if (window.GamesStyleSheet === undefined || window.GamesStyleSheet === null) {
//             window.GamesStyleSheet = document.createElement('style');
//             window.GamesStyleSheet.textContent = "/*This style tag is essential for the games.*/\n";
//             document.head.appendChild(window.GamesStyleSheet); 
//         }
//         console.log(window.GamesStyleSheet);
//         window.GamesStyleSheet.textContent += `
//             .${target} {
//                 background-color: aqua;
//             }
//         `;
//     }
//     // addToList(target){
//     //     window.AllGames = document.getElementsByClassName(target);
//     //     return `Game${AllGames.length}`
//     // }
// }

let _oyunAktifligi = false;
let _sira = true;
let _siyahKisaRok = true; let _siyahUzunRok = true;
let _beyazUzunRok = true; let _beyazKisaRok = true;   
let _Taslar = [];
let _Surumler = []; let _surum = "timur-satranci";
window.notasyon = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
    "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
window.sira = false;
const verilerURL = "./product/logic/src/veriler.json";
fetch(verilerURL)
.then(response => response.json())
.then(data => { data.taslar.map(tas => new Tas(tas));Surumler = data.surumler;})
.then(()=>{ // _______________________________________________________________________
    const icerikAlani = document.getElementsByClassName("writeHereYourGameClassName");
    console.log('icerikAlani :>> ', icerikAlani);
    Array.from(icerikAlani).forEach(ornek => {
        new Game(ornek);
        // console.log('ornek :>> ', ornek);
    });
});
class Game {
    constructor(htmlElement2) {
        this.htmlElement = htmlElement2;

        console.log(this);
        // this.htmlElement.textContent = "Merhaba";
        
        this.initEvents();

        this.gameAreaSetup();

        // this.handleClick = this.handleClick2.bind(this);
    }

    initEvents() {
        this.htmlElement.addEventListener("click", this.handleClick);
    }

    squareListener() {
        // this.htmlElement.innerHTML = "clicked";
        console.log('this :>> ', this.id);
        // this.style.backgroundColor  = "white";
        this.classList.add("secili");
        clearInterval(this.kayitliBekleme);
        this.kayitliBekleme = setInterval(()=>{
            // this.htmlElement.innerHTML = "Merhaba";
            // this.style.backgroundColor  = "black";
            this.classList.remove("secili");
            clearInterval(this.kayitliBekleme);
        },3000);
    }

    gameAreaSetup(){
        this.htmlElement.innerHTML = "";
        const root = document.documentElement;
        root.style.setProperty("--kare-sayisi-x", surum.oyunAlani.x);
        root.style.setProperty("--kare-sayisi-y", surum.oyunAlani.y);
        // for (let index = 1; index <= surum.oyunAlani.x*surum.oyunAlani.y; index++) {
        //     let eklenecekKare = document.createElement('div');
        //     eklenecekKare.classList.add('kare');
        //     index%8==1?sira:sira=!sira;sira?
        //     eklenecekKare.classList.add('beyaz'): eklenecekKare.classList.add('siyah');
        //     eklenecekKare.id=`${notasyon[(index-1)%8]}${Math.abs(64-((index-1)-((index-1)%8)))/8}`;
        //     eklenecekKare.addEventListener("click", this.squareListener);
        //     this.htmlElement.appendChild(eklenecekKare);
        // }

        let emptySquares = surum.oyunAlani["-"];
        console.log('emptySquares :>> ', emptySquares.classic);
        let emptySquareInRow;
        for (let indexY = 1; indexY <= surum.oyunAlani.y; indexY++) {
            // console.log(indexX);
            indexY%2==1?sira=false:sira=true;
            emptySquareInRow = 0;
            for (let indexX = 1; indexX <= surum.oyunAlani.x; indexX++) {
                sira = !sira;
                let eklenecekKare = document.createElement('div');
                // console.log(Object.keys(emptySquares.advanced));
                // if (emptySquares.classic.some(item => JSON.stringify(item) === JSON.stringify([indexX-1,surum.oyunAlani.y-indexY]))) {
                if (Object.keys(emptySquares.advanced).includes((indexX-1).toString())) {
                    emptySquareInRow+=1;
                    if (emptySquares.classic.some(item => JSON.stringify(item) === JSON.stringify([indexX-1,surum.oyunAlani.y-indexY]))) {
                        eklenecekKare.className = "deleted";  
                    }
                    else{
                        eklenecekKare.classList.add('kare');
                        eklenecekKare.classList.add("saray");
                        eklenecekKare.id=`_${document.getElementsByClassName("extra").length+1}`;
                        eklenecekKare.addEventListener("click", this.squareListener);
                    }
                    this.htmlElement.appendChild(eklenecekKare);
                    continue
                }
                eklenecekKare.classList.add('kare');
                // (indexX)%indexX==1?sira:sira=!sira;sira?
                !sira?
                eklenecekKare.classList.add('siyah'): eklenecekKare.classList.add('beyaz');
                // eklenecekKare.id=`${notasyon[(index-1)%8]}${Math.abs(64-((index-1)-((index-1)%8)))/8}`;
                eklenecekKare.id=`${notasyon[indexX-1-emptySquareInRow]}${surum.oyunAlani.y-indexY+1}`;
                // console.log(indexX,indexY);
                this.htmlElement.appendChild(eklenecekKare);
                eklenecekKare.addEventListener("click", this.squareListener);   
            }
        }
        console.log(surum.baslangic_konumu);
        // this.konum = surum
    }
    
    gameFEN(konum){
        if (konum === null) {
            konum = surum.baslangic_konumu;
                
        }
        
    }

    deconstructor() {
        this.htmlElement.removeEventListener("click", this.handleClick);
        this.htmlElement.innerHTML = "";
    }
}

// const ornek = new Game(icerikAlani);  

class Tas{
    constructor(veri){
        this.isim = veri.isim;
        this.resimURL = veri.resimURL;
        this.kisaltma = veri.kisaltma;
        this.deger = veri.deger;
        this.taslaraEkle();
    }
    taslaraEkle(){
        _Taslar.push(this);
    }
}
Object.defineProperty(window, 'Taslar',{
    get(){
        let donecekTaslar = new Map();
        _Taslar.forEach(tas => {
            // console.log(tas);
            if (surum.icerilenTaslarKisaltmalari.includes(tas.kisaltma)) {
                donecekTaslar.set(tas.kisaltma,tas);
            }
        });
        // console.log(donecekTaslar);
        return donecekTaslar;
    }
});
Object.defineProperty(window, 'Surumler',{
    get(){
        return _Surumler[0]
    },
    set(veri){
        _Surumler.push(veri);
    }
});
Object.defineProperty(window, 'surum',{
    get(){
        return _Surumler[0][_surum];
    },
    set(veri){
        _surum = veri;
    }
});

