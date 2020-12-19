//object array to hold project info
var projectObjArr = [
    {
        source: "./assets/images/projects/Image 12-4-20 at 2.49 PM.jpeg",
        title: "Movie App",
        code: "HTML/CSS/UIKit/JavaScript/Youtube-API/OMDB-API",
        link: "https://nickmay9.github.io/MovieApp-TeamProject1/"
    },
    {
        source: "./assets/images/projects/Image 12-4-20 at 3.01 PM.jpeg",
        title: "What's the Weather",
        code: "HTML/CSS/JQuery",
        link: "https://nickmay9.github.io/weatherApp-challenge6/"
    },
    {
        source: "./assets/images/projects/Image 10-23-20 at 10.24 AM.jpeg",
        title: "Run Buddy",
        code: "HTML/CSS",
        link: ""
    },
    {
        source: "./assets/images/projects/project-3.jpeg",
        title: "Project 4",
        code: "HTML/CSS",
        link: ""
    },
    {
        source: "./assets/images/projects/project-4.jpeg",
        title: "Project 5",
        code: "HTML/CSS",
        link: ""
    },
    {
        source: "./assets/images/projects/project-5.jpeg",
        title: "Project 6",
        code: "HTML/CSS",
        link: ""
    }
];

var projectContainer = document.querySelector("#projects");

for (var i = 0; i<projectObjArr.length; i++){
    if(i%2===0){
        //create a new row every two elements
        var divRowEl = document.createElement("div");
        divRowEl.classList = "row justify-content-center";
    }
    var divColEl = document.createElement("div");
    divColEl.classList = "col-4 img-container m-0 p-0";

    var imgEl = document.createElement("img");
    imgEl.src = projectObjArr[i].source;
    divColEl.appendChild(imgEl);

    var divTextEl = document.createElement("div");
    divTextEl.classList = "middle";

    var header = document.createElement("h3");
    header.textContent = projectObjArr[i].title;

    var codeUsed = document.createElement("p");
    codeUsed.textContent = projectObjArr[i].code;

    var buttonEl = document.createElement("button");
    buttonEl.innerHTML = "<a href='" + projectObjArr[i].link + "' target='blank'>";
    buttonEl.textContent = "Learn More";


    divTextEl.append(header, codeUsed, buttonEl);
    divColEl.appendChild(divTextEl);

    divRowEl.appendChild(divColEl);
    projectContainer.appendChild(divRowEl);
}

