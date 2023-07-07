const array = [
  {
    id: '1',
    name: 'Awesome Books',
    shortdescription: 'Awesome Books is a book list application which stores our favourite books. User and add and remove books to the list and all the data will be stores in their local device in localStorage.',
    longdescription: 'Awesome Books is a book list application that stores our favorite books. Users add and remove books to the list and all the data will be stored in their local device in localStorage.This Project was made during my study at Microverse, Which is an online software development school. This project is made using ES6 modules which can be said an advancement to using JavaScript also this project can be helpful for new learners and they can refer to and learn about this new technique used in it.',
    image: './images/Awesomebooks.png',
    tech: ['CSS', 'HTML', 'JavaScript', 'ES6 modules'],
    liveproject: 'https://ngeelani48.github.io/Awsome-books-ES6/',
    sourcelink: 'https://github.com/ngeelani48/Awsome-books-ES6',
  },
  {
    id: '2',
    name: 'Budget Manager<br>Manage your expenses',
    shortdescription: 'The Budget Manager a mobile web application where user can manage his/her budget: user have a list of transactions associated with a category, so that user can see how much money he/she spent and on what.',
    longdescription: 'The Budget Manager is a mobile web application that helps users manage their budget effectively. With this app, users can easily track their expenses and understand how much money they are spending and on what. It provides a simple and intuitive interface for adding transactions and categorizing them based on different expense categories. Overall, the Budget Manager simplifies budget management and empowers users to take control of their finances.',
    image: './images/budget-manager.png',
    tech: ['Ruby', 'bootstrap', 'Ruby on Rails'],
    liveproject: 'https://budget-manager-my4q.onrender.com/',
    sourcelink: 'https://github.com/ngeelani48/budget-manager',
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
    image: './images/project2.png',
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
              <div class="details-cross" onclick="closepopup()"><img src="./images/blackcross.png" alt=""></div>
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
              <li><button> <a href="${array[j].liveproject}" target="_blank" >See Live <img src="./images/icon-seelive.png" alt="see live icon"></a></button></li>
              <li><button><a href="${array[j].sourcelink}" target="_blank">See Source <img src="./images/github.png" alt="github icon"></a></button></li>
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
