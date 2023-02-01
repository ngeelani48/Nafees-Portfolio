const array = [
  {
    id: '1',
    name: 'Multi-Post-Stories',
    shortdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/Project 1.png',
    tech: ['css', 'html', 'bootstrap', 'Ruby'],
    liveproject: 'https://ngeelani48.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/ngeelani48/My-Portfolio',
  },
  {
    id: '2',
    name: 'Profesional Art<br> Printing Data',
    shortdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/Project2.png',
    tech: ['html', 'bootstrap', 'Ruby'],
    liveproject: 'https://ngeelani48.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/ngeelani48/My-Portfolio',
  },
  {
    id: '3',
    name: 'Data Dashboard<br> Healthcare',
    shortdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/desktop-project3.png',
    tech: ['html', 'bootstrap', 'Ruby'],
    liveproject: 'https://ngeelani48.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/ngeelani48/My-Portfolio',
  },
  {
    id: '4',
    name: 'Website Protfolio',
    shortdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/desktop-project4.png',
    tech: ['html', 'bootstrap', 'Ruby'],
    liveproject: 'https://ngeelani48.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/ngeelani48/My-Portfolio',
  },
  {
    id: '5',
    name: 'Profesional Art<br> Printing Data',
    shortdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/Project2.png',
    tech: ['html', 'bootstrap', 'Ruby'],
    liveproject: 'https://ngeelani48.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/ngeelani48/My-Portfolio',
  },
  {
    id: '6',
    name: 'Data Dashboard<br> Healthcare',
    shortdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/desktop-project3.png',
    tech: ['html', 'bootstrap', 'Ruby'],
    liveproject: 'https://ngeelani48.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/ngeelani48/My-Portfolio',
  },
  {
    id: '7',
    name: 'Website Portfolio',
    shortdescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    longdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: './images/desktop-project4.png',
    tech: ['html', 'bootstrap', 'Ruby'],
    liveproject: 'https://ngeelani48.github.io/My-Portfolio/',
    sourcelink: 'https://github.com/ngeelani48/My-Portfolio',
  },
];
const project = document.querySelector('#works-section');
const details = document.querySelector('.popup-details');

function closepopup() {
  details.style.visibility = 'hidden';
}

function popup(id) {
  details.style.visibility = 'visible';
  for (let j = 0; j < array.length; j += 1) {
    if (id === array[j].id) {
      details.innerHTML = `<div class="project-details">
              <h2 class="details-title">${array[j].name}</h2>
              <div class="details-cross" onclick="closepopup()"><img src="/images/blackcross.png" alt=""></div>
              <ul class="details-tech">
                  <li><button>${array[j].tech[0]}</button></li>
                  <li><button>${array[j].tech[1]}</button></li>
                  <li><button>${array[j].tech[2]}</button></li>
              </ul>
              <div class="details-content">
              <img class="details-image" src="${array[j].image}" alt="Project image">
              <div class="details-text">
              <p class="details-description">${array[j].longdescription}</p>
              <ul class="details-button">
              <li><button href=${array[j].liveproject}>See Live <img src="/images/icon-seelive.png" alt="see live icon"></button></li>
              <li><button href=${array[j].sourcelink}>See Source <img src="/images/github.png" alt="github icon"></button></li>
              </ul>
              </div>
              </div>
          </div>`;
    }
  }
}
popup();
closepopup();
project.innerHTML = `<div class="project1">
<div class="project1-picture">
    <img src="${array[0].image}" alt="project1 image">
</div>
<div class="project1-content">
<h1 class="project1-title">${array[0].name}</h1>
<p class="project1-description">${array[0].shortdescription}</p>
    <ul class="project1-tech">
        <li><button>${array[0].tech[0]}</button></li>
        <li><button>${array[0].tech[1]}</button></li>
        <li><button>${array[0].tech[2]}</button></li>
        <li><button>${array[0].tech[3]}</button></li>
    </ul>
    <button id="${array[0].id}" onclick="popup(this.id)" class="project1-button">See Project</button>
</div>
</div>`;
for (let i = 1; i < array.length; i += 1) {
  project.innerHTML += `<div class="project2" style="background-image: url('${array[i].image}'); background-repeat: no-repeat; background-size: cover;">
    <h1 class="project2-title">${array[i].name}</h1>
    <p class="project2-description">${array[i].shortdescription}</p>
        <ul class="project2-tech">
            <li><button>${array[i].tech[0]}</button></li>
            <li><button>${array[i].tech[1]}</button></li>
            <li><button>${array[i].tech[2]}</button></li>
        </ul>
        <button id="${array[i].id}" onclick="popup(this.id)" class="project2-button">See Project</button>  
</div>`;
}
