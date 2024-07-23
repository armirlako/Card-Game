export function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {
        const j = Math.floor(Math.random() * (i + 1)); //assigns a random number from 0 to 50 (not including 50)
        [array[i], array[j]] = [array[j], array[i]]; //an array destructuring assignment
    }
    return array;
}

export function removeDuplicates(array) {
    let i = 0;
    while (i < array.length) {
        let j = i + 1;
        while (j < array.length) {
            if (array[i].alt === array[j].alt) {
                array.splice(j, 1);
                array.splice(i, 1);
                i--;
                break;
            }
            j++;
        }
        i++;
    }
    return array;
}

export function createImageObj(filename, altText) {
    var img = new Image();
    img.src = 'imgs/' + filename;
    img.alt = altText;

    return img;
}

export function backImage() {
    var img = new Image();
    img.src = 'imgs/back.png'

    return img;
}

export function backArray(array){
    var backArray = [];
    for (let i = 0; i < array.length; i++){
        var image = backImage();
        backArray.push(image);
    }
    return backArray;
}

export function displayClear(array, display){
    var container = document.getElementById(display);
    array.forEach(function(img) {
        container.innerHTML = '';
    });
}

export function displayShow(array, display){
    var container = document.getElementById(display);
    array.forEach(function(img) {
        container.appendChild(img);
    });
}

export function displayBackShow(array, display){
    var container = document.getElementById(display);
    backArray(array).forEach(function(img) {
        container.appendChild(img);
    });
}

export function updateText(text) {
    var textBox = document.getElementById('text-box');
    textBox.innerText = text;
}

export function changeButtonText(text) {
    var button = document.getElementById('button');
    button.innerText = text;
}