function BinarySearch(arr, number){let animations = [];
    dobinarySearch(arr, number, animations);
    return animations;
}

function dobinarySearch(arr, number, animations){

    let lo = 0, hi = arr.length-1;

    while(lo <= hi){
        let mid = Math.floor((lo + hi) / 2);
        animations.push({indices: [mid], type: "comp", color: "red"});

        if(number < arr[mid]){
            hi = mid - 1;
        }
        else if(number > arr[mid]){
            lo = mid + 1;
        }
        else if(number == arr[mid]){
            break;
        }
        animations.push({indices: [mid], type: "comp", color: "green"});
    }
    
}

export default BinarySearch;
