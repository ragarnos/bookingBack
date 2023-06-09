
 function randomUniqueArray(array){
    const lengthArray = array.length;
    const randomUniqueArray = randomUnique(lengthArray , getRandomInt(1, lengthArray + 1));
    return randomUniqueArray.map((elem) => array[elem - 1]);
}


 function randomUnique(range, count){
    let nums = new Set();
    while (nums.size < count) {
        nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
    }
    return [...nums];
}

 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
 function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
module.exports = {
    randomUniqueArray,
    randomUnique,
    getRandomInt,
    getRandomFloat
};