// Transposes an array
const transpose = function (matrix) {
    // Put your solution here
    let newArray = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let col = [];

        for (let j = 0; j < matrix.length; j++) {
            col.push(matrix[j][i]);
            //console.log("Column", col);
        }
        newArray.push(col);
        // console.log("newArray", newArray)
    }
    return newArray;
};


const wordSearch = (letters, word) => {
    //Joins the row elements together
    const horizontalJoin = letters.map(ls => ls.join(''));
    
    //Tranposes the array and joins the row elements together
    const vertArray = transpose(letters).map(x => x.join(''));

    // Checks the horizontal array for a match
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    // Checks the vertical array for a match
    for (v of vertArray) {
        if (v.includes(word)) return true
    }

    // Returns false if nothing is found
    return false;
}

module.exports = wordSearch