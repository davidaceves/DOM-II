// David Aceves
// Your code goes here

// #1
let photoBorder = document.querySelectorAll("img");

photoBorder.forEach((key, index) => {

    photoBorder[index].addEventListener('mouseenter', (event) => {
        photoBorder[index].style.border = '1px solid black';
    });

    photoBorder[index].addEventListener('mouseleave', (event) => {
        photoBorder[index].style.border = 'none';
    });
});

// #2
let anchorAnimater = document.querySelectorAll("nav a");

anchorAnimater.forEach((element) => {
    element.addEventListener('mouseenter', (event) => {
        element.style.transitionProperty = 'color';
        element.style.transition = 'ease-in';
        element.style.color = 'darkorange';

    });

    element.addEventListener('mouseleave', (event) => {
        element.style.transitionProperty = 'color';
        element.style.transition = '1s ease-out';
        element.style.color = 'black';

    });
});

// #3
let headingAnimater = document.querySelector(".logo-heading");

function colorGen () {
    let min = 0;
    let max = 255;

    let colorR = Math.floor(Math.random() * (max - min + 1)) + min;
    let colorG = Math.floor(Math.random() * (max - min + 1)) + min;
    let colorB = Math.floor(Math.random() * (max - min + 1)) + min;

    return `rgb(${colorR}, ${colorG}, ${colorB})`;  
}

headingAnimater.addEventListener('click', (event) => {
    headingAnimater.style.transitionProperty = 'color';
    headingAnimater.style.transition = 'ease-in';
    headingAnimater.style.color = colorGen();
})

headingAnimater.addEventListener('click', (event) => {
    headingAnimater.style.transitionProperty = 'color';
    headingAnimater.style.transition = '2s ease-out';
    headingAnimater.style.color = colorGen();
})







// #4

// #5

// #6

// #7

// #8

// #9

// #10

