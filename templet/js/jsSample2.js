
function calc() {

  let num1 = Number(document.querySelector("#num1").value)
  let num2 = Number(document.querySelector("#num2").value)

  let sum = 0
  for (let i = num1; i <= num2; i++) {
    // i 1 sum 0  sum=1
    // i 2 sum 1  sum=3
    // i 3 sum 3  sum=6
    // i 4 sum 6  sum=10
    // i 5

    sum = sum + i
  }
  document.querySelector("#result").textContent = sum
}


