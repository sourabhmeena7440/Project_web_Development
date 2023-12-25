const getColor = () => {
    // hex code
    const randomNumber = Math.floor (Math.random() * 16777215);
    // console.log(randomNumber);\
    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomNumber,randomCode);
    // event coll
    document.body.style.backgroundColor = randomCode;
    // color ke sath code bhi show karne ke liye
    document.getElementById("color-code").innerText = randomCode;

    // automatic click ke sath copy bhi hona
    navigator.clipboard.writeText(randomCode)
}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

// insal coll
getColor()
