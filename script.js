const gamesDatabase = [
    {
        id: 1,
        title: "The Witcher 3: Wild Hunt",
        genre: "RPG",
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mode: "Singleplayer",
        isFree: false,
        priceValue: 159.99,
        priceText: "R$ 159,99",
        storeInfo: "Steam / PS Store",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
        fallbackColor: "#7f1d1d",
        description: "Assuma o papel de Geralt de Rívia em um RPG de mundo aberto sombrio, rico em escolhas e caça a monstros."
    },
    {
        id: 2,
        title: "Hollow Knight",
        genre: "Indie",
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mode: "Singleplayer",
        isFree: false,
        priceValue: 46.99,
        priceText: "R$ 46,99",
        storeInfo: "Steam / eShop",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
        fallbackColor: "#1e3a8a",
        description: "Explore Hallownest, um vasto reino subterrâneo em ruínas cheio de insetos guerreiros e chefes desafiadores."
    },
    {
        id: 3,
        title: "God of War Ragnarök",
        genre: "Ação",
        platforms: ["PC", "PlayStation"],
        mode: "Singleplayer",
        isFree: false,
        priceValue: 249.90,
        priceText: "R$ 249,90",
        storeInfo: "Steam / PlayStation",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/2322010/header.jpg",
        fallbackColor: "#0c4a6e",
        description: "Kratos e Atreus viajam pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para a guerra."
    },
    {
        id: 4,
        title: "It Takes Two",
        genre: "Aventura",
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mode: "Cooperativo",
        isFree: false,
        priceValue: 199.00,
        priceText: "R$ 199,00",
        storeInfo: "Steam / EA App",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1426210/header.jpg",
        fallbackColor: "#78350f",
        description: "Uma aventura cooperativa premiada criada exclusivamente para dois jogadores superarem desafios criativos juntos."
    },
    {
        id: 5,
        title: "Sid Meier's Civilization VI",
        genre: "Estratégia",
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mode: "Multiplayer",
        isFree: false,
        priceValue: 129.00,
        priceText: "R$ 129,00",
        storeInfo: "Steam / Epic Games",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg",
        fallbackColor: "#14532d",
        description: "Construa um império desde a Idade da Pedra até a Era da Informação e dispute a supremacia mundial em turnos."
    },
    {
        id: 6,
        title: "Counter-Strike 2",
        genre: "FPS",
        platforms: ["PC"],
        mode: "Multiplayer",
        isFree: true,
        priceValue: 0,
        priceText: "Gratuito",
        storeInfo: "Steam (Free-to-Play)",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
        fallbackColor: "#9a3412",
        description: "O maior clássico de tiro tático competitivo em equipes 5v5 com física aprimorada e partidas ranqueadas."
    },
    {
        id: 7,
        title: "Apex Legends",
        genre: "FPS",
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mode: "Multiplayer",
        isFree: true,
        priceValue: 0,
        priceText: "Gratuito",
        storeInfo: "Steam / EA / Consoles",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg",
        fallbackColor: "#991b1b",
        description: "Battle Royale dinâmico em esquadrões onde personagens lendários usam habilidades táticas e supremas."
    },
    {
        id: 8,
        title: "Red Dead Redemption 2",
        genre: "Ação",
        platforms: ["PC", "PlayStation", "Xbox"],
        mode: "Singleplayer",
        isFree: false,
        priceValue: 299.90,
        priceText: "R$ 299,90",
        storeInfo: "Steam / Rockstar",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
        fallbackColor: "#881337",
        description: "Viva a história épica de Arthur Morgan e da gangue Van der Linde no fim da era do Velho Oeste americano."
    },
    {
        id: 9,
        title: "Stardew Valley",
        genre: "Indie",
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mode: "Cooperativo",
        isFree: false,
        priceValue: 24.99,
        priceText: "R$ 24,99",
        storeInfo: "Steam / Consoles",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
        fallbackColor: "#166534",
        description: "Herde uma antiga fazenda, cultive plantações, explore cavernas e jogue sozinho ou com amigos."
    }
];

