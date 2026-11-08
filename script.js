// Dados dos Jogos do Carrossel Hero
const gamesData = [
  {
    badge: "NOVA EXPANSÃO",
    title: "Diablo IV: Vessel of Hatred",
    description: "Descubra o novo capítulo de Santuário. Domine a nova classe Natispírito e enfrente as trevas em Nahantu.",
    btnText: "Garanta já na pré-venda",
    bgUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80"
  },
  {
    badge: "EXPANSÃO DISPONÍVEL",
    title: "World of Warcraft: The War Within",
    description: "Descenda às profundezas de Azeroth e proteja o mundo de forças sombrias nas trevas do subterrâneo.",
    btnText: "Jogue Agora",
    bgUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=80"
  },
  {
    badge: "NOVA TEMPORADA",
    title: "Overwatch 2: Heróis Revelados",
    description: "Experimente novas habilidades, novos mapas e o novo Passe de Batalha repleto de recompensas lendárias.",
    btnText: "Jogue de Graça",
    bgUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1920&q=80"
  },
  {
    badge: "NOVA MINI-CONJUNTO",
    title: "Hearthstone: Oficina do Genzinho",
    description: "Explore criações divertidas e mecânicas malucas com as novas 38 cards exclusivas já disponíveis.",
    btnText: "Baixar Grátis",
    bgUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=1920&q=80"
  }
];

// Elementos do DOM
const heroBg = document.getElementById('hero-bg');
const heroBadge = document.getElementById('hero-badge');
const heroTitle = document.getElementById('hero-title');
const heroDescription = document.getElementById('hero-description');
const heroBtn = document.getElementById('hero-btn');
const thumbs = document.querySelectorAll('.thumb');

let currentIndex = 0;
let carouselInterval;

// Função para atualizar o banner Hero
function updateHero(index) {
  const game = gamesData[index];
  
  // Efeito suave de transição
  heroBg.style.opacity = '0.3';
  
  setTimeout(() => {
    heroBg.style.backgroundImage = `linear-gradient(to right, rgba(11, 15, 25, 0.95) 20%, rgba(11, 15, 25, 0.3) 60%, rgba(11, 15, 25, 0.95)), url('${game.bgUrl}')`;
    heroBadge.textContent = game.badge;
    heroTitle.textContent = game.title;
    heroDescription.textContent = game.description;
    heroBtn.textContent = game.btnText;
    heroBg.style.opacity = '1';
  }, 200);

  // Atualiza miniaturas ativas
  thumbs.forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });

  currentIndex = index;
}

// Inicia rotação automática
function startCarousel() {
  carouselInterval = setInterval(() => {
    let nextIndex = (currentIndex + 1) % gamesData.length;
    updateHero(nextIndex);
  }, 6000);
}

// Reinicia rotação automática
function resetCarouselTimer() {
  clearInterval(carouselInterval);
  startCarousel();
}

// Event Listeners nos Thumbnails
thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    const index = parseInt(thumb.getAttribute('data-index'));
    updateHero(index);
    resetCarouselTimer();
  });
});

// Inicialização
startCarousel();