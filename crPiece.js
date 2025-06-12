import { topLeft,topRight,bottomLeft,bottomRight } from "./product/logic/lib/moves/diagonal.js";
import { upward,downward,left,right } from "./product/logic/lib/moves/horizontal.js";

// import {formatFEN} from "./product/logic/lib/convertToFEN.js";
const ornekResim = "./product/logic/src/taslar/aslan.svg";
const ornekResim2 = "./product/logic/src/taslar/baykus.svg";
window.notasyon = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const root = document.documentElement;
const caprazCheckBox = document.getElementById("capraz");
const duzCheckBox = document.getElementById("duz");
let pieceCoord = "C3";
let pieceCoord2 = "B9";
let pieceArrayCoord = [notasyon.indexOf(pieceCoord.split("")[0]),pieceCoord.split("")[1]-1];
// const x = document.getElementsByTagName("input")[0];
// const y = document.getElementsByTagName("input")[1];
const x = {value: 9};
const y = {value: 9};
// const z = document.getElementById("duzgun-cokgen");
// let emptyAreas = [];
const btn = document.getElementById("save");
root.style.setProperty("--kare-sayisi-x", x.value);
root.style.setProperty("--kare-sayisi-y", y.value);
// const startPosition = ["11","11","11","11","11","5x5","11","11","11","11","11"];
// console.log(startPosition);
function fillTheArea(){
    document.getElementsByClassName("area")[0].innerHTML = "";
    let sira = true;
    for (let indexY = 1; indexY <= y.value; indexY++) {
        indexY%2==1?sira=true:sira=false;
        for (let indexX = 1; indexX <= x.value; indexX++) {
            let eklenecekKare = document.createElement('div');
            eklenecekKare.classList.add('kare');
            // (indexX)%indexX==1?sira:sira=!sira;
            sira?
            eklenecekKare.classList.add('siyah'): eklenecekKare.classList.add('beyaz');
            // eklenecekKare.id=`${notasyon[(index-1)%8]}${Math.abs(64-((index-1)-((index-1)%8)))/8}`;
            eklenecekKare.id=`${notasyon[indexX-1]}${y.value-indexY+1}`;
            if (eklenecekKare.id == pieceCoord) {
                // eklenecekKare.addEventListener("click", this.squareToggle);
                eklenecekKare.addEventListener("click", squareToggle);
            }
            document.getElementsByClassName("area")[0].appendChild(eklenecekKare);   
            sira = !sira;
        }
    }
}

// let ornekRsm = document.createElement("img");
// ornekRsm.setAttribute("src",ornekResim);
// document.getElementById(pieceCoord).appendChild(ornekRsm);
// ornekRsm.addEventListener("click",tasTiklandi);

// function tasTiklandi(){
//     let bulunduguKare = document.getElementById(this.parentElement.id);
//     bulunduguKare.style.backgroundColor = "yellow";
// }
function squareToggle() {
    // !emptyAreas.includes([[notasyon.indexOf(this.id.split("")[0]),parseInt(this.id.split("")[1])]]) ?
    // emptyAreas.push([notasyon.indexOf(this.id.split("")[0]),parseInt(this.id.split("")[1])-1]);
    // : null;
    // if (this.className = 'delete'){
    //     this.classList.remove('delete');
    //     // this.classList.add('kare');
    // }else{
    //     this.classList.add = 'delete';
    // }

    this.style.backgroundColor = ((a) => !a ? "yellow" : mainColorOfTheCenter)(this.style.backgroundColor === "yellow");
    // this.style.backgroundColor = (this.style.backgroundColor === "yellow" ?mainColorOfTheCenter:"yellow  ");
}

fillTheArea();
let ornekRsm = document.createElement("img");
ornekRsm.setAttribute("src",ornekResim);
ornekRsm.id = "x";
document.getElementById(pieceCoord).appendChild(ornekRsm);
let ornekRsm2 = document.createElement("img");
ornekRsm2.setAttribute("src",ornekResim2);
ornekRsm2.id = "X";
document.getElementById(pieceCoord2).appendChild(ornekRsm2);
let mainColorOfTheCenter = document.getElementById(pieceCoord).style.backgroundColor;

// function handleValueChange() {
//     // this.value;
//     if (this.name === "y-ekseni") {
//         root.style.setProperty("--kare-sayisi-y", y.value);
//     }
//     else{
//         root.style.setProperty("--kare-sayisi-x", x.value);
//     }
//     fillTheArea();
    
// }

function showDynamicOutput(){
    let output = document.getElementsByTagName("pre")[0];
    output.style.backgroundColor="#D2B48C";
}

// btn.addEventListener("click",()=>{
//     document.getElementsByTagName("pre")[0].style.backgroundColor="#D2B48C";
    // console.log(emptyAreas);
    // let squareCheck = [false,false];
    // if (z) {
    //     for (let index = 0; index <= y.value; index++) { // 
            
    //     }
    // }
    //     document.getElementsByTagName("pre")[0].textContent=
    //     `"oyunAlani": {
    //         "x": ${x.value},
    //         "y": ${y.value},
    //         "-": ${
    //         JSON.stringify([...new Set(emptyAreas.sort((a, b) => a[0] - b[0]|| a[1] - b[1]).map(JSON.stringify))].map(JSON.parse))}
    //     }`
