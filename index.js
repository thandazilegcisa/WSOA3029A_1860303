let linkConnect = "/"

if(!window.location.host.replace(/(localhost|127\.0\.0\.1)(:\d+)?/i, "")){
    linkConnect ="/";
}else{
    linkConnect ="/WSOA3029A_1860303/"
}

const uiNavElements = [
    {title: "Home", link: linkConnect + "index.html"},
    {title: "Blogs", link: linkConnect + "Blogs/blogIndexPage.html"},
    {title: "Data", link: linkConnect + "Data/dataIndex.html"},
    {title: "About", link: linkConnect + "About/aboutIndexPage.html"}
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
document.addEventListener('DOMContentLoaded', function (e){
    displayUiNavElements();
});


