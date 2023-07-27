
images = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
];


    
    let index1 = Math.floor(Math.random() * images.length);
    let index2 = Math.floor(Math.random() * images.length);
 
    document.querySelector('.img1').src = images[index1];
    document.querySelector('.img2').src = images[index2];

