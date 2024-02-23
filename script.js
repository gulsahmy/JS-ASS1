const headerElement = document.querySelector(".header");
headerElement.style.backgroundColor = "gray";
headerElement.style.color = "pink";
headerElement.style.padding = "8px";
headerElement.style.textAlign = "center";

/**********************************************************/

const titleElement = document.getElementById("title");
titleElement.textContent = "Javascript Dom Assigment 1"

/**********************************************************/

const navitemElement = document.querySelector(".nav-item");
navitemElement.style.display = "flex";
navitemElement.style.justifyContent = "center";
navitemElement.style.gap = "15px";
navitemElement.style.listStyle = "none";

/**********************************************************/

const usernameInput = document.querySelector("#username");
usernameInput.value = "Gulsah";
usernameInput.disabled = "true";
usernameInput.style.padding = "10px"
usernameInput.style.borderRadius = "20px";
usernameInput.style.color = "pink"
usernameInput.style.backgroundColor = "gray"
const passwordInput = document.querySelector("#password");
passwordInput.value = "112013";
passwordInput.disabled = "true";
passwordInput.type = "text";
passwordInput.style.padding = "10px"
passwordInput.style.borderRadius = "20px";
passwordInput.style.color = "pink"
passwordInput.style.backgroundColor = "gray"

/**********************************************************/

const btnElement = document.querySelector(".btn");
btnElement.style.backgroundColor = "gray";
btnElement.style.color = "pink";
btnElement.style.padding = "10px";
btnElement.style.borderRadius = "20px";
btnElement.textContent = "Giriş Yap";
btnElement.style.cursor = "pointer";
btnElement.style.border = "none";

/**********************************************************/

const h3Element = document.getElementById("projects");
h3Element.textContent = "JS DOM PROJECTS";
h3Element.style.textDecoration = "underline";
h3Element.style.fontSize = "20px"
h3Element.style.color = "pink"
h3Element.style.width = "300px"
h3Element.style.height = "300px"
const projectsElement = document.getElementById("projects");
projectsElement.style.backgroundColor = "gray"
projectsElement.style.paddingLeft = "70px"
projectsElement.style.paddingTop = "60px"
projectsElement.style.borderRadius = "50%"
projectsElement.style.boxShadow = "1px 10px 200px 90px "


/**********************************************************/

const myProjects = ["Hello World!", "Guess Number", "Checkout Page", "Gelir-Gider Projesi", "Api Projects"];
const ulElement = document.createElement("ul");
myProjects.forEach(project => {
    const liElement = document.createElement("li");
    liElement.textContent = project
    ulElement.appendChild(liElement);
});
 document.getElementById("projects").appendChild(ulElement); 
