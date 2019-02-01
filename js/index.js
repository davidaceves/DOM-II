// David Aceves
// Your code goes here

let photoBorder = document.querySelectorAll("img");

photoBorder.forEach((key, index) => {

    photoBorder[index].addEventListener('mouseenter', (event) => {
        photoBorder[index].style.border = '1px solid black';
    });

    photoBorder[index].addEventListener('mouseleave', (event) => {
        photoBorder[index].style.border = 'none';
    });
});

let anchorAnimater = document.querySelectorAll("nav a");

anchorAnimater.forEach((key, index) => {
    anchorAnimater[index].addEventListener('mouseenter', (event) => {
        anchorAnimater[index].style.transitionProperty = 'color';
        anchorAnimater[index].style.transition = 'ease-in';
        anchorAnimater[index].style.color = 'orange';

    });

    anchorAnimater[index].addEventListener('mouseleave', (event) => {
        anchorAnimater[index].style.transitionProperty = 'color';
        anchorAnimater[index].style.transition = '1s ease-out';
        anchorAnimater[index].style.color = 'black';

    });
});

