const search = document.getElementById("search");
let check = false;
document.getElementById("btn").onclick = function () {
  if (check == true) {
    search.classList.add("active");
    check = false;
  } else {
    search.classList.remove("active");
    check = true;
  }
};
