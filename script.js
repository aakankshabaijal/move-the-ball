var ball = document.querySelector('img');
console.log(ball);
let moveBy = 50;


window.addEventListener('load', ()=>{
    ball.style.position = 'absolute';
    ball.style.left = 0;
    ball.style.top = 0;
});

window.addEventListener('keyup', (event)=>{
    // console.log('ok');
    if(event.key === 'w'){
        console.log('w pressed');
        ball.style.top = parseInt(ball.style.top) - moveBy + 'px';
    }
    else if(event.key === 'a'){
        console.log('a pressed');
        ball.style.left = parseInt(ball.style.left) - moveBy + 'px';
    }
    else if(event.key === 's'){
        console.log('s pressed');
        ball.style.top = parseInt(ball.style.top) + moveBy + 'px';
    }
    else if(event.key === 'd'){
        console.log('d pressed');
        ball.style.left = parseInt(ball.style.left) + moveBy + 'px';
        
    }
});
