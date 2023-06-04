function selectionsort(arr){
    let animations = [];
    let auxArr = [...arr];
    doselectionSort(animations, auxArr);
    return [animations, auxArr];
}

function doselectionSort(animations, auxArr){
    for(let i = 0; i < auxArr.length; i++){
        let minIdx = i;
        for(let j = i+1; j<auxArr.length; ++j) {
            animations.push({indices:[j, minIdx], type: "comp", color: "red"});
            animations.push({indices:[j, minIdx], type: "comp", color: "green"});
            if(auxArr[j]<auxArr[minIdx]) {
                minIdx = j;
            }
        }
        animations.push({indices:[i, auxArr[minIdx]], type: "swap", color: ""});
        animations.push({indices:[minIdx, auxArr[i]], type: "swap", color: ""});
        swap(auxArr, i, minIdx);
    }

    function swap(auxArr, first, second){
        let temp = auxArr[first];
        auxArr[first] = auxArr[second];
        auxArr[second] = temp;
    }
}

export default selectionsort;