let NoteInput = document.getElementById("NoteInput")
let NoteBtn = document.getElementById("NoteBtn")
// ========== 
let NoteList = document.getElementById("NoteList")

NoteBtn.addEventListener("click", ()=>{
    
    let NoteValues = NoteInput.value
    let newList = document.createElement("li")
    NoteList.appendChild(newList)
    newList.innerText = NoteValues
    NoteInput.value = ""
    
})
