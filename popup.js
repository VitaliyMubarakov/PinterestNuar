document.addEventListener('DOMContentLoaded', function () {
    //tumbler()     
    console.log("pop")
    setCurrentStatus($('.switch-btn'));
    let turn = document.getElementById("turn");

    let roundRange = document.getElementsByClassName("roundRange")[0];
    let topRange = document.getElementsByClassName("topRange")[0];

    const root = document.querySelector(":root");

    roundRange.oninput = function () {
        let style = document.querySelector('.punktText.roundingText').style;
        style.setProperty('--rounding', `${this.value}`);
        root.style.setProperty("--pseudo-background-size", `${this.value}% 100%`);
        

        Invoke("changeRound", this.value );
    }

    roundRange.addEventListener('change', (event) => {
        chrome.storage.sync.set({ round: event.target.value });
    });

    topRange.oninput = function () {
        let style = document.querySelector('.punktText.topText').style;
        style.setProperty('--rounding', `${this.value}`);
        root.style.setProperty("--pseudo-background-sizeTop", `${this.value}% 100%`);

        Invoke("changeTop", this.value );
    }

    topRange.addEventListener('change', (event) => {
        chrome.storage.sync.set({ top: event.target.value });
    });

    $('.switch-btn').click(function () {
        var buttonTurn = $(this);
        Invoke("turnExtension");
        setCurrentStatus(buttonTurn);
    });

    

}, false);

async function Invoke(key, value = 0) {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: Wrapper,
        args: [key, value]
    });
}

function Wrapper(key, value) {
    switch (key) {
        case "turnExtension":
            TurnExtension();
            break;
        
        case "turn":
            alert("asd")
            break;
        case "changeRound":
            let darkPintStyleRound = document.getElementById("darkPintStyleRound");

            darkPintStyleRound.innerHTML = `
                .XiG.sLG.zI7.iyn.Hsu:not(.Jea) {
                    border-radius: ${value}px !important;
                }
            `;
            break;
        case "changeTop":
            let darkPintStyleTop = document.getElementById("darkPintStyleTop");

            darkPintStyleTop.innerHTML = `
                .Yl-.MIw.Hb7 > div {
                    padding: ${value}px !important;
                }
                .Jea.XiG.jzS {border-radius: 0px !important;}
            `;
            break;
    
        default:
            break;
    }

    function TurnExtension() {
        chrome.storage.sync.get('isTurn', function (data) {
            turn = data.isTurn;
            console.log(turn);
            let darkPint = document.getElementById("darkPint");
            let darkPintStyle = document.getElementById("darkPintStyle");

            if (turn == null || turn == undefined) chrome.storage.sync.set({ isTurn: true });

            if (turn == false) {
                if (darkPint) useCSS();

            } 
            else if (darkPintStyle) {
                if (!darkPintStyle) {
                    console.log("негра нет")
                } else {
                    darkPintStyle.remove();
                }
            }

            chrome.storage.sync.set({ isTurn: !turn });

            
        });


        function useCSS() {
            let darkPint = document.getElementById("darkPint");
            if (!darkPint) console.log("негра нет")

            darkPintStyle = document.createElement("style");
            darkPintStyle.innerHTML = `body {
            background-color: #121212 !important;
        }

        .appContent > :nth-child(1) {
            background-color: #121212 !important;
        }
        .gUZ.sj_.U9O.kVc > :nth-child(1) {
            filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg) brightness(102%) contrast(102%);
        }

        /* Это кнопка выбора пункта */
        .Eqh.P_h.fZz.fev.zI7.iyn.Hsu { 
            background-color: #1f1f1f24;
        }
        /* Это кнопка не выбранного пункта */
        .tBJ.dyH.iFc.sAJ.O2T.tg7.H2s { 
            color: #ffffff81;
        }
        /* поиск */
        .Jea.fev.gpV.zI7.iyn.Hsu { 
            background-color: #ff1e1e00;
        }
        .Jea.fev.gpV.zI7.iyn.Hsu:hover { 
            background-color: #ff1e1e00;
        }

        #justSearch { 
            background-color: #e0858500;
            z-index: -400;
        }

        .C9q.Jea.fZz.gjz.ujU.xcv.L4E.zI7.iyn.Hsu {
            background-color: #1f1f1f;
        }
        .mainContainer {
            margin-top: 30px;
        }

        .zI7.iyn.Hsu{ 
            background-color: #ff1e1e00;
        }
        .tBJ.dyH.iFc {
            color: rgb(180, 180, 180);
        }
        .lH1.dyH.iFc.H2s.R-d.O2T.zDA.IZT {
            color: rgb(180, 180, 180);
        }
        .Yl-.MIw.Hb7 > div {
            /* padding: 15px !important; */
        }
        .jzS.un8.TB_ {
            background-color: #1f1f1f;
        }
        .VxL.XiG.ho-.urM.wc1.zI7.iyn.Hsu {
            background-color:#1f1f1f
        }
        .R19{
            color: #d2d2d2 !important;
        } 
        .MIw.QLY.Rym.ojN.p6V.sLG.zI7.iyn.Hsu {
            border-color: transparent !important;
        }
        .RCK.Hsu.USg.adn.CCY.NTm.KhY.czT.F10.xD4.fZz.hUC.a_A.gpV.hNT.BG7.hDj._O1.gjz.mQ8.FTD.L4E {
            background-color: transparent !important;
        }
        .lH1.dyH.iFc.H2s.R-d.O2T.tg7.IZT {
            color: white;
        }
        .u97 {
            background-color: rgb(255 255 255 / 0%) !important;
            background-color: rgb(31 31 31) !important;
        }
        .Wk9.xQ4.CCY.czT.INd.kVc.FTD.L4E.DI9.BG7 {
            background-color: #1f1f1f !important;
        } 
            
        .lH1.dyH.iFc.H2s.bwj.O2T.zDA.IZT.CKL {
            color: white;
        }
            `;
            darkPintStyle.id = "darkPintStyle";
            darkPint.appendChild(darkPintStyle);

        }
    }
}

