window.onload = () => {
    main();
}


function main() {
    const root = document.getElementById('root');
    const button = document.getElementById('change-button');
    const output = document.getElementById('output');

    button.addEventListener('click', function () {
        const hexColor = genrateHexColor();
        root.style.backgroundColor = hexColor;
        output.value = hexColor;

    })
}

function genrateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

}