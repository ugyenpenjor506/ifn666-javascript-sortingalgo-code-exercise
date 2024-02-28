// Bubble Sort

function BubbleSort(A) {
    for (let i = 0; i < A.length - 1; i++) {
        for (let j = 0; j < A.length - i - 1; j++) {
            if (A[j] > A[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = A[j];
                A[j] = A[j + 1];
                A[j + 1] = temp;
            }
        }
    }    
    return A;
}

let a = [10, 15, 21, 3, 7];
console.log(BubbleSort(a));