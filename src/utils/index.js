export function generateRandomNumbers() {
  const numbers = [];

  while (numbers.length < 5) {
    const randomBytes = new Uint8Array(1);
    crypto.getRandomValues(randomBytes);
    const randomNumber = Math.floor((randomBytes[0] / 255) * 90) + 1;

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}

export function countCommonNumbers(array1, array2) {
  let count = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      count++;
    }
  }

  return count;
}
