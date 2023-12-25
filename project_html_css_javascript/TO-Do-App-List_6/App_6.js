const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
        // console.log(event.key);
        if(event.key == "Enter"){
            // console.log(this.value)
            addtoDo(this.value)
            this.value = ""
        }
    }
)

// kuch type karne ke bad isme Enter karne par paragrap ban jata hai box me
const addtoDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
        <i class="fas fa-times"></i>
    `;

    // isseme click karne par color change ho rha hai
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    // cross ka use kiya
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}