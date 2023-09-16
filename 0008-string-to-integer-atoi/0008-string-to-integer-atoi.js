/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    var trimS = s.trimStart();
    var MaxInt = Math.pow(2,31) -1;
    var MinInt = -MaxInt;
    var resNum = 0;
        
    var arrSp = trimS.split(" ")
   
    if(!isNaN(parseInt(arrSp[0]))){
        resNum = parseInt(arrSp[0]);
    }
    if(resNum > MaxInt){
        resNum = Math.pow(2,31)-1
    } 
    if(resNum < MinInt){
        resNum = -Math.pow(2,31)
    } 
    return resNum;
};