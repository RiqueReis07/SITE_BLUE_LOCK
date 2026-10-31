function photoSlotHTML(photoUrl, alt){
  if (photoUrl) {
    return `<img src="${photoUrl}" alt="${alt}">`;
  }
  return `<span class="photo-icon"></span><span class="photo-text">Foto</span>`;
}

/* ======================================================
   DADOS
====================================================== */
const POS = {
  gk:   {left: 6,  },
  def4: [15, 38, 62, 85],
  def3: [20, 50, 80],
  mid45:{left:45},
  mid58:{left:58},
  mid38:{left:38},
  att80:{left:80},
  att82:{left:82},
};

const PLAYERS = {
  gagamaru: {name:"Gin Gagamaru", role:"Goleiro", initials:"GG", photo:"fotos/gagamaru.jpg", desc:"Reflexos fora do comum e uma leitura de jogo que o torna quase imbatível dentro da própria área."},
  otoya:    {name:"Eita Otoya", role:"Ponta Direita", initials:"EO", photo:"fotos/otoya.jpg", desc:"Ala rápido e habilidoso, usa a velocidade para desequilibrar a marcação e chegar à linha de fundo."},
  chigiri:  {name:"Hyoma Chigiri", role:"Lateral Direito", initials:"HC", photo:"fotos/chigiri.jpg", desc:"Velocidade explosiva que vira o jogo em poucos segundos pelas beiradas do campo."},
  kunigami: {name:"Rensuke Kunigami", role:"Atacante / Ponta Esquerda", initials:"RK", photo:"fotos/kunigami.jpg", desc:"Força física e um chute de extrema potência — o tipo de jogador que puxa o time no braço."},
  reo:      {name:"Reo Mikage", role:"Meio-campista", initials:"RM", photo:"fotos/reo.jpg", desc:"Visão de jogo refinada, sempre buscando o parceiro ideal para construir a jogada."},
  isagi:    {name:"Yoichi Isagi", role:"Meio-campista Ofensivo", initials:"YI", photo:"fotos/isagi.jpg", desc:"Enxerga o campo como um tabuleiro e cria espaços onde ninguém mais vê."},
  bachira:  {name:"Meguru Bachira", role:"Lateral / Meia Esquerdo", initials:"MB", photo:"fotos/bachira.jpg", desc:"Dribles imprevisíveis guiados puramente pelo instinto e pela liberdade de jogar."},
  nagi:     {name:"Seishiro Nagi", role:"Meio-campista Ofensivo", initials:"SN", photo:"fotos/nagi.jpg", desc:"Talento natural que resolve qualquer jogada com o mínimo de esforço aparente."},
  shidou:   {name:"Ryusei Shidou", role:"Meia-Atacante", initials:"RS", photo:"fotos/shidou.jpg", desc:"Joga no limite do caos, tentando o inesperado a cada toque na bola."},
  barou:   {name:"Barou Shouei", role:"Atacante", initials:"MK", photo:"fotos/barou.jpg", desc:"Egoísmo declarado: acredita que toda bola deveria passar pelos seus pés antes do gol."},
  rin:      {name:"Rin Itoshi", role:"Centroavante (Capitão)", initials:"RI", photo:"fotos/rin.jpg", desc:"Frieza cirúrgica na hora de finalizar, cobrando perfeição de si e dos parceiros."},
  niko:    {name:"Ikki Niko", role:"Zagueiro", initials:"IN", photo:"fotos/nikko.jpg", desc:"Usa uma visão de jogo evoluída para escanear o campo inteiro e antecipar cada jogada adversária."},
  aryu:     {name:"Jyubei Aryu", role:"Zagueiro", initials:"JA", photo:"fotos/aryu.jpg", desc:"Forma com o parceiro de zaga a última barreira antes do gol, sempre fechando os espaços perigosos."},
  tabito:   {name:"Tabito Karasu", role:"Volante", initials:"TK", photo:"fotos/tabito.jpg", desc:"Atua entre a defesa e o ataque, estudando o adversário para armar jogadas que rompem qualquer marcação."},
  aiku:     {name:"Oliver Aiku", role:"Zagueiro / Líbero (Capitão)", initials:"OA", photo:"fotos/aiku.png", desc:"Ex-atacante que virou o melhor tipo de defensor: lê o jogo como poucos e comanda a linha defensiva."},
  jingo:    {name:"Jingo Raichi", role:"Atacante", initials:"JR", photo:"fotos/jingo.jpg", desc:"Aparece no ponto cego do adversário, surpreendendo a marcação no momento exato da jogada."},
};


