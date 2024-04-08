function drawTriangle(height, symbol) {
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += symbol;
    }
    console.log(row);
  }
}
drawTriangle(5, '^');

function drawTriangleRecursively(height, symbol, currentHeight = 1) {
  if (currentHeight > height) {
    return;
  }

  let row = '';
  for (let i = 1; i <= currentHeight; i++) {
    row += symbol;
  }
  console.log(row);

  drawTriangleRecursively(height, symbol, currentHeight + 1);
}
drawTriangleRecursively(5, '^');
