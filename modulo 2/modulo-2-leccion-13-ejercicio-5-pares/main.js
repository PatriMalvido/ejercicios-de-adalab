"use strict";

const pins = [2389, 2384, 2837, 5232, 8998];


const resultParPins = (pinsItem) => {
    
    if (pinsItem % 2 === 0) {
        return pinsItem;
    }
};


const parPins = pins.filter(resultParPins);

console.log(parPins);
