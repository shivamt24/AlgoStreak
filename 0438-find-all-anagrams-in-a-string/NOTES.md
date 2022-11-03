Array approach:
1) Create array of anagram string where you increment an index representing an alphabet eg. a-> 0th index
2) Iterate through the string, for every character update a new array with its index representation of the alphabet. Once the index is greater than the anagram string length, decrement the first added array index.
3) Check if both the arrays are same and if yes, add the respective index to the solution array