// });

function calcFEN(){
    let cnt = 0;
    let taslar = [];
    let _calcFEN = [];
    let tempFENline = [];
    document.getElementsByClassName("area")[0].childNodes.forEach(element => {
        // console.log(element);
        if (element.lastChild) {
            if (cnt > 0) {
                tempFENline.push(cnt.toString());
            }
            taslar.push(element.id);
            tempFENline.push(element.lastChild.id);
            cnt=0;
        }
        else{
            cnt+=1;
        }
        if (element.id.split("")[0] === notasyon[x.value-1]) {
            if (cnt > 0) {
                tempFENline.push(cnt.toString());
            }
            _calcFEN.push(tempFENline.join(""));
            tempFENline = [];
            cnt=0;
        }
        // cnt += 1;
        // if (cnt%8==0) {
        //     cnt = 0;
        // }
    }); 
    return _calcFEN;
}

// console.log(calcFEN());

function solveFEN(FEN = calcFEN()){
    console.log(FEN);
    let _solvedFEN = [];
    let _tempFENline = [];
    // debugger;
    FEN.forEach(element => {
        if (!hasNonDigit(element)){
            // (_tempFENline.push([""]))*parseInt(element);
            // _tempFENline.push(new Array(parseInt(element)).fill(null)); // ChatGPT yardımı alındı.
            _tempFENline = new Array(parseInt(element)).fill(null); // Babamdan yardım alındı.
        } else {
            // element.forEach(element2 => {
            //     if (parseInt(element2) != NaN) {
            //         _tempFENline.push(new Array(parseInt(element2)).fill(null));
            //     }else{
            //         _tempFENline.push(element2);
            //     }
            // });
            let element2 = element.split("");
            // let total = 0;
            for (let index = 0; index < element2.length; index++) {
                // if (parseInt(element2[index]) != NaN) {
                if (!hasNonDigit(element2[index])) {
                    if (index > 0) {
                        // if (parseInt(element2[index-1]) != NaN) {
                        // }
                        let cnt = 1; let total = 0;
                        let sayi = parseInt(element2[index-cnt]);
                        if (sayi !== NaN ? !hasNonDigit(sayi) : false) {
                            _tempFENline.pop();
                            // while(sayi !== NaN && sayi !== undefined){ // NaN kontrolü hatalıdır.
                            while(!isNaN(sayi) && sayi !== undefined){
                                total += 10**(cnt-1)*sayi;
                                cnt+=1;
                                sayi = parseInt(element2[index-cnt]);
                            }
                            _tempFENline.push(new Array(cnt).fill(null));
                            continue
                        }
                    }
                    for (let _index = 0; _index < parseInt(element2[index]); _index++) {
                        _tempFENline.push(null);
                    }
                }else{
                    _tempFENline.push(element2[index]);
                }
                // console.log(_tempFENline);
            }
            // _tempFENline[-1].join("").split("");
        }
        _solvedFEN.push(_tempFENline);
        _tempFENline = [];
    });
    // console.log(_solvedFEN);
    console.log(_solvedFEN);
    return _solvedFEN;
}
// function formatFEN(moves,FEN,startPosition,gameArea){
//     if (startPosition != null && gameArea != null && (moves === null && FEN === null)) {
//         return [startPosition[0]]
//     }
// }

// console.log(hasNonDigit("12a3"));
// console.log(solveFEN());

function diagonal(x,y){
    let possibleMoves = [];
    possibleMoves.push(topLeft(x,y));
    possibleMoves.push(topRight(x,y));
    possibleMoves.push(bottomLeft(x,y));
    possibleMoves.push(bottomRight(x,y));
    return [...new Set([possibleMoves.join().split(",").filter(v=>v)])][0];
}

function horizontal(x,y){
    let possibleMoves = [];
    possibleMoves.push(left(x,y));
    possibleMoves.push(right(x,y));
    possibleMoves.push(upward(x,y));
    possibleMoves.push(downward(x,y));
    return [...new Set([possibleMoves.join().split(",").filter(v=>v)])][0];
}

caprazCheckBox.addEventListener("click",()=>{
    let possibleMoves = diagonal(pieceArrayCoord,solveFEN());
    console.log(possibleMoves);
    if (possibleMoves.length > 0) {
        // console.log(possibleMoves);
        if (caprazCheckBox.checked) {
            possibleMoves.forEach(element => {
                document.getElementById(element).classList.add("secili");
            });                 
        }
        else{
            possibleMoves.forEach(element => {
                document.getElementById(element).classList.remove("secili");
            });         
        }
    }
});

duzCheckBox.addEventListener("click",()=>{
    let possibleMoves = horizontal(pieceArrayCoord,solveFEN());
    console.log(possibleMoves);
    if (possibleMoves.length > 0) {
        if (duzCheckBox.checked) {
            possibleMoves.forEach(element => {
                document.getElementById(element).classList.add("secili");
            });                 
        }
        else{
            possibleMoves.forEach(element => {
                document.getElementById(element).classList.remove("secili");
            });         
        }
    }
});

function hasNonDigit(input) { // ChatGPT
    return /\D/.test(input);
}
