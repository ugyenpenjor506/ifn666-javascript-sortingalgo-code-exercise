// Selection Sort

function SelectionSort(A) {
    for(let i = 0; i < A.length - 1; i++){
        let min = i;
        for(let j = i + 1; j < A.length; j++){
            if(A[j] < A[min]) {
                min = j;
            }
        }
        let temp = A[i];
        A[i] = A[min];
        A[min] = temp;
    }
    return A;
}

let a = [10, 15, 21, 3, 7];
console.log(SelectionSort(a));