"use strict";

export default class ColWidth {
    constructor(){

    }

    getWidth(colNum){
        if(typeof colNum == 'number'){
            const column = Math.floor(colNum);

            return ((colNum >= 1) || (colNum <= 12)) ? ((colNum / 12) * 100).toString() + "%" : "100%";
        }
        else {
            return new Error("the column number must be a number");
        }
    }
}