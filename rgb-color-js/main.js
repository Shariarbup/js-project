window.onload = () => {
    main();
}


function main() {
    const root = document.getElementById('root');
    const button = document.getElementById('change-button');

    button.addEventListener('click', function () {
        const rgbColor = genrateRGBColor();
        root.style.color = rgbColor;

    })
}

function genrateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;

}