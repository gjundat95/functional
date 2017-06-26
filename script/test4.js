function config({color, size = 20, speed = 'slow', volume}){
    console.log(color, size, speed, volume);
};

config({
    size:10,
    volume: 999,
    color: 'red'
})