// Gera uma capa ilustrada automática caso o usuário esteja sem internet
function getFallbackCover(title, bgColor) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="215" viewBox="0 0 460 215">
        <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="${bgColor}"/>
                <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
        </defs>
        <rect width="460" height="215" fill="url(#g)"/>
        <circle cx="390" cy="40" r="70" fill="rgba(255,255,255,0.06)"/>
        <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill="#f8fafc" font-family="Segoe UI, sans-serif" font-size="22" font-weight="bold">${title}</text>
    </svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// Personagens dos jogos voando no fundo
const backgroundCharacters = [
    {
        name: "Hollow Knight",
        left: "5%",
        duration: "21s",
        delay: "0s",
        svg: `<svg viewBox="0 0 120 120" fill="none">
                <!-- Capa esvoaçante -->
                <path d="M35 64 C22 82, 24 102, 42 108 L78 108 C96 102, 98 82, 85 64 Z" fill="#1e293b" stroke="#60a5fa" stroke-width="2.5"/>
                <!-- Chifres característicos -->
                <path d="M42 42 C32 24, 34 10, 44 8 C46 18, 46 28, 50 36" fill="#f8fafc" stroke="#93c5fd" stroke-width="2"/>
                <path d="M78 42 C88 24, 86 10, 76 8 C74 18, 74 28, 70 36" fill="#f8fafc" stroke="#93c5fd" stroke-width="2"/>
                <!-- Máscara -->
                <rect x="38" y="34" width="44" height="36" rx="18" fill="#f8fafc" stroke="#60a5fa" stroke-width="2.5"/>
                <!-- Olhos vazios -->
                <ellipse cx="50" cy="52" rx="5.5" ry="7.5" fill="#090d16"/>
                <ellipse cx="70" cy="52" rx="5.5" ry="7.5" fill="#090d16"/>
                <!-- Ferrão (Espada) -->
                <polygon points="92,22 98,22 95,95" fill="#cbd5e1" stroke="#38bdf8" stroke-width="1.5"/>
                <line x1="87" y1="34" x2="103" y2="34" stroke="#60a5fa" stroke-width="3"/>
              </svg>`
    },
    {
        name: "Geralt de Rívia",
        left: "22%",
        duration: "26s",
        delay: "3s",
        svg: `<svg viewBox="0 0 120 120" fill="none">
                <!-- Duas espadas nas costas -->
                <line x1="25" y1="14" x2="92" y2="88" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
                <line x1="95" y1="14" x2="28" y2="88" stroke="#60a5fa" stroke-width="4" stroke-linecap="round"/>
                <!-- Cabelo branco -->
                <path d="M40 34 C36 20, 84 20, 80 34 L84 56 L36 56 Z" fill="#e2e8f0"/>
                <!-- Rosto e cicatriz -->
                <circle cx="60" cy="40" r="14" fill="#cbd5e1"/>
                <circle cx="55" cy="39" r="2.2" fill="#facc15"/>
                <circle cx="65" cy="39" r="2.2" fill="#facc15"/>
                <line x1="63" y1="33" x2="68" y2="46" stroke="#ef4444" stroke-width="1.8"/>
                <!-- Armadura -->
                <path d="M34 58 L86 58 L92 106 L28 106 Z" fill="#1e293b" stroke="#60a5fa" stroke-width="2.5"/>
                <!-- Medalhão de Lobo -->
                <polygon points="60,66 55,74 60,80 65,74" fill="#38bdf8"/>
              </svg>`
    },
    {
        name: "Kratos",
        left: "44%",
        duration: "24s",
        delay: "7s",
        svg: `<svg viewBox="0 0 120 120" fill="none">
                <!-- Machado Leviatã -->
                <line x1="92" y1="16" x2="92" y2="104" stroke="#92400e" stroke-width="5" stroke-linecap="round"/>
                <path d="M92 20 C112 20, 114 48, 92 48 Z" fill="#38bdf8" stroke="#bae6fd" stroke-width="2"/>
                <!-- Cabeça e marca vermelha -->
                <circle cx="56" cy="34" r="15" fill="#e2e8f0"/>
                <path d="M48 21 L54 34 L46 42" stroke="#dc2626" stroke-width="4" stroke-linecap="round"/>
                <!-- Barba -->
                <path d="M43 38 C43 56, 69 56, 69 38 L64 54 L48 54 Z" fill="#334155"/>
                <!-- Peitoral e ombreira -->
                <path d="M30 56 L82 56 L78 106 L34 106 Z" fill="#475569" stroke="#94a3b8" stroke-width="2"/>
                <path d="M30 56 L66 96" stroke="#b45309" stroke-width="7"/>
              </svg>`
    },
    {
        name: "Agente FPS",
        left: "66%",
        duration: "22s",
        delay: "1s",
        svg: `<svg viewBox="0 0 120 120" fill="none">
                <!-- Capuz tático -->
                <path d="M38 38 C38 18, 82 18, 82 38 L85 56 L35 56 Z" fill="#312e81" stroke="#818cf8" stroke-width="2.5"/>
                <!-- Visor brilhante -->
                <rect x="44" y="34" width="32" height="10" rx="5" fill="#38bdf8"/>
                <!-- Colete futurista -->
                <path d="M32 58 L88 58 L94 106 L26 106 Z" fill="#1e1b4b" stroke="#6366f1" stroke-width="2.5"/>
                <!-- Rifle energético -->
                <rect x="64" y="64" width="44" height="10" rx="3" fill="#94a3b8"/>
                <line x1="70" y1="69" x2="104" y2="69" stroke="#38bdf8" stroke-width="2.5"/>
              </svg>`
    },
    {
        name: "Aventureiro",
        left: "84%",
        duration: "28s",
        delay: "5s",
        svg: `<svg viewBox="0 0 120 120" fill="none">
                <!-- Chapéu pontudo -->
                <polygon points="60,8 34,36 86,36" fill="#2563eb" stroke="#93c5fd" stroke-width="2"/>
                <ellipse cx="60" cy="36" rx="32" ry="6" fill="#1d4ed8"/>
                <!-- Rosto -->
                <circle cx="60" cy="48" r="12" fill="#fde68a"/>
                <!-- Manto -->
                <path d="M32 106 L42 62 L78 62 L88 106 Z" fill="#4f46e5" stroke="#a78bfa" stroke-width="2.5"/>
                <!-- Cajado mágico voando -->
                <line x1="96" y1="24" x2="96" y2="104" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
                <circle cx="96" cy="20" r="8" fill="#facc15" stroke="#fef08a" stroke-width="2"/>
              </svg>`
    }
];

