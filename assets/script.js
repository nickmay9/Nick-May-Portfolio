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
        source: "./assets/images/projects/project-3.jpeg",
        title: "ReadMe Generator",
        code: "NodeJS",
        link: "https://github.com/nickmay9/proReadme-challenge9"
    },
    {
        source: "./assets/images/projects/project-4.jpeg",
        title: "Portfolio Generator",
        code: "NodeJS",
        link: "https://github.com/nickmay9/portfolio-generator"
    },
    {
        source: "./assets/images/projects/project-4.jpeg",
        title: "Taskmaster Pro",
        code: "HTML/CSS/Javascript",
        link: "https://nickmay9.github.io/taskmaster-pro/"
    },
    {
        source: "./assets/images/projects/project-5.jpeg",
        title: "Work Day Scheduler",
        code: "HTML/CSS/Javascript",
        link: "https://nickmay9.github.io/WorkDayScheduler-Challenge5/"
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
    buttonEl.textContent = "Learn More";
    buttonEl.setAttribute("project", i);


    divTextEl.append(header, codeUsed, buttonEl);
    divColEl.appendChild(divTextEl);

    divRowEl.appendChild(divColEl);
    projectContainer.appendChild(divRowEl);
}

var siteButtonHandler = event => {
    var project = event.target.getAttribute("project");
    if (project){
        window.open(projectObjArr[project].link);
    }
}

projectContainer.addEventListener("click", siteButtonHandler);

