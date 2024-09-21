console.log("da")

let darkPintStyle;
class CssStyle {
    desc = "";
    style = "";
    constructor(desc, style) {
        this.desc = desc;
        this.style = style;
    }
}

InitStyles(
    new CssStyle("", `
        body {
            background-color: #121212 !important;
        }`),
    new CssStyle("", `
        .appContent > :nth-child(1) {
            background-color: #121212 !important;
        }`),
    new CssStyle("", `
        .gUZ.sj_.U9O.kVc > :nth-child(1) {
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%) !important;
        }`),
    new CssStyle("", `
        .Eqh.P_h.fZz.fev.zI7.iyn.Hsu {
            background-color: #1f1f1f24 !important;
        }`),
    new CssStyle("", `
        .tBJ.dyH.iFc.sAJ.O2T.tg7.H2s {
            color: #ffffff81;
        }`),
    new CssStyle("Поиск", `
        .Jea.fev.zI7.iyn.Hsu {
            background-color: #ff1e1e00 !important;
        }`),
    new CssStyle("Поиск наведение", `
        .Jea.fev.zI7.iyn.Hsu:hover {
            background-color: #ff1e1e00 !important;
        }`),
    new CssStyle("", `
        #justSearch {
            background-color: #e0858500 !important;
            z-index: -400;
        }`),
    new CssStyle("", `
        .C9q.Jea.fZz.gjz.ujU.xcv.L4E.zI7.iyn.Hsu {
            background-color: #1f1f1f !important;
        }`),
    new CssStyle("", `
        .zI7.iyn.Hsu {
            background-color: #ff1e1e00 !important;
        }`),
    new CssStyle("", `
        .tBJ.dyH.iFc {
            color: rgb(180, 180, 180) !important;
        }`),
    new CssStyle("", `
        .lH1.dyH.iFc.H2s.R-d.O2T.zDA.IZT {
            color: rgb(180, 180, 180) !important;
        }`),
    new CssStyle("", `
        .Yl-.MIw.Hb7 > div {
            /* padding: 15px !important; */
        }`),
    new CssStyle("", `
        .jzS.un8.TB_ {
            background-color: #1f1f1f !important;
        }`),
    new CssStyle("", `
        .VxL.XiG.ho-.urM.wc1.zI7.iyn.Hsu {
            background-color: #1f1f1f !important;
        }`),
    new CssStyle("", `
        .R19 {
            color: #d2d2d2 !important;
        }`),
    new CssStyle("", `
        .MIw.QLY.Rym.ojN.p6V.sLG.zI7.iyn.Hsu {
            border-color: transparent !important;
        }`),
    new CssStyle("", `
        .RCK.Hsu.USg.adn.CCY.NTm.KhY.czT.F10.xD4.fZz.hUC.a_A.gpV.hNT.BG7.hDj._O1.gjz.mQ8.FTD.L4E {
            background-color: transparent !important;
        }`),
    new CssStyle("", `
        .lH1.dyH.iFc.H2s.R-d.O2T.tg7.IZT {
            color: white !important;
        }`),
    new CssStyle("", `
        .u97 {
            background-color: rgb(255 255 255 / 0%) !important;
            background-color: rgb(31 31 31) !important;
        }`),
    new CssStyle("", `
        .Wk9.xQ4.CCY.czT.INd.kVc.FTD.L4E.DI9.BG7 {
            background-color: #1f1f1f !important;
        }`),
    new CssStyle("", `
        .lH1.dyH.iFc.H2s.bwj.O2T.zDA.IZT.CKL {
            color: white;
        }`)
);

chrome.storage.sync.set({ isTurn: true });
var firstTimeStylesStringData;

function InitStyles(...styles) {
    let data = "";
    for (let i = 0; i < styles.length; i++) {
        data += styles[i].style;
    }

    firstTimeStylesStringData = { stylesStringData: data };
    chrome.storage.local.set({ stylesStringData: data });
}


let body = document.getElementsByTagName("html")[0];
darkPint = document.createElement("div");
darkPint.id = "darkPint";
body.appendChild(darkPint);

chrome.storage.sync.get('isTurn', function (data) {
    console.log("asd")
    turn = data.isTurn;

    if (turn == null || turn == undefined) {
        chrome.storage.sync.set({ isTurn: true });
        console.log("AHAAHAHAHLOH");
    }

    if (turn == true) useCSS();

    if (turn == false) {
        let darkPint = document.getElementById("darkPint");
        if (!darkPint) {
            console.log("негра нет")
            darkPint.innerHTML = "";
        }
        // var theFirstChild = body.firstChild;


    }
    useCSSStyles();
    console.log(turn);
});

// document.addEventListener("DOMContentLoaded", () => {
//     useCSS();
// });



function useCSS() {
    let body = document.getElementsByTagName("html")[0];
    if (!body) console.log("body нет")
    // var theFirstChild = body.firstChild;
    console.log("body нет")
    darkPintStyle = document.createElement("style");
    darkPintStyle.innerHTML = firstTimeStylesStringData.stylesStringData;
    darkPintStyle.id = "darkPintStyle";
    darkPint = document.getElementById("darkPint");
    darkPint.appendChild(darkPintStyle);
}

function useCSSStyles() {
    chrome.storage.sync.get('round', function (roundData) {
        chrome.storage.sync.get('top', function (data) {
            darkPintStyleRound = document.createElement("style");
            darkPintStyleTop = document.createElement("style");

            darkPintStyleRound.innerHTML = `
                .XiG.sLG.zI7.iyn.Hsu:not(.Jea) {
                    border-radius: ${roundData.round ? roundData.round : 0}px !important;
                }
            `;
            darkPintStyleTop.innerHTML = `
                .Yl-.MIw.Hb7 > div {
                    padding: ${data.top ? data.top : 0}px !important;
                }
                .Jea.XiG.jzS {border-radius: 0px !important;}
            `;

            darkPintStyleRound.id = "darkPintStyleRound";
            darkPintStyleTop.id = "darkPintStyleTop";

            darkPint = document.getElementById("darkPint");

            darkPint.appendChild(darkPintStyleRound);
            darkPint.appendChild(darkPintStyleTop);
        });

    });

}