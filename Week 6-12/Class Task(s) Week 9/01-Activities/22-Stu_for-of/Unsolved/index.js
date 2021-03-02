var song = document.getElementById("songs");

for (child of song.children) {
    child.setAttribute('class', "red");
    child.classList.add("red");
  }