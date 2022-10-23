/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    if(image[sr][sc] === color) return image;

    let find = image[sr][sc];
    //image[sr][sc] = color;
    return floodHelper( image, sr, sc, find, color );
    
    
};

let floodHelper = (image, row, col, find, color)=>{
    
    let rowMax = image.length;
    let colMax = image[0].length;
    if( row>=0 && row<rowMax && col>=0 && col<colMax ){
        if( image[row][col] === find ){
            image[row][col] = color;
            floodHelper(image, row,col-1, find, color);
            floodHelper(image,row,col+1, find, color);
            floodHelper(image,row-1,col, find, color);
            floodHelper(image,row+1,col, find, color);
        }
    }
    return image;
}