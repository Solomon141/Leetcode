/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     var INT_MAX = 2147483647;
  var INT_MIN = - INT_MAX - 1;
    
    const revx = Math.abs(x).toString();
 
    var retValue = 0;
    
    for(var i=revx.length-1; i>=0; i--){
        retValue = retValue + (parseInt(revx[i]) * Math.pow(10, i));
}
    if (retValue > INT_MAX || retValue < INT_MIN) return 0;
    return x < 0 ? -1*retValue : retValue;
    
};