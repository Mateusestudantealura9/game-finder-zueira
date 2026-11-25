const gamesDatabase = [
    {
        id: 1,
        title: "The Witcher 3: Wild Hunt",
        genre: "RPG",
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mode: "Singleplayer",
        isFree: false,
        priceText: "R$ 129,90",
        icon: "⚔️",
        description: "Um RPG de mundo aberto com história profunda e caça a monstros."
    },
    {
        id: 2,
        title: "Valorant",
        genre: "FPS",
        platforms: ["PC", "PlayStation", "Xbox"],
        mode: "Multiplayer",
        isFree: true,
        priceText: "Gratuito",
        icon: "🎯",
        description: "Jogo de tiro tático 5v5 com agentes que possuem habilidades únicas."
    },
    {
        id: 3,
        title: "Hollow Knight",
        genre: "Indie",
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mode: "Singleplayer",
        isFree: false,
        priceText: "R$ 46,99",
        icon: "🪲",
        description: "Aventura de ação clássica em 2D por um vasto reino interligado."
    },
    {
        id: 4,
        title: "It Takes Two",
        genre: "Aventura",
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mode: "Cooperativo",
        isFree: false,
        priceText: "R$ 199,00",
        icon: "🧩",
        description: "Aventura de plataforma criada exclusivamente para dois jogadores."
    },
    {
        id: 5,
        title: "Civilization VI",
        genre: "Estratégia",
        platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
        mode: "Multiplayer",
        isFree: false,
        priceText: "R$ 129,00",
        icon: "🌍",
        description: "Construa um império para resistir ao teste do tempo em turnos."
    },
    {
        id: 6,
        title: "Genshin Impact",
        genre: "RPG",
        platforms: ["PC", "PlayStation"],
        mode: "Cooperativo",
        isFree: true,
        priceText: "Gratuito",
        icon: "✨",
        description: "RPG de ação em mundo aberto com combate elemental e exploração."
    },
    {
        id: 7,
        title: "God of War Ragnarök",
        genre: "Ação",
        platforms: ["PC", "PlayStation"],
        mode: "Singleplayer",
        isFree: false,
        priceText: "R$ 249,90",
        icon: "🪓",
        description: "Kratos e Atreus enfrentam deuses nórdicos em uma jornada épica."
    },
    {
        id: 8,
        title: "Counter-Strike 2",
        genre: "FPS",
        platforms: ["PC"],
        mode: "Multiplayer",
        isFree: true,
        priceText: "Gratuito",
        icon: "💣",
        description: "O clássico jogo de tiro competitivo em equipes baseado em objetivos."
    }
];

const searchInput = document.getElementById("search-input");
const genreSelect = document.getElementById("genre-select");
const platformSelect = document.getElementById("platform-select");
const modeSelect = document.getElementById("mode-select");
const priceSelect = document.getElementById("price-select");
const resetBtn = document.getElementById("reset-btn");
const gamesGrid = document.getElementById("games-grid");
const resultsCount = document.getElementById("results-count");

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
            <div class="game-banner">${game.icon}</div>
            <div class="game-info">
                <h3 class="game-title">${game.title}</h3>
                <p class="game-desc">${game.description}</p>
                <div class="tags">
                    <span class="tag">${game.genre}</span>
                    <span class="tag">${game.mode}</span>
                    ${platformsTags}
                </div>
                <div class="game-footer">
                    <span>Preço:</span>
                    <span class="${game.isFree ? "price-free" : "price-paid"}">${game.priceText}</span>
                </div>
            </div>
        `;

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

searchInput.addEventListener("input", filterGames);
genreSelect.addEventListener("change", filterGames);
platformSelect.addEventListener("change", filterGames);
modeSelect.addEventListener("change", filterGames);
priceSelect.addEventListener("change", filterGames);
resetBtn.addEventListener("click", resetFilters);

renderGames(gamesDatabase);
