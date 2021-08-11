// Hamburger Button start //////////////////
const overlay = document.querySelector('.options-menu');
const btnCloseMenu = document.querySelector('.exit-button');
const btnOpenMenu = document.querySelector('.hamburger');
const btnOpenMenuAbout = document.querySelector('.hamburger-about');
const options = document.querySelectorAll('.link');
const hamburger = document.querySelectorAll('.open');
const openAbout = document.querySelector('.about-link');
const menuOpenAbout = document.querySelector('.menu-open-about');
const menuOpenHome = document.querySelector('.menu-open-home');
const openProgram = document.querySelector('.program-link');
const openMain = document.querySelector('.home-link');
const openSponsor = document.querySelector('.partner-link');
const home = document.getElementById('home');
const about = document.querySelector('.about');

function openMenu() {
  overlay.classList.remove('hidden');
  btnOpenMenu.classList.add('hidden');
  btnOpenMenuAbout.classList.add('hidden');
}

function closeMenu() {
  overlay.classList.add('hidden');
  btnOpenMenu.classList.remove('hidden');
  btnOpenMenuAbout.classList.remove('hidden');
}

function openAboutSec() {
  about.classList.remove('hidden');
  home.classList.add('hidden');
}

function openHome() {
  about.classList.add('hidden');
  home.classList.remove('hidden');
}

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);
openAbout.addEventListener('click', openAboutSec);
menuOpenAbout.addEventListener('click', openAboutSec);
menuOpenHome.addEventListener('click', openHome);
openProgram.addEventListener('click', openHome);
openMain.addEventListener('click', openHome);
openSponsor.addEventListener('click', openHome);

for (let i = 0; i < hamburger.length; i += 1) {
  hamburger[i].addEventListener('click', openMenu);
}

for (let i = 0; i < options.length; i += 1) {
  options[i].addEventListener('click', closeMenu);
}

// Hamburger Button end //////////////////

const data = {
  speaker1: {
    img: 'img/speakers/Hasan-Mamasaidov.png',
    name: 'Hasanfdsa Mamasaidov',
    role: 'Founder of "Dekos.uz',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },

  speaker2: {
    img: 'img/speakers/Hasan-Mamasaidov.png',
    name: 'Hasan Mamasaidov',
    role: 'Founder of "Dekos.uz',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },

  speaker3: {
    img: 'img/speakers/Hasan-Mamasaidov.png',
    name: 'Hasan Mamasaidov',
    role: 'Founder of "Dekos.uz',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },

  speaker4: {
    img: 'img/speakers/Hasan-Mamasaidov.png',
    name: 'Hasan Mamasaidov',
    role: 'Founder of "Dekos.uz',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },

  speaker5: {
    img: 'img/speakers/Hasan-Mamasaidov.png',
    name: 'Hasan Mamasaidov',
    role: 'Founder of "Dekos.uz',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },

  speaker6: {
    img: 'img/speakers/Hasan-Mamasaidov.png',
    name: 'Hasan Mamasaidov',
    role: 'Founder of "Dekos.uz',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
};

// const nameID = document.getElementById('name1');
const img = document.getElementById('img');
const nameID = document.getElementById('name');
const rule = document.getElementById('rule');
const info = document.getElementById('info');
// const speaker = data[`speaker${order}`];
// img.src = data.speaker.img;
// rule.innerHTML = data.speaker.rule;
// info.innerHTML = data.speaker.info;

function changePopup(order) {
  const speaker = data[`speaker${order}`];
  img.src = speaker.img;
  nameID.innerHTML = speaker.name;
  rule.innerHTML = speaker.rule;
  info.innerHTML = speaker.info;
}



nameID.innerHTML = 'Paragraph changed!';
