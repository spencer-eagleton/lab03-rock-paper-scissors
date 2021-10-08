export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

}

export function didUserWin(userMove, compMove){
    if (userMove === compMove) {
        return 0;
    } else if (userMove === 'rock' && compMove === 'scissors'){
        return 1;
    } else if (userMove === 'paper' && compMove === 'rock'){
        return 1;
    } else if (userMove === 'scissors' && compMove === 'paper'){
        return 1;
    }
    
    
    
    
    
    else {
        return -1;
    }

}