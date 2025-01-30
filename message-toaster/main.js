window.onload = () => {
    main();
}

let div = null;
function main() {
    const root = document.getElementById('root');
    const button = document.getElementById('change-button');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');

    button.addEventListener('click', function () {
        const hexColor = genrateHexColor();
        root.style.backgroundColor = hexColor;
        output.value = hexColor;

    })


    copyBtn.addEventListener('click', function (){
        navigator.clipboard.writeText(output.value); 
        if (div !== null) {
            div.remove();
            div = null;
        }
        generateMessageToaster(`${output.value} copied`);
    })
}

function genrateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

}

function generateMessageToaster(msg) {
    console.log("i am from message toaster")
    div = document.createElement('div');
    
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';
    div.addEventListener('click', function() {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');
        div.addEventListener('animationend', function() {
            div.remove();
            div = null;
        })
    })

    
    document.body.appendChild(div);
}

/***

* @param {string} color
 */
function isHexValid(color) {
    if(color.length !== 7) {
        return false;
    }

    if(color[0] !== '#') {
        return false;
    }
    color = color.substring(1);

    return /^[0-9A-Fa-f]{6}$/i.test(color);
}