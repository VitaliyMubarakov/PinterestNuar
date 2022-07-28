console.log("start");

// chrome.action.onClicked.addListener(tab => { 
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         files: ['changeMode.js']
//     }, () => {
//         setTimeout(() => {
//             tumbler();
//         }, 200);
//     });

    
//  });
console.log("end");

function tumbler() {
    let turn;
    
    chrome.storage.sync.get('isTurn', function (data) {
        turn = data.isTurn;
        console.log(turn);

        if (turn == null || turn == undefined) chrome.storage.sync.set({ isTurn: true });
        
        if (turn == false) {
            chrome.action.setIcon({ path: "../lightLogo.png" });
        } 
        else {
            chrome.action.setIcon({ path: "../darkLogo.png" });
        }
        console.log(turn);
    });
    console.log("turn");
}


// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
//         chrome.scripting.executeScript({
//             target: { tabId: tabId },
//             files: ["./settings.js"]
//         })
//             .then(() => {
//                 console.log("INJECTED THE FOREGROUND SCRIPT.");
//             })
//             .catch(err => console.log(err));
//     }
// });

