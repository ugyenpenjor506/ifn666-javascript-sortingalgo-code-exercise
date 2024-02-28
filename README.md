Algorithm SelectionSort(A[0..n – 1])
// Input: Array A[0..n – 1] of numbers
// Output: Array A[0..n – 1] of numbers sorted in non-decreasing order for i ← 0 to n – 2 do
 CRICOS No.00213J
min ← i
for j ← i+1 to n – 1 do
if A[j] < A[min] then min ← j swap A[i] and A[min]
