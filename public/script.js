// 🎬 HERO SLIDESHOW WITH PLAY FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
  const heroSlides = [
    {
      title: "Wednesday",
      description: "A sleuthing, supernaturally infused mystery charting Wednesday Addams’ years at Nevermore Academy.",
      image: "https://m.media-amazon.com/images/M/MV5BNzY3NmUxY2QtZDkyYS00YjFmLWIxNzctMmMwMGVmMzUwZGJiXkEyXkFqcGc@._V1_QL75_UX492_.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Stranger Things",
      description: "A love letter to the '80s classics that captivated a generation — supernatural forces and friendship collide.",
      image: "https://m.media-amazon.com/images/M/MV5BNmI0MmM3YmEtMTRkNy00MzU1LWFhN2YtYTJhZGNlMTk4MjYwXkEyXkFqcGc@._V1_QL75_UX658.5_.jpg",
      video: "https://www.w3schools.com/html/movie.mp4"
    },
    {
      title: "Money Heist",
      description: "Eight thieves take hostages in the Royal Mint of Spain, while a criminal mastermind manipulates the police.",
      image: "https://m.media-amazon.com/images/M/MV5BODMwZjBlNjctZDgwMC00YjZiLWFlMjItMzljM2MyMDA0MzE0XkEyXkFqcGc@._V1_QL75_UX492_.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    }

    
  ];

  let currentSlide = 0;
  const hero = document.querySelector('.hero');
  const titleEl = document.querySelector('.hero-title');
  const descEl = document.querySelector('.hero-description');
  const playBtn = document.querySelector('.btn-play');

  // Create "Now Playing" overlay (once)
  const nowPlaying = document.createElement('div');
  nowPlaying.className = 'now-playing';
  nowPlaying.innerHTML = `
    <div class="now-playing-content">
      <h2>Now Playing</h2>
      <video controls autoplay></video>
      <button class="close-now-playing">Close</button>
    </div>
  `;
  document.body.appendChild(nowPlaying);
  const videoEl = nowPlaying.querySelector('video');
  const closeBtn = nowPlaying.querySelector('.close-now-playing');
  nowPlaying.style.display = 'none';

  // Function to update hero slide
  function updateHero() {
    const slide = heroSlides[currentSlide];
    hero.style.background = `linear-gradient(to right, rgba(0,0,0,0.8), transparent), url('${slide.image}') center/cover no-repeat`;
    titleEl.textContent = slide.title;
    descEl.textContent = slide.description;
  }

  // Cycle slides every 6 seconds
  updateHero();
  setInterval(() => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    updateHero();
  }, 6000);

  // Play button opens relevant video
  playBtn.addEventListener('click', () => {
    const slide = heroSlides[currentSlide];
    videoEl.src = slide.video;
    nowPlaying.querySelector('h2').textContent = `Now Playing: ${slide.title}`;
    nowPlaying.style.display = 'flex';
    document.documentElement.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    nowPlaying.style.display = 'none';
    videoEl.pause();
    document.documentElement.style.overflow = '';
  });
});



// ===============================
// Session Expired Modal
// ===============================
(function () {
  // Create modal DOM dynamically
  const overlay = document.createElement('div');
  overlay.className = 'session-overlay';
  overlay.innerHTML = `
    <div class="session-modal" role="dialog" aria-modal="true" aria-labelledby="sessTitle">
      <button class="session-close-x" aria-label="Close">&times;</button>
      <h3 id="sessTitle">Session expired</h3>
      <p>Your session has expired. Please log in to continue.</p>
      <div class="session-actions">
        <button class="btn btn-login">Log in</button>
        <button class="btn btn-cancel">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const btnLogin = overlay.querySelector('.btn-login');
  const btnCancel = overlay.querySelector('.btn-cancel');
  const btnClose = overlay.querySelector('.session-close-x');

  // Modal functions
  function showSessionModal() {
    overlay.classList.add('show');
    document.documentElement.style.overflow = 'hidden';
    btnLogin.focus();
  }

  function hideSessionModal() {
    overlay.classList.remove('show');
    document.documentElement.style.overflow = '';
  }

  // Modal close handlers
  btnCancel.addEventListener('click', hideSessionModal);
  btnClose.addEventListener('click', hideSessionModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) hideSessionModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideSessionModal();
  });

  // Login button → Netflix login page
  btnLogin.addEventListener('click', () => {
    window.location.href = 'https://www.netflix.com/login';
  });

  // Intercept clicks and searches
  function interceptClicks() {
    // All nav links
    document.querySelectorAll('.nav-list a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        showSessionModal();
      });
    });

    // Search form
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
      searchForm.addEventListener('submit', e => {
        e.preventDefault();
        showSessionModal();
      });
    }

    // Play buttons (if any)
    document.querySelectorAll('.play-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        showSessionModal();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', interceptClicks);
  } else {
    interceptClicks();
  }
})();



const slides = [
  {
    title: "Stranger Things",
    description: "When a young boy disappears, a small town uncovers a mystery involving secret experiments and supernatural forces.",
    image: "https://m.media-amazon.com/images/M/MV5BOTEyZGU4MDQtMDE0ZC00MTlmLWE4YjctYjI5MWVhNWE4ZTllXkEyXkFqcGc@._V1_QL75_UX655.5_.jpg"  },
  {
    title: "Money Heist",
    description: "A criminal mastermind who goes by 'The Professor' plans the biggest heist in history.",
    image: "https://m.media-amazon.com/images/M/MV5BMmVmZGVkMTMtOWM0NC00MzJjLWI4NWYtOGZjYTM3ZDJlYzY3XkEyXkFqcGc@._V1_QL75_UX582_.jpg" },
  {
    title: "Wednesday",
    description: "A sleuthing, supernaturally infused mystery charting Wednesday Addams’ years at Nevermore Academy.",
    image: "https://m.media-amazon.com/images/M/MV5BYTcwNWU2MzktZmNiNS00MzNmLWE3NzgtNDY4YWE4ZTFlNzU3XkEyXkFqcGc@._V1_QL75_UX606_.jpg" }
];

let current = 0;
const hero = document.getElementById("hero");
const heroContent = document.getElementById("hero-content");

function showSlide(index) {
  const slide = slides[index];
  hero.style.backgroundImage = `url('${slide.image}')`;
  heroContent.innerHTML = `
    <h1>${slide.title}</h1>
    <p>${slide.description}</p>
    <button class="play-btn">▶ Play</button>
  `;
}

// show first slide
showSlide(current);

// auto slide every 5 seconds
setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

// 🎬 PLAY BUTTON FUNCTIONALITY
document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.querySelector('.play-btn'); // your Play button
  const nowPlaying = document.createElement('div');

  // Add a hidden "Now Playing" section dynamically
  nowPlaying.className = 'now-playing';
  nowPlaying.innerHTML = `
    <div class="now-playing-content">
      <h2>Now Playing: Stranger Things (Demo Trailer)</h2>
      <video controls autoplay>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <button class="close-now-playing">Close</button>
    </div>
  `;
  document.body.appendChild(nowPlaying);

  const closeBtn = nowPlaying.querySelector('.close-now-playing');

  // Hide by default
  nowPlaying.style.display = 'none';

  playBtn.addEventListener('click', () => {
    nowPlaying.style.display = 'flex';
    document.documentElement.style.overflow = 'hidden'; // prevent background scroll
  });

  closeBtn.addEventListener('click', () => {
    nowPlaying.style.display = 'none';
    document.documentElement.style.overflow = '';
  });
});  