function setCurrentStatus(buttonTurn) {
    setTimeout(() => {
        chrome.storage.sync.get('isTurn', function (data) {
            turn = data.isTurn;

            if (turn == null || turn == undefined) chrome.storage.sync.set({ isTurn: true });

            if (turn == true) {
                buttonTurn.addClass('switch-on');
                let style = document.querySelector('.switch-btn').style;
                style.setProperty('--background', 'url("img/CHECK.svg")');
                $('.punktThemeText').addClass('on');
                
            } else {
                buttonTurn.removeClass('switch-on');
                let style = document.querySelector('.switch-btn').style;
                style.setProperty('--background', 'url("img/CHECKNON.svg")');
                $('.punktThemeText').removeClass('on');
            }
        });

        chrome.storage.sync.get('round', function (data) {
            let round = data.round;

            let roundRange = document.getElementsByClassName("roundRange")[0];

            let style = document.querySelector('.punktText.roundingText').style;
            
            const root = document.querySelector(":root");

            if (round == null || round == undefined) chrome.storage.sync.set({ round: 8 });
            
            style.setProperty('--rounding', `${round}`);
            root.style.setProperty("--pseudo-background-size", `${round}% 100%`);
            roundRange.value = round;
        });

        chrome.storage.sync.get('top', function (data) {
            let top = data.top;

            let topRange = document.getElementsByClassName("topRange")[0];

            let style = document.querySelector('.punktText.topText').style;
            
            const root = document.querySelector(":root");

            if (top == null || top == undefined) chrome.storage.sync.set({ top: 8 });

            style.setProperty('--rounding', `${top}`);
            root.style.setProperty("--pseudo-background-sizeTop", `${top}% 100%`);
            topRange.value = top;
        });


        
    }, 300);
}
//functions