const FORMATIONS = [
  {
    name: "4-3-3 Ofensiva",
    slots: [
      {id:"gagamaru", left:9,  top:50},
      {id:"chigiri",  left:28, top:14},
      {id:"aiku",     left:28, top:38},
      {id:"aryu",     left:28, top:62},
      {id:"kunigami", left:28, top:86},
      {id:"reo",      left:53, top:24},
      {id:"nagi",     left:53, top:50},
      {id:"isagi",    left:53, top:76},
      {id:"rin",      left:80, top:20},
      {id:"shidou",   left:80, top:50},
      {id:"tabito",   left:80, top:80},
    ]
  },
  {
    name: "3-4-3 Egoísta",
    slots: [
      {id:"gagamaru", left:9,  top:50},
      {id:"jingo",    left:28, top:20},
      {id:"aiku",     left:28, top:50},
      {id:"niko",     left:28, top:80},
      {id:"chigiri",  left:53, top:14},
      {id:"isagi",    left:53, top:38},
      {id:"tabito",   left:53, top:62},
      {id:"kunigami", left:53, top:86},
      {id:"rin",      left:80, top:20},
      {id:"barou",    left:80, top:50},
      {id:"bachira",  left:80, top:80},
    ]
  },
  {
    name: "4-2-3-1 Estratégica",
    slots: [
      {id:"gagamaru", left:9,  top:50},
      {id:"otoya",    left:28, top:14},
      {id:"aiku",     left:28, top:38},
      {id:"aryu",     left:28, top:62},
      {id:"nagi",     left:28, top:86},
      {id:"reo",      left:45, top:34},
      {id:"tabito",   left:45, top:66},
      {id:"rin",      left:63, top:20},
      {id:"isagi",    left:63, top:50},
      {id:"bachira",  left:63, top:80},
      {id:"shidou",   left:83, top:50},
    ]
  },
];

const MOMENT_SHAPES = [
  // Foto 1
  `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width: 100%; height: 100%;">
    <image href="fotos/bestrin.jpg" x="0" y="0" width="200" height="200" preserveAspectRatio="xMidYMid slice" />
  </svg>`,

  // Foto 2
  `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width: 100%; height: 100%;">
    <image href="fotos/bestshidou.jpg" x="0" y="0" width="200" height="200" preserveAspectRatio="xMidYMid slice" />
  </svg>`,

  // Foto 3
  `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style="width: 100%; height: 100%;">
    <image href="fotos/bestnagi.jpg" x="0" y="0" width="200" height="200" preserveAspectRatio="xMidYMid slice" />
  </svg>`

];

const CAPTAINS = [
  {team:"Bastard München", name:"Noel Noa", initials:"NN", photo:"fotos/noa.png", desc:"Considerado o melhor atacante do mundo. Trata cada jogada como um cálculo perfeito e comanda a Alemanha com frieza absoluta."},
  {team:"FC Barcha", name:"Lavinho", initials:"LV", photo:"fotos/lavinho.webp", desc:"Conhecido como 'O Dançarino': ninguém supera seus dribles, e é ele quem ensina Bachira a soltar o monstro que existe dentro de si."},
  {team:"Manshine City", name:"Chris Prince", initials:"CP", photo:"fotos/pince.jpg", desc:"O 'herói perfeito' do futebol inglês — extremamente confiante e tecnicamente impecável, fica atrás apenas de Noa em talento puro."},
  {team:"Paris X Gen", name:"Julian Loki", initials:"JL", photo:"fotos/loki.jpg", desc:"O mestre mais jovem da liga, com uma velocidade estonteante. Formou Charles Chevalier como seu sucessor no ataque francês."},
  {team:"Ubers", name:"Marc Snuffy", initials:"MS", photo:"fotos/snuffy.jpg", desc:"Estrategista nato: monta jogadas coletivas milimétricas e coloca o time acima do brilho individual."},
];

