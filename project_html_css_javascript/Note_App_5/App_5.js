const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")

/// data ko save karne ke liye
const saveNotes = () =>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data);
    // data localstorage me data store karna hai
    localStorage.setItem("notes",JSON.stringify(data))
    // refress karne par data hat jaye aor new page show ho
    if(data.length === 0){
        localStorage.removeItem("notes")
    } else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
}


addBtn.addEventListener(
    "click",
    function(){
        addNote()
    }
)

const addNote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
                <i class="save fas fa-save"></i>
                <i class="trash fas fa-trash"></i>

    </div>
    <textarea>${text}</textarea>
    `;

    // button par click karne par delete hona chahiye
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
            saveNotes()
        }
    )
    /// data ko save karne ke liye
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )
    // save nhi karne par bhi data save ho jana
    note.querySelector("textarea").addEventListener(
        "focusout",
        function(){
            saveNotes()
        }
    )
    main.appendChild(note);
    saveNotes();

}


// localstorage me data pada hai to yha bhi show hona chahiye kyoki data ko htane ke bad bhi console me hona chahiye
// and pura refresh karne ke bad bhi data bhi rhana chahiye
(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null){
            addNote()
        }else{
            lsNotes.forEach(
                (lsNotes) => {
                    addNote(lsNotes)
                }
            )
        }
        
        /// delete karne ke bad bhi refresh par data return a rha hai
        // if (lsNotes.length === 0){
        //     localStorage.removeItem("notes")
        // } else {
        //     addNote()
        // }
    }
)()