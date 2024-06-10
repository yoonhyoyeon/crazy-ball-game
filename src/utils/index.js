export const MAX_X = 1000;
export const MAX_Y = 800;
export const PLAYER_SIZE = 20;
export const BALL_SIZE = 30;
export const PLAYER_SPEED = 1.5;
export const BALL_SPEED = 1.5;

export const randomNum = (min, max) => Math.floor(Math.random()*(max+1-min))+min;

export const randomColor = () => {
    const flag = randomNum(0,5);
    if(flag===0) return `rgb(${randomNum(110,247)}, 110, 247)`;
    else if(flag===1) return `rgb(${randomNum(110,247)}, 247, 110)`;
    else if(flag===2) return `rgb(247, ${randomNum(110,247)}, 110)`;
    else if(flag===3) return `rgb(110, ${randomNum(110,247)}, 247)`;
    else if(flag===4) return `rgb(110, 247, ${randomNum(110,247)})`;
    else if(flag===5) return `rgb(247, 110, ${randomNum(110,247)})`;
    else return 'rgb(0, 0, 0)';
}

export const getMoveInfo = (x, y, target_x, target_y, speed) => {
    const d_x = target_x-x;
    const d_y = target_y-y;
    const d = Math.sqrt(d_x*d_x+d_y*d_y);
    const m_x = d_x*(speed/d);
    const m_y = d_y*(speed/d);

    return { m_x, m_y };
}