const NEWGEN = [
  {country:"Japão / Re Al", name:"Sae Itoshi", initials:"SI", photo:"fotos/sae.jpg", text:"Irmão mais velho de Rin e meio-campista genial do Re Al espanhol — enxerga o jogo com uma clareza que poucos algum dia vão alcançar."},
  {country:"Alemanha / Bastard München", name:"Michael Kaiser", initials:"MK", photo:"fotos/kaiser.png", text:"Consolidado como uma das maiores referências ofensivas da nova geração europeia."},
  {country:"Itália / Ubers", name:"Don Lorenzo", initials:"DL", photo:"fotos/lorenzo.jpg", text:"Zagueiro implacável apelidado de 'Devorador de Ases' — sua marcação agressiva já neutralizou alguns dos maiores atacantes do mundo."},
  {country:"França / Paris X Gen", name:"Charles Chevalier", initials:"CC", photo:"fotos/charles.jpg", text:"Revelado sob as asas de Julian Loki, aposta na velocidade e no timing preciso para furar qualquer defesa."},
  {country:"Espanha / FC Barcha", name:"Bunny Iglesias", initials:"BI", photo:"fotos/iglesias.jpg", text:"Segundo atacante que forma dupla letal com Lavinho — já provou que finaliza tão bem quanto dribla."},
  {country:"França / Arsenaly", name:"Vivian Hugo", initials:"VH", photo:"fotos/hugo.jpg", text:"Meio-campista paciente e frio, atua como escudo defensivo do time e raramente perde a compostura em campo."},
];

const AUCTION = [
  {name: "Yoichi Isagi",team: "Alemanha (Bastard München)",price: "¥ 240.000.000",stats: [["Visão de jogo", 98], ["Finalização", 88], ["Drible", 77], ["Físico", 74], ["Velocidade", 78]]},
  {name: "Michael Kaiser",team: "Alemanha (Bastard München)",price: "¥ 320.000.000",stats: [["Visão de jogo", 96], ["Finalização", 98], ["Drible", 86], ["Físico", 85], ["Velocidade", 84]]},
  {name: "Meguru Bachira",team: "Espanha (FC Barcha)",price: "¥ 140.000.000",stats: [["Visão de jogo", 82], ["Finalização", 84], ["Drible", 99], ["Físico", 73], ["Velocidade", 86]]},
  {name: "Seishiro Nagi",team: "Inglaterra (Manshine City)",price: "¥ 88.000.000",stats: [["Visão de jogo", 80], ["Finalização", 92], ["Drible", 94], ["Físico", 75], ["Velocidade", 70]]},
  {name: "Rin Itoshi",team: "França (Paris X Gen)",price: "¥ 240.000.000",stats: [["Visão de jogo", 95], ["Finalização", 96], ["Drible", 88], ["Físico", 84], ["Velocidade", 85]]},
  {name: "Shoei Barou",team: "Itália (Ubers)",price: "¥ 150.000.000",stats: [["Visão de jogo", 72], ["Finalização", 95], ["Drible", 80], ["Físico", 94], ["Velocidade", 80]]}
];

