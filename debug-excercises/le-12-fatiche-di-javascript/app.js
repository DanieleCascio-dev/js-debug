const input = document.querySelector("input");
const array = []; //dovrebbe essere [] invece che null

input.addEventListener("keypress", function (event) {
  if (event.code != "Enter") return;
  if (input.value.length == "") return;

  array.push(input.value); // Dobbbiamo usare push !array.add(input.value);!

  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = input.value; // dobbiamo usare textContent non text
  document.querySelector("ul").append(li); // dobbiamo usare append non push

  let counter = "";
  let item = array[0];
  const max = 1;
  const elems = [];

  for (let i = 0; i < array.length; i++) {
    //dobbiamo inserire array.length non array
    let val = array[i];

    if (!elems[val]) {
      //dovremmo usare !elems[i]
      elems[val] = 1;
    } else {
      elems[val]++;
    }

    for (let j = i; j < array.length; i++) {
      //Dobbiamo continuare ad usare j++
      if (array[i] == array[j]) {
        counter++;
        if (max < counter) max = counter; // mancano le parentesi {}
        item = array[i]; //dovremmo usare push
      }
    }

    counter = 0;
  }

  const alert = document.getElementsByClassName("alert");

  alert.classList.remove("d-none");
  alert.classList.add("d-flex");

  alert.querySelector("span:first-child").innerText = item;
  alert.querySelector("span:last-child").innerText = max;

  console.log("${item} trovato ${max} volte");
});
