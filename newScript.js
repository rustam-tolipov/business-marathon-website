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
let numv = 2;

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

const data = [
  {
    img: 'img/speakers/Hasan-Mamasaidov.png',
    name: 'Hasan Mamasaidov',
    rule: 'Founder of "Dekos.uz',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'img/speakers/Hikmat-Abdurahmonov.jpeg',
    name: 'Hikmat Abdurahmonov',
    rule: 'Founder of "HM Partners, Technoplaza, GroundZero"',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'img/speakers/Muhammad-Ali-Eshounqulov.jpeg',
    name: 'Muhammad Ali Eshonqulov',
    rule: 'International-class economist, business coach, founder of the Patrons League.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'img/speakers/Feruzbek-Aliev.jpeg',
    name: 'Feruzbek Aliev',
    rule: 'Founder of "Asaxiy.uz',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'img/speakers/Temurbek-Adhamov.jpeg',
    name: 'Temurbek Adhamov',
    rule: 'Founder of "Najot Talim"',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
  {
    img: 'img/speakers/Shahzod-Bahodirov.jpeg',
    name: 'Shahzod Bahodirov',
    rule: 'Founder of "Thompson School"',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae molestias cumque totam aliquam mollitia, eligendi distinctio',
  },
];

function changeCard(num) {
  const img = document.querySelectorAll('#img')[num];
  const nameID = document.querySelectorAll('#name')[num];
  const rule = document.querySelectorAll('#rule')[num];
  const info = document.querySelectorAll('#info')[num];
  img.src = data[num].img;

  nameID.innerHTML = data[num].name;
  img.src = data[num].img;
  rule.innerHTML = data[num].rule;
  info.innerHTML = data[num].info;
}

function smth() {
  if (window.innerWidth < 768) {
    // document.querySelector('more').addEventListener('click', (num = 6));

    for (let i = 0; i < numv; i += 1) {
      const speaker = `
            <div class="speaker">
            <img id="img" src="img/speakers/Hasan-Mamasaidov.png" alt="speaker" class="speaker-img" />
            <div class="speaker-text">
            <h2 id="name" class="speaker-name"></h2>
              <p id="rule" class="speaker-job"></p>
              <div class="line"></div>
              <p id="info" class="speaker-info"></p>
            </div>
          </div>
`;

      document.getElementById('speaker-card').innerHTML += speaker;

      changeCard(i);
    }
  } else if (window.innerWidth > 768) {
    for (let i = 0; i < data.length; i += 1) {
      const speaker = `
            <div class="speaker">
            <img id="img" src="img/speakers/Hasan-Mamasaidov.png" alt="speaker" class="speaker-img" />
            <div class="speaker-text">
            <h2 id="name" class="speaker-name"></h2>
              <p id="rule" class="speaker-job"></p>
              <div class="line"></div>
              <p id="info" class="speaker-info"></p>
            </div>
          </div>
`;

      document.getElementById('speaker-card').innerHTML += speaker;

      changeCard(i);
    }
  }
}

smth();
// MOBILE MORE OPTION ///////////

const btnMore = document.querySelector('.button-more');
const btnLess = document.querySelector('.button-less');
btnLess.classList.add('hidden');

btnMore.addEventListener('click', () => {
  document.getElementById('speaker-card').innerHTML = '';
  // const url = 'https://bit.ly/IqT6zt';
  // window.open(url, '_blank').focus();
  btnMore.classList.add('hidden');
  btnLess.classList.remove('hidden');
  numv = 6;
  smth();
});

btnLess.addEventListener('click', () => {
  document.getElementById('speaker-card').innerHTML = '';
  // const url = 'https://bit.ly/IqT6zt';
  // window.open(url, '_blank').focus();
  btnLess.classList.add('hidden');
  btnMore.classList.remove('hidden');
  numv = 2;
  smth();
});
