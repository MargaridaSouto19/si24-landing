const boopProject = {
  logo: 'images/boop-logo.svg',
  about: 'Boop is a Web app designed for people who wish to adopt or need help finding a lost pet in order to Simplify their process. It was developed by 2 designers and 4 developers.',
  year: '2022',
  technologies: ['Figma', 'Ruby on Rails', 'React + TypeScript'],
  platforms: ['Web', 'Mobile']
}

const hungryMatesProject = {
  logo: 'images/hungryMates-logo.svg',
  about: 'HungryMates is a Web APP designed to help groups of people decide and plan their meals based on their preferences and availability. It was developed by 2 designers and 4 developers.',
  year: '2023',
  technologies: ['Figma', 'Docker', 'Ruby on Rails', 'Postgres', 'React + TypeScript'],
  platforms: ['Web', 'Mobile']
}

const dialog = document.querySelector('.project-details');

const logo = document.querySelector('#project-logo');
const about = document.querySelector('#project-about');
const year = document.querySelector('#project-year');
const technologies = document.querySelector('#project-technologies');
const platforms = document.querySelector('#project-platforms');

const handleDialog = (projectId) => {

  dialog.style.display = 'flex';

  let selectedProject = null
  if (projectId === 'boop') {
    selectedProject = boopProject
  }
  else if (projectId === 'hungryMates') {
    selectedProject = hungryMatesProject
  }

  logo.src = selectedProject.logo;
  about.innerHTML = selectedProject.about;
  year.innerHTML = selectedProject.year;

  for (i = 0; i < selectedProject.technologies.length; i++) {
    const li = document.createElement('li')
    li.innerHTML = selectedProject.technologies[i];
    technologies.appendChild(li)
  }

  for (i = 0; i < selectedProject.platforms.length; i++) {
    const li = document.createElement('li')
    li.innerHTML = selectedProject.platforms[i];
    platforms.appendChild(li)
  }
}

const handleCloseDialog = () => {
  dialog.style.display = 'none'

  logo.src = '';
  about.innerHTML = '';
  year.innerHTML = '';
  technologies.innerHTML = '';
  platforms.innerHTML = '';
}