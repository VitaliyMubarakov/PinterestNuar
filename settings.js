console.log("ads " + typeInvoke)
alert('Hello, world!');
start();

function start() {

    if (typeInvoke == "widthRange") {
        // document.getElementById("sub").style.setProperty("-webkit-mask-image",      `-webkit-linear-gradient(rgba(2,0,36,0) ${35 - rangeWidthValue}%, rgba(1,0,12,1) 45%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) ${65 + rangeWidthValue}%)`);
    }

    if (typeInvoke == "gradientWidth") {
        document.getElementById("sub").style.setProperty("-webkit-mask-image",      `-webkit-linear-gradient(rgba(2,0,36,0) ${35 - value}%, rgba(1,0,12,1) 45%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) ${65 + value}%)`);
    }

    if (typeInvoke == "marginLRRange") {
        document.getElementById("sub").style.margin = `0 ${value}px 0 ${value}px`;
    }

    if (typeInvoke == "leftAlign") {
        document.getElementById("sub").style.float = `left`;
    }
    if (typeInvoke == "rightAlign") {
        document.getElementById("sub").style.float = `right`;
    }

    if (typeInvoke == "rightTextAlign") {
        document.getElementById("sub").style.textAlign = `right`;
    }
    if (typeInvoke == "centerTextAlign") {
        document.getElementById("sub").style.textAlign = `center`;
    }
    if (typeInvoke == "leftTextAlign") {
        document.getElementById("sub").style.textAlign = `left`;
    }

    

    //document.getElementById("sub").style.width = `${rangeWidthValue}%`;    
}