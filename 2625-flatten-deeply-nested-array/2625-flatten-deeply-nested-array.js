/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
let newArr = [];
var flat = function (arr, n) {
    if (n===0) return arr;
    for(let i=0; i<n; i++){
        for(let j=0; j<arr.length; j++){
            if(Array.isArray(arr[j]) === true){
                let arrj = arr[j];
                arr.splice(j,1, ...arrj);
                j = j + arrj.length -1;
               }
        }
    }
    return arr
};