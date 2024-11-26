let formNewProjet = document.querySelector('#formNewProjet');

formNewProjet.addEventListener('submit', function(e) {
  e.preventDefault();

  let projectName = document.querySelector('#projectName').value;
  let projectDescription = document.querySelector('#projectDescription').value;
  let projectDeadline = document.querySelector('#projectDeadline').value;
  let projectChef = document.querySelector('#projectChef').value;

  if (!projectName || !projectDescription || !projectDeadline || !projectChef) {
    alert('Veuillez remplir tous les champs du formulaire de création de projet');
    return;
  }

  let deadlineData = new Date(projectDeadline);
  let currentDate = new Date();
  let status;
  if (deadlineData > currentDate) {
    status = "vert";
  } else {
    status = "orange"; //ou rouge faut voir
  }

  let project = {
    name: projectName,
    description: projectDescription,
    deadline: projectDeadline,
    chef: projectChef,
    status: status, //voir
  };

  let projects = JSON.parse(localStorage.getItem('projects')) || [];
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
  console.log('Projects saved:', projects);

  window.location.href = '../../pages_pro/admin/gestion_projets_admin.html';
});