function initFloatingCharacters() {
    const container = document.getElementById("floating-characters");
    backgroundCharacters.forEach(char => {
        const el = document.createElement("div");
        el.classList.add("floating-char");
        el.style.left = char.left;
        el.style.animationDuration = char.duration;
        el.style.animationDelay = char.delay;
        el.innerHTML = `
            <div class="floating-char-art">${char.svg}</div>
            <span>${char.name}</span>
        `;
        container.appendChild(el);
    });
}

const searchInput = document.getElementById("search-input");
const genreSelect = document.getElementById("genre-select");
const platformSelect = document.getElementById("platform-select");
const modeSelect = document.getElementById("mode-select");
const priceSelect = document.getElementById("price-select");
const resetBtn = document.getElementById("reset-btn");
const gamesGrid = document.getElementById("games-grid");
const resultsCount = document.getElementById("results-count");

// Elementos do Modal
const gameModal = document.getElementById("game-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalTags = document.getElementById("modal-tags");
const modalStore = document.getElementById("modal-store");
const modalPrice = document.getElementById("modal-price");

function openGameModal(game) {
    const fallbackSrc = getFallbackCover(game.title, game.fallbackColor);
    modalImg.onerror = () => {
        modalImg.onerror = null;
        modalImg.src = fallbackSrc;
    };
    modalImg.src = game.image;
    modalImg.alt = `Capa de ${game.title}`;
    modalTitle.textContent = game.title;
    modalDesc.textContent = game.description;
    modalStore.textContent = `Disponível em: ${game.storeInfo}`;
    modalPrice.textContent = game.priceText;
    modalPrice.style.color = game.isFree ? "#4ade80" : "#60a5fa";

    modalTags.innerHTML = `
        <span class="tag">${game.genre}</span>
        <span class="tag">${game.mode}</span>
        ${game.platforms.map(p => `<span class="tag">${p}</span>`).join("")}
    `;

    gameModal.classList.remove("hidden");
}

function renderGames(games) {
    gamesGrid.innerHTML = "";
    resultsCount.textContent = `Mostrando ${games.length} ${games.length === 1 ? "jogo" : "jogos"}`;

    if (games.length === 0) {
        gamesGrid.innerHTML = `
            <div class="no-results">
                <h3>Nenhum jogo encontrado 😕</h3>
                <p>Tente alterar ou limpar os filtros selecionados.</p>
            </div>
        `;
        return;
    }

    games.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("game-card");

        const platformsTags = game.platforms
            .map(platform => `<span class="tag">${platform}</span>`)
            .join("");

        const fallbackSrc = getFallbackCover(game.title, game.fallbackColor);

        card.innerHTML = `
            <div class="game-image-wrapper">
                <img src="${game.image}" alt="Capa do jogo ${game.title}">
                <span class="game-genre-badge">${game.genre}</span>
                <span class="view-photo-hint">🔍 Ampliar foto</span>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-desc">${game.description}</p>
                <div class="tags">
                    <span class="tag">${game.mode}</span>
                    ${platformsTags}
                </div>
                <div class="game-footer">
                    <span>Valor:</span>
                    <div class="price-box">
                        <span class="${game.isFree ? "price-free" : "price-paid"}">${game.priceText}</span>
                        <span class="store-label">${game.storeInfo}</span>
                    </div>
                </div>
            </div>
        `;

        const imgEl = card.querySelector("img");
        imgEl.onerror = () => {
            imgEl.onerror = null;
            imgEl.src = fallbackSrc;
        };

        card.addEventListener("click", () => openGameModal(game));
        gamesGrid.appendChild(card);
    });
}

