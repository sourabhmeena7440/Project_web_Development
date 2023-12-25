const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// 3 selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

// 1
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

// 2 rendom data ganrate karvayga
const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password += getRandomData(lowerSet)
    }
    if(numberInput.checked){
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked){
        password += getRandomData(symbolSet)
    }
    //yha function recersion coll karta hi rhega  and yha bar-bar password ganrate karta hi rhega
    if(password.length < totalChar.value){
        return generatePassword(password)
    }
    // console.log(password)
    // console.log(truncateString(password,totalChar.value))
    // end ->  har bar button par clicke karne par rendom password junrate ho rhe hai
    passBox.innerText = truncateString(password,totalChar.value);
}
generatePassword();
document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
)
// generatePassword(); // ise use karne par uppercase hi le rha hai


//yha recersion ke duvra ganrate password sirf 10 tak hi dikhana hai
function truncateString(str,num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }else{
        return str;
    }
}