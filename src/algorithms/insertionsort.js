function insertionSort(arr){
    let animations = [];
    let auxArr = [...arr];
    doinsertionSort(animations, auxArr);
    return [animations, auxArr];
}

function doinsertionSort(animations, auxArr){
    for(let i = 1; i < auxArr.length; i++){
        let temp = auxArr[i];
        let j = i-1;
        while(j >= 0) {
            animations.push({indices:[j, j+1], type: "comp", color: "red"});
            animations.push({indices:[j, j+1], type: "comp", color: "green"});
            if(auxArr[j] > temp) {
                animations.push({indices:[j, auxArr[j+1]], type: "swap", color: ""});
                animations.push({indices:[j+1, auxArr[j]], type: "swap", color: ""});
                swap(auxArr, j, j+1);
                j--;
            }
            else {
                break;
            }
        }
        auxArr[j+1] = temp;
    }

    function swap(auxArr, first, second){
        let temp = auxArr[first];
        auxArr[first] = auxArr[second];
        auxArr[second] = temp;
    }
}

export default insertionSort;