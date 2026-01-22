//your JS code here. If required.
  function processNumbers() {
    const inputArray = [1, 2, 3, 4];

    return Promise.resolve(inputArray)

      .then(numbers => {
        return new Promise(resolve => {
          setTimeout(() => {
            const evens = numbers.filter(num => num % 2 === 0);
            document.getElementById("output").textContent =
              "After filtering odds: " + evens.join(", ");
            resolve(evens);
          }, 1000);
        });
      })

      .then(evens => {
        return new Promise(resolve => {
          setTimeout(() => {
            const doubled = evens.map(num => num * 2);
            document.getElementById("output").textContent =
              "After multiplying by 2: " + doubled.join(", ");
            resolve(doubled);
          }, 2000);
        });
      });
  }

  processNumbers();