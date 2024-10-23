/**
 * Implementation of Fibonacci numbers using iterative and recursive apporaches.
 */
class Fibonacci {
  static solveIterative(n) {
    const fiboArray = [0, 1];

    if (n <= 1) {
      return [0];
    } else if ((n = 2)) {
      return [0, 1];
    }

    for (let i = 2; fiboArray.length < n; i++) {
      fiboArray.push(fiboArray[i - 1] + fiboArray[i - 2]);
    }

    return fiboArray;
  }

  static solveRecursively(num) {
    
    if (num === 0) {
      return [];
    }

    if (num === 1) {
      return [0];
    }

    if (num === 2) {
      return [0, 1];
    }

    const newArray = fib(num - 1);
    newArray.push(
      newArray[newArray.length - 1] + newArray[newArray.length - 2]
    );

    return newArray;
  }
}

console.log(Fibonacci.solveRecursively(8));
