// Insertion sort

function InsertionSort(A) {
    for(let i = 0; i < A.length; i++) {
        let v = A[i];
        let j = i - 1;
        while(j >= 0 && A[j] > v) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j + 1] = v;
    }
    return A;
}

let a = [10, 15, 21, 3, 7];
console.log(InsertionSort(a));  