console.log("Welcome to notes app. This is app.js");
showNotes();
// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    let txtArr = [addTxt.value]
    localStorage.setItem("notes", JSON.stringify(txtArr));
  }
  else {
    let name = JSON.parse(localStorage.getItem('notes'));
    name.push(addTxt.value)
    //console.log(name)
    localStorage.setItem("notes", JSON.stringify(name));
  }
  addTxt.value = ""
  showNotes();
});

// function to show elements to show local storage elements
function showNotes() {
  let note = localStorage.getItem("notes")
  let notes;
  if (note == null) {
    notes = [];
  }
  else {
    notes = JSON.parse(note)
  }
  let html = "";
  notes.forEach(function (element, index) {
    html +=
      `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
     <div class="card-body">
         <h5 class="card-title">Note ${index + 1}</h5>
         <p class="card-text"> ${element}</p>
         <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
     </div>
    </div> `
  });
  let notesElm = document.getElementById('notes')
  if (notes.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = "Enter your notes to fill this section"
  }
}

//function to delete node
function deleteNote(index) {
  // console.log('delete called', index)
  let note = localStorage.getItem("notes")
  if (note == null) {
    notes = [];
  }
  else {
    notes = JSON.parse(note)
  }

  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes))
  showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase()
  //console.log("input fires" ,inputVal)
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;

    if (cardTxt.includes(inputVal)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
    //console.log(cardTxt)
  })

})