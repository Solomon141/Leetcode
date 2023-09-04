/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    let res = [];
    if(this.length !== (rowsCount * colsCount))
        return []
    for (let i=0; i<rowsCount; i++)
        res.push(new Array(colsCount));
    let revOrder = false, ind=0;
    for(let j=0; j<colsCount; j++){
        if(!revOrder)
            for(let i=0; i<rowsCount; ++i)
                res[i][j] = this[ind++]
        else
            for(let i=rowsCount-1; i>=0; --i)
                res[i][j] = this[ind++]
    revOrder = !revOrder;
    }
    return res;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */