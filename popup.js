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
            chrome.storage.local.get('stylesStringData', (stylesStringData) => {
                darkPintStyle.innerHTML = stylesStringData.stylesStringData;
            });
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

