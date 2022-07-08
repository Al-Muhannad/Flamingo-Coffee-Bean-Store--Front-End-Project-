//first card 
const fcardava = document.querySelector("#one .ava")
const fcardname = document.querySelector("#one h4")
const fcardinfo = document.querySelectorAll("#one h5")
const fcardlink = document.querySelector("#c1");



const fendpoint = "https://api.github.com/users/Al-Muhannad";


async function requestProfileone() {
  const response = await fetch(fendpoint);
  const data = await response.json();
  fcardava.src= data.avatar_url;
  fcardname.textContent = data.name;
  fcardinfo [0].textContent = data.login;
  fcardinfo [1].textContent = data.twitter_username;
  fcardinfo [2].textContent = data.company;
  fcardinfo [3].textContent = data.location;
  fcardinfo [4].textContent = data.followers;
  fcardinfo [5].textContent = data.following;
  fcardinfo [6].textContent = data.public_repos;
  fcardlink.href=data.html_url;
  console.log(fcardinfo)
}



//second card

const Scardava = document.querySelector("#two .ava")
const Scardname = document.querySelector("#two h4")
const Scardinfo = document.querySelectorAll("#two h5")
const Scardlink = document.querySelector("#c2");



const Sendpoint = "https://api.github.com/users/essa7987";

async function requestProfiletwo() {
  const response = await fetch(Sendpoint);
  const data = await response.json();
  Scardava.src= data.avatar_url;
  Scardname.textContent = data.name;
  Scardinfo [0].textContent = data.login;
  Scardinfo [1].textContent = data.twitter_username;
  Scardinfo [2].textContent = data.company;
  Scardinfo [3].textContent = data.location;
  Scardinfo [4].textContent = data.followers;
  Scardinfo [5].textContent = data.following;
  Scardinfo [6].textContent = data.public_repos;
  Scardlink.href=data.html_url;
}


//third card
const Tcardava = document.querySelector("#three .ava")
const Tcardname = document.querySelector("#three h4")
const Tcardinfo = document.querySelectorAll("#three h5")
const Tcardlink = document.querySelector("#c3");



const Tendpoint = "https://api.github.com/users/Alumrani";

async function requestProfiletree() {
  const response = await fetch(Tendpoint);
  const data = await response.json();
  Tcardava.src= data.avatar_url;
  Tcardname.textContent = data.name;
  Tcardinfo [0].textContent = data.login;
  Tcardinfo [1].textContent = data.twitter_username;
  Tcardinfo [2].textContent = data.company;
  Tcardinfo [3].textContent = data.location;
  Tcardinfo [4].textContent = data.followers;
  Tcardinfo [5].textContent = data.following;
  Tcardinfo [6].textContent = data.public_repos;
  Tcardlink.href=data.html_url;
}


//fouth card


const Fcardava = document.querySelector("#four .ava")
const Fcardname = document.querySelector("#four h4")
const Fcardinfo = document.querySelectorAll("#four h5")




const Fendpoint = "https://api.github.com/users/N24il";

async function requestProfileFour() {
  const response = await fetch(Fendpoint);
  const data = await response.json();
  Fcardava.src= data.avatar_url;
  Fcardname.textContent = data.name;
  Fcardinfo [0].textContent = data.login;
  Fcardinfo [1].textContent = data.twitter_username;
  Fcardinfo [2].textContent = data.company;
  Fcardinfo [3].textContent = data.location;
  Fcardinfo [4].textContent = data.followers;
  Fcardinfo [5].textContent = data.following;
  Fcardinfo [6].textContent = data.public_repos;
}

requestProfileone();
requestProfiletwo();
requestProfiletree();
requestProfileFour();


