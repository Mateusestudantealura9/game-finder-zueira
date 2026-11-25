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
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg",
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
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg",
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
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg",
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
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg",
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
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/289070/header.jpg",
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
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg",
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
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/header.jpg",
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
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg",
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
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg",
        description: "Herde uma antiga fazenda, cultive plantações, explore cavernas e jogue sozinho ou com amigos."
    }
];

// Silhuetas/figuras estilizadas de personagens voando no fundo
const backgroundCharacters = [
    {
        name: "Cavaleiro",
        left: "6%",
        duration: "22s",
        delay: "0s",
        svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#60a5fa" stroke-width="3">
                <path d="M30 22 C26 10, 35 8, 38 22" />
                <path d="M70 22 C74 10, 65 8, 62 22" />
                <rect x="28" y="22" width="44" height="36" rx="16" fill="rgba(59,130,246,0.18)"/>
                <circle cx="42" cy="40" r="5" fill="#93c5fd"/>
                <circle cx="58" cy="40" r="5" fill="#93c5fd"/>
                <path d="M32 58 L24 85 L76 85 L68 58 Z" fill="rgba(99,102,241,0.2)"/>
                <line x1="82" y1="20" x2="82" y2="85" stroke="#a78bfa" stroke-width="4"/>
              </svg>`
    },
    {
        name: "Caçador",
        left: "24%",
        duration: "27s",
        delay: "4s",
        svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#a78bfa" stroke-width="3">
                <circle cx="50" cy="26" r="14" fill="rgba(167,139,250,0.2)"/>
                <path d="M25 88 L35 44 L65 44 L75 88 Z" fill="rgba(59,130,246,0.18)"/>
                <line x1="20" y1="15" x2="80" y2="75" stroke="#60a5fa" stroke-width="3.5"/>
                <line x1="80" y1="15" x2="20" y2="75" stroke="#c084fc" stroke-width="3.5"/>
              </svg>`
    },
    {
        name: "Guerreiro",
        left: "48%",
        duration: "25s",
        delay: "8s",
        svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#38bdf8" stroke-width="3">
                <circle cx="50" cy="24" r="13" fill="rgba(56,189,248,0.2)"/>
                <path d="M28 42 L72 42 L66 86 L34 86 Z" fill="rgba(56,189,248,0.16)"/>
                <path d="M76 18 C92 22, 92 42, 76 46 L76 84" stroke="#f472b6" stroke-width="4"/>
              </svg>`
    },
    {
        name: "Agente FPS",
        left: "70%",
        duration: "24s",
        delay: "2s",
        svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#818cf8" stroke-width="3">
                <circle cx="50" cy="25" r="13" fill="rgba(129,140,248,0.2)"/>
                <rect x="38" y="21" width="24" height="7" rx="3" fill="#38bdf8"/>
                <path d="M30 42 L70 42 L74 86 L26 86 Z" fill="rgba(99,102,241,0.18)"/>
                <rect x="64" y="48" width="28" height="8" rx="2" fill="#93c5fd"/>
              </svg>`
    },
    {
        name: "Mago Arcano",
        left: "86%",
        duration: "29s",
        delay: "6s",
        svg: `<svg viewBox="0 0 100 100" fill="none" stroke="#c084fc" stroke-width="3">
                <polygon points="50,6 30,34 70,34" fill="rgba(192,132,252,0.25)"/>
                <circle cx="50" cy="44" r="10" fill="rgba(96,165,250,0.2)"/>
                <path d="M28 88 L38 56 L62 56 L72 88 Z" fill="rgba(167,139,250,0.2)"/>
                <circle cx="80" cy="36" r="7" stroke="#facc15" fill="rgba(250,204,21,0.3)"/>
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
        el.innerHTML = `${char.svg}<span>${char.name}</span>`;
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

        card.innerHTML = `
            <div class="game-image-wrapper">
                <img src="${game.image}" alt="Imagem do jogo ${game.title}" loading="lazy">
                <span class="game-genre-badge">${game.genre}</span>
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
image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg"

initFloatingCharacters();
renderGames(gamesDatabase);
