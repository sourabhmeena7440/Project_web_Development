const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search")
const getUser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json()
    // console.log(data);
    const card = `
    <div class="card">
        <div>
            <img class="avtar" src="${data.avatar_url}" alt="Florin Pop">
        </div>
        <div class="user-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>

            <ul class="info">
                <li>${data.followers}<strong>Followers</strong></li>
                <li>${data.following}<strong>Following</strong></li>
                <li>${data.public_repos}<strong>Repos</strong></li>
            </ul>
            
            <div id="repos">
            </div>
        </div>
    </div>
    `
    main.innerHTML = card;
    getRepos(username)
}
//init coll
getUser("bhagirath-wscubetech")

// Repojetri
const getRepos = async(username) => {
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username + "/repos")
    const data = await response.json();
    // console.log(data)
    data.forEach(
        (item) => {
            console.log(item)
            const elem = document.createElement("a")
            elem.classList.add("repo")
            elem.href = item.html_url
            elem.innerText = item.name
            elem.target = "_blank"
            repos.appendChild(elem)

        }
    )
}

// kisi ki bhi repojetri serch karne par aana
const formSubmit = () => {
    const searchBox = document.querySelector("#search")
    if(searchBox.value != ""){
        getUser(searchBox.value);
        searchBox.value = ""
    }
    return false;
}
// universal and global banaya
searchBox.addEventListener(
    "focusout",
    function(){
        formSubmit()
    }
)
/** 
<div id="repos">
<a class="repo" href="#" target="_blank">Repo 1</a>
<a class="repo" href="#" target="_blank">Repo 2</a>
<a class="repo" href="#" target="_blank">Repo 2</a>

</div>*/