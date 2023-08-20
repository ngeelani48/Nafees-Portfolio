const array = [
  {
    id: '1',
    name: 'Ride-Ease',
    shortdescription: 'RideEase is a car booking website that allows users to easily book a ride and travel to their desired destinations. User can reserve a car from the available cars by providing the date and city. RideEase provides a seamless and reliable car booking experience.',
    longdescription: 'RideEase revolutionizes your travel with effortless car booking. Choose from a diverse range of vehicles, tailored to your needs and easily reservable by specifying your travel date and city. Count on RideEase for punctuality and a stress-free experience, supported by round-the-clock customer assistance. Your journey starts with us  book now and experience reliable, seamless, and smart travel with RideEase. Say goodbye to uncertainties and delays, and say hello to a trustworthy travel companion.',
    image: './images/rideease_21.png',
    tech: ['Ruby On Rails', 'React', 'PostgreSQL'],
    liveproject: 'https://rideease.onrender.com/',
    sourcelink: 'https://github.com/ngeelani48/rideease-backend',
  },
  {
    id: '2',
    name: 'Budget Manager<br> Manage Expense',
    shortdescription: 'The Budget Manager a mobile web application where user can manage his/her budget: user have a list of transactions associated with a category, so that user can see how much money he/she spent and on what.',
    longdescription: 'The Budget Manager is your go-to mobile web app for effective budget management. With an intuitive interface, you can effortlessly track your finances by categorizing your transactions. This allows you to gain valuable insights into your spending habits, showing you exactly where your money is going. Whether its daily expenses or special purchases, the Budget Manager empowers you to make informed financial decisions',
    image: './images/collage.png',
    tech: ['Ruby', 'Rails', 'CSS'],
    liveproject: 'https://budget-manager-my4q.onrender.com/',
    sourcelink: 'https://github.com/ngeelani48/budget_manager',
  },
  {
    id: '3',
    name: 'Forex Exchange<br> Exchange rates',
    shortdescription: 'This app consumes the Awesome API. It usues the real time data for some of the exchange rates from API and provides details about the required exchange. And this App is based on the design by Nelson Sakwa on Behance.',
    longdescription: 'Harnessing the power of the Awesome API, this app offers real-time exchange rate data, ensuring accurate and up-to-the-minute currency insights. Seamlessly integrating this data, the app furnishes essential exchange details on demand. Inspired by Nelson Sakwas captivating Behance design, the app combines functionality with aesthetic appeal, providing a user experience thats both informative and visually pleasing. Experience the synergy of real-time information and innovative design all in one app.',
    image: './images/forex.png',
    tech: ['React & Redux', 'JavaScript', 'CSS'],
    liveproject: 'https://forex-exchange.onrender.com/',
    sourcelink: 'https://github.com/ngeelani48/Stock-Metrics-WebApp',
  },
  {
    id: '4',
    name: 'React Bookstore',
    shortdescription: 'Bookstore is a dynamic website that seamlessly interacts with an external Bookstore API, serving as your backend. With its intuitive interface, you can effortlessly showcase, add, or remove selected books.',
    longdescription: 'Bookstore is a dynamic website that seamlessly interacts with an external Bookstore API, serving as your backend. With its intuitive interface, you can effortlessly showcase, add, or remove selected books. Whether you are a book enthusiast or managing an online store, this platform offers a user-friendly experience for book-related operations. Explore the power of integration as you curate your virtual bookstore with ease, all while harnessing the capabilities of the external Bookstore API as your reliable backend support.',
    image: './images/bookstore.png',
    tech: ['React & Redux', 'JavaScript', 'CSS'],
    liveproject: 'https://react-bookstore-7gnl.onrender.com/',
    sourcelink: 'https://github.com/ngeelani48/react-bookstore',
  },
  {
    id: '5',
    name: '<br> Roof-Top-Cafe',
    shortdescription: 'RoofTop-Cafe is a Cafe website design where users can see details about the cafe and see what dishes are offered. it has consisted of two pages Main and the About page and it is responsive about the screen sizes.',
    longdescription: 'A captivating cafe website design that invites users to immerse themselves in the cafe\'s ambiance and delectable offerings. With an elegant Main page and an informative About page, visitors can seamlessly explore details about the cafe and its menu. Designed to adapt gracefully to various screen sizes, [RoofTop-Cafe] ensures a responsive experience, whether accessed from a desktop, tablet, or smartphone. Immerse yourself in the world of this cafe, where design meets culinary delight.',
    image: './images/rooftop.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveproject: 'https://ngeelani48.github.io/First-Capstone-Project-Rooftop-Cafe/',
    sourcelink: 'https://github.com/ngeelani48/First-Capstone-Project-Rooftop-Cafe',
  },
  {
    id: '6',
    name: 'Math Magicians',
    shortdescription: 'Math Magicians is a React-based single-page app (SPA) designed for skillful practice. Rooted in the concept of a calculator application, it goes beyond mere arithmetic by seamlessly integrating inspirational quotes from celebrated educationists.',
    longdescription: 'Dive into the world of learning with our innovative single-page app (SPA), meticulously crafted to enhance React skills. Inspired by a calculator application, Math Magicians offers hands-on practice while also serving as a platform for personal growth. Beyond calculations, the app enriches your experience with insightful quotes from renowned educationists, fostering inspiration with every interaction. Elevate your learning journey with this dynamic SPA that combines coding proficiency and wisdom from the education world.',
    image: './images/mathmagician.png',
    tech: ['React', 'JavaScript', 'CSS'],
    liveproject: 'https://math-magician-4xmk.onrender.com/',
    sourcelink: 'https://github.com/ngeelani48/math-magicians',
  },
  {
    id: '7',
    name: 'LeaderBoard',
    shortdescription: 'This is a website that displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API(Application Programming Interface) service.',
    longdescription: 'Introducing LeaderBoard: Your destination for tracking player scores in one centralized hub. This website not only showcases scores from diverse players but also offers you the opportunity to submit your own. Behind the scenes, an external Leaderboard API ensures that all data remains secure and preserved. Delve into the possibilities of the Leaderboard API by exploring its functionalities outlined in this link: API Guide. Experience the power of seamless score management and game creation with LeaderBoard.',
    image: './images/leaderboard.png',
    tech: ['Webpack', 'JavaScript', 'HTML'],
    liveproject: 'https://ngeelani48.github.io/Leaderboard/dist/',
    sourcelink: 'https://github.com/ngeelani48/Leaderboard',
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
