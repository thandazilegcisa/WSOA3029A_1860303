const uiNavElements = [
    {title: "Home", link: "/WSOA3092A_1860303/index.html"},
    {title: "Blogs", link: "/WSOA3092A_1860303/Blogs/blogIndexPage.html"},
    {title: "Data", link: "/WSOA3092A_1860303/Data/dataIndex.html"},
    {title: "About", link: "/WSOA3092A_1860303/About/aboutIndexPage.html"}
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


