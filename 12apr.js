function minNumDelete(arr){
    let count = 0;
    let temp  = new Array(arr.length);
    for(let i=0;i<arr.length;i++){
        temp[i] = 1;

    }
    for(let i=1;i<arr.length;i++){
        for(let j = 0; j < i; j++){
            if(arr[i] > arr[j] && temp[i] < temp[j]+1)
            temp[i]= temp[j]+1;

        }
    }
    for(let i=0;i<arr.length;i++){
        if(count < temp[i]){
            count = temp[i];
            
        }
    }
    return arr.length-count;
}

let arr = [7, 4, 8, 5, 9];
console.log(minNumDelete(arr));