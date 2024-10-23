/**
 * Implementation of the Merge Sort algorithm based on the Divide and Conquer principle.
 */
class MergeSort {
  /**
   * Merges two already sorted arrays.
   * @param {*} firstArray
   * @param {*} secondArray
   * @returns
   */
  static merge(firstArray, secondArray) {
    let i = 0;
    let j = 0;
    let k = 0;
    let mergedArray = [];

    while (i < firstArray.length && j < secondArray.length) {
      if (firstArray[i] < secondArray[j]) {
        mergedArray[k++] = firstArray[i++];
      } else {
        mergedArray[k++] = secondArray[j++];
      }
    }

    for (; i <= firstArray.length - 1; i++) {
      mergedArray[k++] = firstArray[i];
    }

    for (; j <= secondArray.length - 1; j++) {
      mergedArray[k++] = secondArray[j];
    }

    return mergedArray;
  }

  /**
   * Sorts an array by recursively splitting it into smaller arrays and merging them in order.
   * @param {*} array
   * @returns
   */
  static sort(array) {
    if (array.length > 1) {
      const midIdx = Math.floor(array.length / 2);
      const leftHalf = this.sort(array.slice(0, midIdx));
      const rightHalf = this.sort(array.slice(midIdx, array.length));

      return this.merge(leftHalf, rightHalf);
    } else {
      return array;
    }
  }
}

console.log(MergeSort.sort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(MergeSort.sort([105, 79, 100, 110]));

