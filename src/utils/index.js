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