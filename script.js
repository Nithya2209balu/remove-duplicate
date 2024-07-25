function removeDuplicates(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
    }
    
    // Example usage:
    let array = [1, 2, 2, 3, 4, 4, 5];
    let uniqueArray = removeDuplicates(array);
    console.log(uniqueArray); 