/* ======================================================
   SIDEBAR
====================================================== */
const menuTrigger = document.getElementById('menuTrigger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('closeMenu');

function openSidebar(){ sidebar.classList.add('open'); overlay.classList.add('show'); }
function closeSidebar(){ sidebar.classList.remove('open'); overlay.classList.remove('show'); }

menuTrigger.addEventListener('click', openSidebar);
closeMenu.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
document.querySelectorAll('.side-link').forEach(link => {
  link.addEventListener('click', closeSidebar);
});

/* ======================================================
   01 - CAMPO / ESCALAÇÕES
====================================================== */
const playersLayer = document.getElementById('playersLayer');
const formationLabel = document.getElementById('formationLabel');
const fieldDots = document.getElementById('fieldDots');
const playerCardEmpty = document.getElementById('playerCardEmpty');
const playerCardContent = document.getElementById('playerCardContent');
const playerAvatar = document.getElementById('playerAvatar');
const playerRole = document.getElementById('playerRole');
const playerName = document.getElementById('playerName');
const playerDesc = document.getElementById('playerDesc');

let currentFormation = 0;

function renderFormation(index){
  currentFormation = (index + FORMATIONS.length) % FORMATIONS.length;
  const f = FORMATIONS[currentFormation];
  formationLabel.textContent = f.name;
  playersLayer.innerHTML = '';

  f.slots.forEach(slot => {
    const p = PLAYERS[slot.id];
    const dot = document.createElement('button');
    dot.className = 'player-dot photo-slot';
    dot.style.left = slot.left + '%';
    dot.style.top = slot.top + '%';
    dot.innerHTML = photoSlotHTML(p.photo, p.name);
    dot.setAttribute('aria-label', p.name);
    dot.addEventListener('click', () => selectPlayer(slot.id, dot));
    playersLayer.appendChild(dot);
  });

  fieldDots.innerHTML = '';
  FORMATIONS.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === currentFormation ? ' active' : '');
    fieldDots.appendChild(d);
  });

  playerCardEmpty.hidden = false;
  playerCardContent.hidden = true;
}

function selectPlayer(id, dotEl){
  document.querySelectorAll('.player-dot').forEach(d => d.classList.remove('selected'));
  dotEl.classList.add('selected');
  const p = PLAYERS[id];
  playerAvatar.innerHTML = photoSlotHTML(p.photo, p.name);
  playerRole.textContent = p.role;
  playerName.textContent = p.name;
  playerDesc.textContent = p.desc;
  playerCardEmpty.hidden = true;
  playerCardContent.hidden = false;
}

document.getElementById('fieldPrev').addEventListener('click', () => renderFormation(currentFormation - 1));
document.getElementById('fieldNext').addEventListener('click', () => renderFormation(currentFormation + 1));

renderFormation(0);

/* ======================================================
   02 - MELHORES MOMENTOS (carrossel básico, sem texto)
====================================================== */
const momentTrack = document.getElementById('momentTrack');
const momentDots = document.getElementById('momentDots');
let currentMoment = 0;

function renderMoments(){
  momentTrack.innerHTML = '';
  MOMENT_SHAPES.forEach(svg => {
    const slide = document.createElement('div');
    slide.className = 'moment-slide';
    slide.innerHTML = svg;
    momentTrack.appendChild(slide);
  });
  momentDots.innerHTML = '';
  MOMENT_SHAPES.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    momentDots.appendChild(d);
  });
  goToMoment(0);
}

function goToMoment(index){
  currentMoment = (index + MOMENT_SHAPES.length) % MOMENT_SHAPES.length;
  momentTrack.style.transform = `translateX(-${currentMoment * 100}%)`;
  [...momentDots.children].forEach((d, i) => d.classList.toggle('active', i === currentMoment));
}

document.getElementById('momentPrev').addEventListener('click', () => goToMoment(currentMoment - 1));
document.getElementById('momentNext').addEventListener('click', () => goToMoment(currentMoment + 1));

renderMoments();

/* ======================================================
   03 - LIGA NEO EGOÍSTA (bloqueio sequencial)
====================================================== */
const captainsGrid = document.getElementById('captainsGrid');
const unlockBtn = document.getElementById('unlockBtn');
let unlockedIndex = 0;

