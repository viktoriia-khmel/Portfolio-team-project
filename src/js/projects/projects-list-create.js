import projectsMarkup from './project-markup';

const projectsListCreate = async (projects, projectsContainer) => {
  const strMarkup = projectsMarkup(projects);
  projectsContainer.innerHTML = '';
  projectsContainer.insertAdjacentHTML('beforeend', strMarkup);
};

export default projectsListCreate;