function filterGames() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedGenre = genreSelect.value;
    const selectedPlatform = platformSelect.value;
    const selectedMode = modeSelect.value;
    const selectedPrice = priceSelect.value;

    const filtered = gamesDatabase.filter(game => {
        const matchesName = game.title.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === "all" || game.genre === selectedGenre;
        const matchesPlatform = selectedPlatform === "all" || game.platforms.includes(selectedPlatform);
        const matchesMode = selectedMode === "all" || game.mode === selectedMode;
        const matchesPrice =
            selectedPrice === "all" ||
            (selectedPrice === "free" && game.isFree) ||
            (selectedPrice === "under100" && !game.isFree && game.priceValue <= 100) ||
            (selectedPrice === "paid" && !game.isFree);

        return matchesName && matchesGenre && matchesPlatform && matchesMode && matchesPrice;
    });

    renderGames(filtered);
}

function resetFilters() {
    searchInput.value = "";
    genreSelect.value = "all";
    platformSelect.value = "all";
    modeSelect.value = "all";
    priceSelect.value = "all";
    renderGames(gamesDatabase);
}

closeModalBtn.addEventListener("click", () => gameModal.classList.add("hidden"));
gameModal.addEventListener("click", (e) => {
    if (e.target === gameModal) gameModal.classList.add("hidden");
});

searchInput.addEventListener("input", filterGames);
genreSelect.addEventListener("change", filterGames);
platformSelect.addEventListener("change", filterGames);
modeSelect.addEventListener("change", filterGames);
priceSelect.addEventListener("change", filterGames);
resetBtn.addEventListener("click", resetFilters);

initFloatingCharacters();
renderGames(gamesDatabase);
