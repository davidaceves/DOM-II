// David Aceves
// Your code goes here

// #1 Adds a black border to images when you enter or leave them with mouse pointer
let photoBorder = document.querySelectorAll("img");

photoBorder.forEach((element) => {

    element.addEventListener('mouseenter', (event) => {
        element.style.border = '1px solid black';
    });

    element.addEventListener('mouseleave', (event) => {
        element.style.border = 'none';
    });
});

// #2 Adds color change to anchor text when you enter or leave them with mouse pointer
let anchorAnimater = document.querySelectorAll("nav a");

anchorAnimater.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        element.style.transitionProperty = 'color';
        element.style.transition = 'ease-in';
        element.style.color = 'darkorange';

    });

    element.addEventListener('mouseout', (event) => {
        element.style.transitionProperty = 'color';
        element.style.transition = '1s ease-out';
        element.style.color = 'black';

    });

    element.addEventListener('click', (event) => {
        event.preventDefault()
    });


});

// #3 Adds *random* color chance to "Fun Bus" text when you click the text
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


// #4 Added zoom in feature for all images with cursor change. Single click to zoom in and double click to zoom out. Zoom in animation does not work properly on load. 
let photoSelect = document.querySelectorAll("img");

photoSelect.forEach((element) => {

    element.addEventListener('click', (event) => {
        element.style.transition = 'width .5s ease-in';
        element.style.width = '50%';
        element.style.cursor = 'zoom-in';
    });

    element.addEventListener('dblclick', (event) => {      
        element.style.transition = 'width .5s ease-in';
        element.style.width = '100%';
        element.style.cursor = 'zoom-out';
    });
});


// #5 Added scroll wheel color change effect to intro <header>, it will also change the color of <p> text.

let introAnimater = document.querySelector(".intro");
let introP = document.querySelector(".intro p");

// Prevents you from triggering the scroll wheel event from changing the color of the text
introP.addEventListener('wheel', (event) => {
    event.stopPropagation();
})

introAnimater.addEventListener('wheel', (event) => {
    introAnimater.style.transitionProperty = 'color';
    introAnimater.style.transition = 'ease-in';
    introAnimater.style.color = colorGen();
})

introAnimater.addEventListener('wheel', (event) => {
    introAnimater.style.transitionProperty = 'color';
    introAnimater.style.transition = '1s ease-out';
    introAnimater.style.color = colorGen();
})

// #6 Alerts when you have copied text from a p element
let ptags = document.querySelectorAll("p");

ptags.forEach((element) => {
    
    element.addEventListener('copy', (event) => {
        alert('You have copied text.')
    });

});

// #7 Changes background color when you drag an image and resets it when you end the drag
let allPhotos = document.querySelectorAll("img");

allPhotos.forEach((element) => {

    element.addEventListener('drag', (event) => {
        document.querySelector('body').style.background = 'red';
    });

    element.addEventListener('dragend', (event) => {
        document.querySelector('body').style.background = '';
    });
    
})

// #8 Alerts user when you resize window
window.addEventListener('resize', (event) => {
    alert('Window has been resized.');
});


// #9 Sets fun bus image to 50% scale and then on load animates it back to full size. Is very buggy, only works some of the time when reloading page.
let funBus = document.querySelector('.intro img');

funBus.style.transform = 'scale(.5)';

funBus.addEventListener('load', (event) => {
    funBus.style.transition = 'transform 1s';
    funBus.style.transform = 'scale(1)';
    
});

// #10 Added input fields to text focus color change
let formFocus = document.getElementById('form');

formFocus.addEventListener('focus', (event) => {
    event.target.style.background = 'lightgray';
}, true);

formFocus.addEventListener('blur', function( event ) {
  event.target.style.background = '';    
}, true);