function buildCaptains(){
  captainsGrid.innerHTML = '';
  CAPTAINS.forEach(c => {
    const card = document.createElement('div');
    card.className = 'captain-card';
    card.innerHTML = `
      <div class="captain-photo photo-slot">${photoSlotHTML(c.photo, c.name)}</div>
      <div class="captain-body">
        <p class="captain-team">${c.team}</p>
        <h3 class="captain-name">${c.name}</h3>
        <p class="captain-desc">${c.desc}</p>
      </div>
      <div class="lock-overlay">
        <span class="lock-icon">🔒</span>
        <span class="lock-text">Ainda não liberado</span>
      </div>
    `;
    captainsGrid.appendChild(card);
  });
  updateCaptains(false);
}

function updateCaptains(scroll = true){
  const cards = captainsGrid.querySelectorAll('.captain-card');
  cards.forEach((card, i) => card.classList.toggle('unlocked', i === unlockedIndex));

  if (scroll) {
    const card = cards[unlockedIndex];
    const gridRect = captainsGrid.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const left = captainsGrid.scrollLeft
               + (cardRect.left - gridRect.left)
               - (gridRect.width - cardRect.width) / 2;
    captainsGrid.scrollTo({ left, behavior: 'smooth' });
  }
}

unlockBtn.addEventListener('click', () => {
  unlockedIndex = (unlockedIndex + 1) % CAPTAINS.length;
  updateCaptains();
});

buildCaptains();

/* ======================================================
   04 - NEW GENERATION XI (carrossel com texto)
====================================================== */
const newgenTrack = document.getElementById('newgenTrack');
const newgenDots = document.getElementById('newgenDots');
let currentNewgen = 0;

function renderNewgen(){
  newgenTrack.innerHTML = '';
  NEWGEN.forEach(p => {
    const slide = document.createElement('div');
    slide.className = 'newgen-slide';
    slide.innerHTML = `
      <div class="newgen-photo photo-slot">${photoSlotHTML(p.photo, p.name)}</div>
      <div class="newgen-body">
        <p class="newgen-country">${p.country}</p>
        <h3 class="newgen-name">${p.name}</h3>
        <p class="newgen-text">${p.text}</p>
      </div>
    `;
    newgenTrack.appendChild(slide);
  });
  newgenDots.innerHTML = '';
  NEWGEN.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    newgenDots.appendChild(d);
  });
  goToNewgen(0);
}

function goToNewgen(index){
  currentNewgen = (index + NEWGEN.length) % NEWGEN.length;
  newgenTrack.style.transform = `translateX(-${currentNewgen * 100}%)`;
  [...newgenDots.children].forEach((d, i) => d.classList.toggle('active', i === currentNewgen));
}

document.getElementById('newgenPrev').addEventListener('click', () => goToNewgen(currentNewgen - 1));
document.getElementById('newgenNext').addEventListener('click', () => goToNewgen(currentNewgen + 1));

renderNewgen();

/* ======================================================
   05 - LEILÃO DE LANCES (sistema do Ego)
====================================================== */
const auctionGrid = document.getElementById('auctionGrid');
const revealedAuction = new Array(AUCTION.length).fill(false);

function renderAuction(){
  auctionGrid.innerHTML = '';
  AUCTION.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'auction-card';
    const statsHtml = p.stats.map(([label, val]) => `
      <div class="stat-row">
        <span class="stat-label">${label}</span>
        <div class="stat-bar"><div class="stat-fill" style="width:${val}%"></div></div>
      </div>
    `).join('');
    const isRevealed = revealedAuction[i];
    card.innerHTML = `
      <div class="auction-top">
        <div>
          <p class="auction-team">${p.team}</p>
          <h3 class="auction-name">${p.name}</h3>
        </div>
        <button class="price-reveal${isRevealed ? ' revealed' : ''}" data-index="${i}">
          <span class="auction-price-label">Lance atual</span>
          <span class="auction-price-value">${isRevealed ? p.price : '?'}</span>
          ${isRevealed ? '' : '<span class="reveal-hint">toque para revelar</span>'}
        </button>
      </div>
      ${statsHtml}
    `;
    auctionGrid.appendChild(card);
  });
}

auctionGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.price-reveal');
  if (!btn) return;
  const i = Number(btn.dataset.index);
  revealedAuction[i] = true;
  renderAuction();
});

renderAuction();
