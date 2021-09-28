/*
let promise = new Promise(function(resolve,reject){

    setTimeout(()=> resolve("done"),2000);
});

promise.then(
    result => alert (result),
    error => alert (error)
);
*/
/*
function getData(){
    fetch("https://animechan.vercel.app/api/random")
    .then(function(resolve){
        return resolve.text();
    })
    .then(function(data){
        console.log(data);
    });
}

getData();
*/
/*
let promise = fetch("https://ghibliapi.herokuapp.com/people");
promise.then(function(resolve){
    return resolve.json();
})
.then(function(data){
    console.log(data);
})
*/
/*
.then(function(data){

    const names = data.map(function(person){
        console.log(`Name: ${person.name} Age: ${person.age}`);
    });
    
    const filter = data.filter(function(withAge){  
        if(withAge.age <= 20){
            console.log(`Name: ${withAge.name} Age: ${withAge.age}`);
            // main.innerText= `Name: ${withAge.name} Age: ${withAge.age}`;
        }
    });
    
})
*/
/*
const main = document.getElementById("main");
main.classList.add("Hello");
const button = document.createElement("button");
button.classList.add("clickButton");
main.appendChild(button);
const body = document.querySelector("body");
let clickCounter = 0;
let xAxis;
let yAxis;

console.log(window);

window.addEventListener("click", function(event){
    clickCounter ++;
    console.log(clickCounter);

    if(clickCounter === 6){
        console.log("You have clicked six times");
        body.style.backgroundColor = 'purple';
        body.innerHTML = `<p>Whats Good?</p>`
        
    }

    xAxis = event.x;
    yAxis = event.y;

    console.log(`X-Axis: ${xAxis} Y-Axis: ${yAxis}`);

});
*/
const uiNavElements = [
    {title: "Home", link: "../index.html"},
    {title: "Blogs", link: "../Blogs/blogIndexPage.html"},
    {title: "Data", link: "../Data/dataIndex.html"},
    {title: "About", link: "../About/aboutIndexPage.html"}
]

function displayUiNavElements(){
    let nav = document.getElementById("navigation");
    let ul = document.createElement("ul");
    ul.setAttribute("id", "listItem-Container");
    nav.appendChild(ul);


    for(let i = 0; i<uiNavElements.length; i++){
        const li = document.createElement("li");
        li.setAttribute("class","list-Item");
        const a = document.createElement("a");

        a.innerHTML = uiNavElements[i].title;
        a.href = uiNavElements[i].link;

        ul.appendChild(li);
        li.appendChild(a);

    }
}
document.addEventListener('DOMContentLoaded', displayUiNavElements());
