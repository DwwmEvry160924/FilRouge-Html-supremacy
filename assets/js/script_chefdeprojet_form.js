let projectName = document.getElementById('projectName').value;
let dateProject = document.getElementById('projectDeadline').value;
let projectChef = document.getElementById('projectChef').value;
let status; 


let dataProjects = [
  { title : projectName,
    date : dateProject,
    chef : projectChef
  }
]




formNewProjet.addEventListener('submit', function(e) {
  e.preventDefault();
  
  let projectName = document.getElementById('projectName').value;
  let heureDebut = document.getElementById('projectDebut').value;
  let dateProject = document.getElementById('projectDeadline').value;
  let projectChef = document.getElementById('projectChef').value;
  let status; 


  let dataProjects = 
    { 
      title : projectName,
      dateDebut: heureDebut,
      dateFin : dateProject,
      chef : projectChef,
      status : 'enCours'
    }

  let deadlineData = new Date(dateProject);
  let currentDate = new Date();

  console.log(dataProjects.dateDebut);
  let [heure,minute]  = heureDebut.split(':');

  console.log(heure);


  console.log(deadlineData.getHours());
  console.log(deadlineData.getDay());
  console.log(typeof deadlineData)

  if (deadlineData > currentDate) {
    status = "vert";
  } else {
    status = "jaune"; //ou rouge faut voir
  }

  console.log(dataProjects);

  let projects = JSON.parse(localStorage.getItem('projects')) || [];
  projects.push(dataProjects); 

  localStorage.setItem('projects', JSON.stringify(projects));
  console.log('Projects saved:', projects);

  window.location.href = '../../pages_pro/chef_projet/index_chef_projet.html';

  console.log(typeof dateProject);


})



