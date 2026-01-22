function transformData() {
  const input = [1, 2, 3, 4];

  return Promise.resolve(input)
    .then(numbers => {
      return new Promise(resolve => {
        setTimeout(() => {
          const filtered = numbers.filter(num => num % 2 === 0);
          document.getElementById("output").textContent = filtered.join(",");
          resolve(filtered);
        }, 1000);
      });
    })
    .then(filtered => {
      return new Promise(resolve => {
        setTimeout(() => {
          const multiplied = filtered.map(num => num * 2);
          document.getElementById("output").textContent = multiplied.join(",");
          resolve(multiplied);
        }, 2000);
      });
    });
}

transformData();
