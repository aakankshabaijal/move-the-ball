let ball = document.querySelector('img');
console.log(ball);
let moveBy = 50;


window.addEventListener('load', ()=>{
    ball.style.position = 'absolute';
    ball.style.left = 0;
    ball.style.top = 0;
});

window.addEventListener('keyup', (event)=>{

    if(event.key === 'w' && parseInt(ball.style.top) > 0){
        console.log('w pressed');
        ball.style.top = parseInt(ball.style.top) - moveBy + 'px';
    }
    else if(event.key === 'a' && parseInt(ball.style.left) > 0){
        console.log('a pressed');
        ball.style.left = parseInt(ball.style.left) - moveBy + 'px';
    }
    else if(event.key === 's' && parseInt(ball.style.top) < window.visualViewport.height - ball.height){ 
        console.log('s pressed');
        ball.style.top = parseInt(ball.style.top) + moveBy + 'px';
    }
    else if(event.key === 'd' && parseInt(ball.style.left) < window.visualViewport.width - ball.width){ 
        console.log('d pressed');
        ball.style.left = parseInt(ball.style.left) + moveBy + 'px';
        
    }
});
