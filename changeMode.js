// chrome.storage.sync.get('isTurn', function (data) {
//     turn = data.isTurn;
//     console.log(turn);
//     let darkPint = document.getElementById("darkPint");

//     if (turn == null || turn == undefined) chrome.storage.sync.set({ isTurn: true });

//     if (turn == false) {
//         if (darkPint) useCSS();

//     } 
//     else if (darkPint) {
//         if (!darkPint) {
//             console.log("негра нет")
//         } else {
//             darkPint.innerHTML = "";
//         }
//     }

//     chrome.storage.sync.set({ isTurn: !turn }, () => {
//         chrome.storage.sync.get('isTurn', function (dataNew) {
//             console.log(dataNew.isTurn);
//         });
//     });

    
// });


// function useCSS() {
//     let darkPint = document.getElementById("darkPint");
//     if (!darkPint) console.log("негра нет")

//     darkPintStyle = document.createElement("style");
//     darkPintStyle.innerHTML = `body {
//     background-color: #121212 !important;
// }

// .appContent > :nth-child(1) {
//     background-color: #121212 !important;
// }
// .gUZ.sj_.U9O.kVc > :nth-child(1) {
//     filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%);
// }

// /* Это кнопка выбора пункта */
// .Eqh.P_h.fZz.fev.zI7.iyn.Hsu { 
//     background-color: #1f1f1f24;
// }
// /* Это кнопка не выбранного пункта */
// .tBJ.dyH.iFc.sAJ.O2T.tg7.H2s { 
//     color: #ffffff81;
// }
// /* поиск */
// .Jea.fev.gpV.zI7.iyn.Hsu { 
//     background-color: #ff1e1e00;
// }
// .Jea.fev.gpV.zI7.iyn.Hsu:hover { 
//     background-color: #ff1e1e00;
// }

// #justSearch { 
//     background-color: #e0858500;
//     z-index: -400;
// }

// .C9q.Jea.fZz.gjz.ujU.xcv.L4E.zI7.iyn.Hsu {
//     background-color: #1f1f1f;
// }
// .mainContainer {
//     margin-top: 30px;
// }

// .zI7.iyn.Hsu{ 
//     background-color: #ff1e1e00;
// }
// .tBJ.dyH.iFc {
//     color: rgb(180, 180, 180);
// }
// .lH1.dyH.iFc.H2s.R-d.O2T.zDA.IZT {
//     color: rgb(180, 180, 180);
// }
// .XiG.sLG.zI7.iyn.Hsu {
//    border-radius: 0px !important;
// }
// .XiG.sLG.zI7.iyn.Hsu.NB {
//    border-radius: 16px !important;
// }

// .Yl-.MIw.Hb7 > div {
//     /* padding: 15px !important; */
// }

//     `;
//     darkPintStyle.id = "darkPintStyle";
//     darkPint.appendChild(darkPintStyle);

// }