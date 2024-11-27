let projectName = document.getElementById('projectName')
let dateProject = document.getElementById('projectDeadline')
let projectChef = document.getElementById('projectChef')
let status; 


let dataProjects = [
  { title : projectName,
    date : dateProject,
    chef : projectChef
  }
]

console.log(dataProjects);

let projetJson = JSON.stringify(dataProjects)

localStorage.setItem("Projets", projetJson);

