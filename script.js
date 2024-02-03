var colors = [  "yellow", "deepskyblue",  "#ff7eb9",  "#ff65a3",  "#7afcff",  "#feff9c",  "#fff740",  "#76c0d6",  "#ffc14a",  "#46c45a",  "#fa4c15", "#f51b00", "#c21c31", "	#71d7ff"];
var colorIndex = -1;
var create = document.getElementById("createbtn");
var saver = document.getElementById("save");
var cancel = document.getElementById("cancel");
var noteField = document.getElementsByClassName("note-creater")[0];
var noteText = document.getElementById("note-text");
var createdNotesDiv = document.getElementById("created-notes");


create.addEventListener("click", showNoteCreater);
cancel.addEventListener("click", hideNoteCreater);
saver.addEventListener("click", createNote);

function getColor(){
  colorIndex++;
  if(colorIndex == colors.length)
    colorIndex = 0;
  return colorIndex;
}

function showNoteCreater(){
  noteField.setAttribute("style", "display: block");
}

function hideNoteCreater(){
  noteField.setAttribute("style", "display: none");
}

function createNote(){
  if(noteText.value != ""){
  var stickyNoteContainer = document.createElement("div");
  var stickyNote = document.createElement("h1");
  stickyNote.textContent = noteText.value;
  stickyNoteContainer.appendChild(stickyNote);
  createdNotesDiv.appendChild(stickyNoteContainer);
  var deg = Math.floor(Math.random() * (21)) - 10;
  var rotate = `rotate(${deg}deg)`;

  stickyNoteContainer.setAttribute("style",
  `height: 250px; width: 250px; background-color: ${colors[getColor()]}; transform: ${rotate};`)

  stickyNoteContainer.addEventListener("dblclick", () =>{
    stickyNoteContainer.remove();
  })

  stickyNoteContainer.addEventListener("mouseenter", ()=>{
    stickyNoteContainer.style.transform = "scale(1.1)";
    stickyNoteContainer.style.zIndex = "1";
  })
  stickyNoteContainer.addEventListener("mouseleave", ()=>{
    stickyNoteContainer.style.transform = "scale(1)";
    stickyNoteContainer.style.transform = rotate;
    stickyNoteContainer.style.zIndex = "0";
  })

  noteText.value = ""
}else{
  alert("note cannot be empty like your head")
}
}
