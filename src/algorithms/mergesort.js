const mergeSort = (array) => {
    let animations = [];
    let auxArr = [...array];
    domergeSort(auxArr, 0, array.length - 1, animations);
    return [animations, auxArr];
}

function domergeSort(auxArr, startIdx, endIdx, animations) {
    if (startIdx >= endIdx) return;
    const middleIdx = startIdx+parseInt((endIdx-startIdx)/2);
    domergeSort(auxArr, startIdx, middleIdx, animations);
    domergeSort(auxArr, middleIdx + 1, endIdx, animations);
    doMerge(auxArr, startIdx, middleIdx, endIdx, animations);
  }
  
  function doMerge(auxArr, startIdx, middleIdx, endIdx, animations) {
    let i = startIdx;
    let j = middleIdx + 1;
    let tempArr = []
    while (i <= middleIdx && j <= endIdx) {
      animations.push({indices:[i, j], type: "comp", color: "red"});
      animations.push({indices:[i, j], type: "comp", color: "green"});

      if (auxArr[i] <= auxArr[j]) {
        tempArr.push(auxArr[i++]);
      } 
      else {
        tempArr.push(auxArr[j++]);

      }
    }
    while (i <= middleIdx) {
        tempArr.push(auxArr[i++]);
    }
    while (j <= endIdx) {
        tempArr.push(auxArr[j++])
    }
    for(let i = startIdx; i<=endIdx; ++i) {
      animations.push({indices:[i, tempArr[i-startIdx]], type: "swap", color: ""});
      auxArr[i] = tempArr[i-startIdx];
    }
  }


export default mergeSort;