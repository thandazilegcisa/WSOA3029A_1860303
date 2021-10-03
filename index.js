const uiNavElements = [
    {title: "Home", link: "/index.html"},
    {title: "Blogs", link: "/Blogs/blogIndexPage.html"},
    {title: "Data", link: "/Data/dataIndex.html"},
    {title: "About", link: "/About/aboutIndexPage.html"}
]

function displayUiNavElements(){

    let universal = window.location.pathname === "/WSOA3092A_1860303/" ? "./" : "../";

    let nav = document.getElementById("navigation");
    let ul = document.createElement("ul");
    ul.setAttribute("id", "listItem-Container");
    nav.appendChild(ul);


    for(let i = 0; i<uiNavElements.length; i++){
        const li = document.createElement("li");
        li.setAttribute("class","list-Item");
        const a = document.createElement("a");

        a.innerHTML = uiNavElements[i].title;
        a.href = universal.uiNavElements[i].link;

        ul.appendChild(li);
        li.appendChild(a);

    }
}
document.addEventListener('DOMContentLoaded', function (e){
    displayUiNavElements();
});


