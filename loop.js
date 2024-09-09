window.addEventListener("load", () => {
  let body = document.getElementById("body");
  let array = [0, 1, 2, 3, 4];
  for (let i = 0; i < array.length; i++) {
    // array = "The number is " + i;
    // console.log(array);
    const newNumber = document.createElement("p");
    newNumber.innerText = array[i].toString();
    body.appendChild(newNumber);
    // console.log(newNumber);
    console.log(array[i]);
  }
});
