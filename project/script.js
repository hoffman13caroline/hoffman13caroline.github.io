/*
    SIDETRACKED

    This app uses hash navigation to show different pages
    inside one index.html file.

    Spotify embeds show the playlist tracks.
    No API key or installation is needed.

    Runtime values below come from saved Spotify preview data
    checked November 19, 2026. They cover up to 100 returned
    tracks per playlist, rather than guaranteed full live totals.

    The artist directory uses the featured artist names
    provided in each playlist object.
*/

// --------------------------------------------------
// PLAYLIST DATA
// --------------------------------------------------

const playlists = [
    {
        key: "piano",
        name: "Peaceful Piano",
        spotifyId: "37i9dQZF1DX4sWSpwq3LiO",
        genre: "Piano",
        runtime: "4 hr 14 min",
        description: "Soft piano for studying, reading, and slowing down.",
        artists: ["Ziva"]
    },
    {
        key: "lofi",
        name: "lofi beats",
        spotifyId: "37i9dQZF1DWWQRwui0ExPn",
        genre: "Lo-fi",
        runtime: "3 hr 46 min",
        description: "Relaxed beats for homework and creative projects.",
        artists: ["Moonloop"]
    },
    {
        key: "study",
        name: "Instrumental Study",
        spotifyId: "37i9dQZF1DX9sIqqvKsjG8",
        genre: "Instrumental",
        runtime: "4 hr 12 min",
        description: "Quiet instrumental music that leaves room to think.",
        artists: ["Robert Gafforelli"]
    },
    {
        key: "jazz",
        name: "Late Night Jazz",
        spotifyId: "37i9dQZF1DX4wta20PHgwo",
        genre: "Jazz",
        runtime: "8 hr 41 min",
        description: "A cozy jazz soundtrack for your personal coffee shop.",
        artists: ["Diego Rivera"]
    },
    {
        key: "acoustic",
        name: "Acoustic Hits",
        spotifyId: "37i9dQZF1DX4VvfRBFClxm",
        genre: "Acoustic",
        runtime: "6 hr 7 min",
        description: "Acoustic songs for easy afternoons and quieter moments.",
        artists: ["John Smith"]
    },
    {
        key: "beast",
        name: "Beast Mode",
        spotifyId: "37i9dQZF1DX76Wlfdnj7AP",
        genre: "Pop / Hip-hop",
        runtime: "5 hr 10 min",
        description: "High-energy songs for a little extra workout motivation.",
        artists: [
            "Dua Lipa",
            "Kendrick Lamar",
            "Travis Scott",
            "The Weeknd"
        ]
    },
    {
        key: "workout",
        name: "Workout",
        spotifyId: "37i9dQZF1DX70RN3TfWWJh",
        genre: "Pop",
        runtime: "5 hr 11 min",
        description: "Keep moving with an upbeat workout soundtrack.",
        artists: ["BTS"]
    },
    {
        key: "motivation",
        name: "Morning Motivation",
        spotifyId: "37i9dQZF1DXc5e2bJhV6pu",
        genre: "Pop / Soul",
        runtime: "4 hr 53 min",
        description: "A feel-good start for your morning, commute, or warm-up.",
        artists: ["Paul Simon"]
    },
    {
        key: "dance",
        name: "Dance Party",
        spotifyId: "37i9dQZF1DXaXB8fQg7xif",
        genre: "Dance",
        runtime: "4 hr 59 min",
        description: "Turn the room into a dance floor.",
        artists: [
            "KAROL G",
            "John Summit",
            "Judeline",
            "rusowsky"
        ]
    },
    {
        key: "party",
        name: "Party Hits",
        spotifyId: "37i9dQZF1DXa2PvUpywmrr",
        genre: "Pop / Hip-hop",
        runtime: "5 hr 27 min",
        description: "A party soundtrack for getting everyone together.",
        artists: ["Drake", "Sexyy Red", "SZA"]
    },
    {
        key: "throwback",
        name: "All Out 2000s",
        spotifyId: "37i9dQZF1DX4o1oenSJRJd",
        genre: "Throwback Pop",
        runtime: "6 hr 49 min",
        description: "Throwbacks for singing along with your friends.",
        artists: ["Alicia Keys"]
    },
    {
        key: "hits",
        name: "Today's Top Hits",
        spotifyId: "37i9dQZF1DXcBWIGoYBM5M",
        genre: "Pop",
        runtime: "2 hr 43 min",
        description: "A mix of popular songs for the party or the car.",
        artists: [
            "Harry Styles",
            "Olivia Dean",
            "Bruno Mars",
            "Zara Larsson"
        ]
    },
    {
        key: "chill",
        name: "Chill Hits",
        spotifyId: "37i9dQZF1DX4WYpdgoIcn6",
        genre: "Chill Pop",
        runtime: "5 hr 38 min",
        description: "Easygoing pop for winding down after a long day.",
        artists: ["Myles Smith"]
    },
    {
        key: "indie",
        name: "Feel-Good Indie Rock",
        spotifyId: "37i9dQZF1DX2sUQwD7tbmL",
        genre: "Indie Rock",
        runtime: "5 hr 53 min",
        description: "Indie rock for open windows and brighter afternoons.",
        artists: ["The Moss"]
    },
    {
        key: "road",
        name: "Songs to Sing in the Car",
        spotifyId: "37i9dQZF1DWWMOmoXKqHTD",
        genre: "Pop / Rock",
        runtime: "6 hr 17 min",
        description: "Your car is now a concert venue.",
        artists: ["The Calling"]
    },
    {
        key: "sleep",
        name: "Sleep",
        spotifyId: "37i9dQZF1DWZd79rJ6a7lp",
        genre: "Ambient",
        runtime: "4 hr 22 min",
        description: "Gentle sounds for your nighttime routine.",
        artists: ["Triangular Prism III"]
    },
    {
        key: "ambient",
        name: "Ambient Relaxation",
        spotifyId: "37i9dQZF1DX3Ogo9pFvBkY",
        genre: "Ambient",
        runtime: "4 hr 21 min",
        description: "Quiet textures for focusing or taking a breath.",
        artists: ["Milleah"]
    }
];

// --------------------------------------------------
// ACTIVITY DATA
// Each activity has four boxes.
// Each box includes three to five playlists.
// --------------------------------------------------

const activities = [
    {
        id: "studying",
        name: "Studying",
        icon: "✎",
        color: "#e6dafa",
        description: "Big deadlines. Small distractions.",

        groups: [
            {
                name: "Locked in",
                description: "Music for getting through that next assignment.",
                playlists: ["study", "lofi", "ambient"]
            },
            {
                name: "Background Music",
                description: "A little company for your study session.",
                playlists: ["jazz", "lofi", "piano"]
            },
            {
                name: "No Words",
                description: "Instrumentals that leave room to think.",
                playlists: ["piano", "study", "ambient"]
            },
            {
                name: "All Study Playlists",
                description: "Every study pick in one place.",
                playlists: ["study", "lofi", "piano", "jazz", "ambient"]
            }
        ]
    },
    {
        id: "working-out",
        name: "Working out",
        icon: "↯",
        color: "#dce9b7",
        description: "Find your rhythm. Get moving.",

        groups: [
            {
                name: "Heavy Lifting",
                description: "Energy for that last rep.",
                playlists: ["beast", "workout", "dance"]
            },
            {
                name: "Cardio Club",
                description: "Keep your feet moving.",
                playlists: ["workout", "dance", "beast"]
            },
            {
                name: "Warm-up & Good Vibes",
                description: "Start your workout with a mood boost.",
                playlists: ["motivation", "indie", "dance"]
            },
            {
                name: "All Workout Playlists",
                description: "Your whole gym bag of sound.",
                playlists: [
                    "beast",
                    "workout",
                    "dance",
                    "motivation",
                    "indie"
                ]
            }
        ]
    },
    {
        id: "background",
        name: "Background Noise",
        icon: "☁",
        color: "#d6e9f0",
        description: "Set the mood. Do your thing.",

        groups: [
            {
                name: "Coffee Shop",
                description: "Bring the corner café to your room.",
                playlists: ["jazz", "acoustic", "lofi"]
            },
            {
                name: "Creative Flow",
                description: "Something gentle while you make something.",
                playlists: ["lofi", "piano", "ambient"]
            },
            {
                name: "Quiet Company",
                description: "Keep the room from feeling too quiet.",
                playlists: ["ambient", "jazz", "acoustic"]
            },
            {
                name: "All Background Playlists",
                description: "Low-key sound for everyday moments.",
                playlists: ["lofi", "jazz", "acoustic", "piano", "ambient"]
            }
        ]
    },
    {
        id: "party",
        name: "Party",
        icon: "✷",
        color: "#f6d5b3",
        description: "Good friends. Better aux privileges.",

        groups: [
            {
                name: "Dance Floor",
                description: "Clear a little space and turn it up.",
                playlists: ["dance", "party", "hits"]
            },
            {
                name: "Everybody Knows This One",
                description: "Your unofficial group karaoke session.",
                playlists: ["throwback", "road", "hits"]
            },
            {
                name: "Getting Ready",
                description: "The party before the party.",
                playlists: ["party", "hits", "throwback"]
            },
            {
                name: "All Party Playlists",
                description: "Your next gathering starts here.",
                playlists: ["party", "dance", "hits", "throwback", "road"]
            }
        ]
    },
    {
        id: "road-trip",
        name: "On the Road",
        icon: "↗",
        color: "#f0d7e6",
        description: "Windows down. Volume up.",

        groups: [
            {
                name: "Windows Down",
                description: "Fresh air and good music.",
                playlists: ["indie", "road", "motivation"]
            },
            {
                name: "Car Karaoke",
                description: "A concert from the driver's seat.",
                playlists: ["road", "throwback", "motivation"]
            },
            {
                name: "Scenic Route",
                description: "Take your time getting there.",
                playlists: ["acoustic", "indie", "road"]
            },
            {
                name: "All Road Trip Playlists",
                description: "For the commute or the cross-country trip.",
                playlists: [
                    "road",
                    "indie",
                    "throwback",
                    "acoustic",
                    "motivation"
                ]
            }
        ]
    },
    {
        id: "winding-down",
        name: "Winding Down",
        icon: "☾",
        color: "#eee4c4",
        description: "Slow down. You have earned it.",

        groups: [
            {
                name: "Soft Landing",
                description: "Leave the busy part of the day behind.",
                playlists: ["chill", "acoustic", "piano"]
            },
            {
                name: "One More Chapter",
                description: "Gentle music for a cozy reading night.",
                playlists: ["piano", "ambient", "acoustic"]
            },
            {
                name: "Lights Out",
                description: "Quiet sounds for your nighttime routine.",
                playlists: ["sleep", "ambient", "piano"]
            },
            {
                name: "All Wind-down Playlists",
                description: "Your collection of softer sounds.",
                playlists: ["sleep", "ambient", "piano", "acoustic", "chill"]
            }
        ]
    }
];

// --------------------------------------------------
// SHARED VARIABLES AND HELPERS
// --------------------------------------------------

const content = document.getElementById("content");

let previousRandomPlaylist = "";

function getPlaylist(key) {
    return playlists.find(function(playlist) {
        return playlist.key === key;
    });
}

// Makes text safe to insert into generated HTML.
function escapeHTML(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function homeLink() {
    return '<a href="#home" class="breadcrumb">← Home</a>';
}

function playlistCard(playlist) {
    return `
        <a href="#playlist/${playlist.key}" class="playlist-card">
            <span class="playlist-icon" aria-hidden="true">♫</span>

            <span class="playlist-info">
                <strong>${escapeHTML(playlist.name)}</strong>
                <small>
                    ${escapeHTML(playlist.runtime)} saved preview
                    · ${escapeHTML(playlist.genre)}
                </small>
            </span>

            <span class="playlist-arrow" aria-hidden="true">↗</span>
        </a>
    `;
}

function playlistCards(keys) {
    return keys.map(function(key) {
        return playlistCard(getPlaylist(key));
    }).join("");
}

// --------------------------------------------------
// HOME PAGE
// --------------------------------------------------

function showHome() {
    content.innerHTML = `
        <section class="hero">
            <p class="eyebrow">A soundtrack for your side quests</p>

            <h1>SideTracked<span>.</span></h1>

            <p class="subtitle">
                Whatever you're up to, there's a playlist for it.
                <br>
                Pick your activity. Find your sound. Get into it.
            </p>

            <div class="record-decoration" aria-hidden="true">
                <div class="record">
                    <span>✷</span>
                </div>
            </div>
        </section>

        <div class="section-heading">
            <h2>What's the plan?</h2>
            <p>Pick an activity to find your next playlist.</p>
        </div>

        <div class="activity-grid">
            ${activities.map(function(activity) {
                return `
                    <a
                        href="#activity/${activity.id}"
                        class="activity-card"
                        style="background-color: ${activity.color};"
                    >
                        <span class="icon" aria-hidden="true">
                            ${activity.icon}
                        </span>

                        <h3>${activity.name} ↗</h3>
                        <p>${activity.description}</p>
                    </a>
                `;
            }).join("")}
        </div>

        <p class="home-note">
            No plan? No problem.
            <a href="#random">Let fate pick your soundtrack.</a>
        </p>
    `;
}

// --------------------------------------------------
// ACTIVITY PAGE
// --------------------------------------------------

function showActivity(activityId) {
    const activity = activities.find(function(item) {
        return item.id === activityId;
    });

    if (!activity) {
        showNotFound();
        return;
    }

    content.innerHTML = `
        ${homeLink()}

        <div class="page-heading">
            <p class="eyebrow">Choose your vibe</p>
            <h1>${activity.icon} ${activity.name}</h1>
            <p class="subtitle">${activity.description}</p>
        </div>

        <div class="category-grid">
            ${activity.groups.map(function(group) {
                return `
                    <section
                        class="category-box"
                        style="--activity-color: ${activity.color};"
                    >
                        <h2>${group.name}</h2>

                        <p class="category-description">
                            ${group.description}
                        </p>

                        <div class="playlist-list">
                            ${playlistCards(group.playlists)}
                        </div>
                    </section>
                `;
            }).join("")}
        </div>

        <p class="note">
            Runtimes cover saved Spotify preview data, up to 100
            tracks per playlist. Spotify playlists can change.
        </p>
    `;
}

// --------------------------------------------------
// PLAYLIST DETAIL PAGE
// --------------------------------------------------

function showPlaylist(playlistKey) {
    const playlist = getPlaylist(playlistKey);

    if (!playlist) {
        showNotFound();
        return;
    }

    const spotifyLink =
        "https://open.spotify.com/playlist/" + playlist.spotifyId;

    const embedLink =
        "https://open.spotify.com/embed/playlist/" +
        playlist.spotifyId +
        "?utm_source=generator";

    content.innerHTML = `
        ${homeLink()}

        <section class="playlist-heading">
            <div class="large-playlist-icon" aria-hidden="true">
                ♫
            </div>

            <div>
                <span class="genre-tag">
                    ${escapeHTML(playlist.genre)}
                </span>

                <h1>${escapeHTML(playlist.name)}</h1>

                <p class="subtitle">
                    ${escapeHTML(playlist.description)}
                </p>

                <p>
                    Saved preview runtime:
                    <strong>${escapeHTML(playlist.runtime)}</strong>
                </p>

                <a
                    href="${spotifyLink}"
                    class="button spotify-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Open on Spotify ↗
                </a>
            </div>
        </section>

        <h2>Tracks & Player</h2>

        <p class="subtitle">
            Scroll inside the Spotify player to browse its track list.
        </p>

        <iframe
            class="spotify-player"
            title="${escapeHTML(playlist.name)} Spotify playlist"
            src="${embedLink}"
            allow="autoplay; clipboard-write; encrypted-media;
                   fullscreen; picture-in-picture"
            allowfullscreen
            loading="lazy"
        ></iframe>

        <p class="note">
            Spotify's embedded player may limit the tracks it displays.
            Use “Open on Spotify” for the complete current playlist.
            Playback may require a Spotify account. If the player is
            unavailable, the Spotify button above opens the playlist directly.
        </p>

        <p class="note">
            The saved runtime was calculated from up to 100 preview
            tracks on November 19, 2026. It may differ from the current
            full playlist runtime.
        </p>

        <p>
            <a href="#playlists">← Browse all playlists</a>
        </p>
    `;
}

// --------------------------------------------------
// ALL PLAYLISTS PAGE
// --------------------------------------------------

function showAllPlaylists() {
    content.innerHTML = `
        ${homeLink()}

        <div class="page-heading">
            <p class="eyebrow">The whole collection</p>
            <h1>All Playlists</h1>

            <p class="subtitle">
                Every playlist in SideTracked, all in one place.
            </p>
        </div>

        <label for="playlist-search" class="search-label">
            Find a playlist
        </label>

        <input
            id="playlist-search"
            class="search-input"
            type="search"
            placeholder="Search playlist, genre, or featured artist..."
        >

        <p id="playlist-count" class="result-count" aria-live="polite"></p>

        <div id="playlist-results" class="playlist-grid"></div>

        <p class="note">
            Runtimes cover saved preview data rather than guaranteed
            full live playlist totals.
        </p>
    `;

    const searchInput = document.getElementById("playlist-search");

    searchInput.addEventListener("input", function() {
        updatePlaylistResults(searchInput.value);
    });

    updatePlaylistResults("");
}

function updatePlaylistResults(searchText) {
    const search = searchText.toLowerCase().trim();

    const results = playlists.filter(function(playlist) {
        const searchableText = (
            playlist.name + " " +
            playlist.genre + " " +
            playlist.description + " " +
            playlist.artists.join(" ")
        ).toLowerCase();

        return searchableText.includes(search);
    });

    document.getElementById("playlist-count").textContent =
        results.length + " playlists found";

    const resultsArea = document.getElementById("playlist-results");

    if (results.length === 0) {
        resultsArea.innerHTML = `
            <p class="empty-message">
                No playlists found. Try another search.
            </p>
        `;
        return;
    }

    resultsArea.innerHTML = results.map(function(playlist) {
        return playlistCard(playlist);
    }).join("");
}

// --------------------------------------------------
// ARTISTS PAGE
// --------------------------------------------------

function showArtists() {
    content.innerHTML = `
        ${homeLink()}

        <div class="page-heading">
            <p class="eyebrow">Meet the music makers</p>
            <h1>Artists</h1>

            <p class="subtitle">
                Browse the featured artists in this app's saved
                playlist data. Select a playlist under an artist's name.
                Spotify has the full current artist lineup.
            </p>
        </div>

        <label for="artist-search" class="search-label">
            Find an artist
        </label>

        <input
            id="artist-search"
            class="search-input"
            type="search"
            placeholder="Search featured artists..."
        >

        <p id="artist-count" class="result-count" aria-live="polite"></p>

        <div id="artist-results" class="artist-grid"></div>
    `;

    const searchInput = document.getElementById("artist-search");

    searchInput.addEventListener("input", function() {
        updateArtistResults(searchInput.value);
    });

    updateArtistResults("");
}

function updateArtistResults(searchText) {
    const artistNames = [];

    playlists.forEach(function(playlist) {
        playlist.artists.forEach(function(artist) {
            if (!artistNames.includes(artist)) {
                artistNames.push(artist);
            }
        });
    });

    artistNames.sort(function(first, second) {
        return first.localeCompare(second);
    });

    const search = searchText.toLowerCase().trim();

    const results = artistNames.filter(function(artist) {
        return artist.toLowerCase().includes(search);
    });

    document.getElementById("artist-count").textContent =
        results.length + " featured artists found";

    const resultsArea = document.getElementById("artist-results");

    if (results.length === 0) {
        resultsArea.innerHTML = `
            <p class="empty-message">
                No artists found. Try another name.
            </p>
        `;
        return;
    }

    resultsArea.innerHTML = results.map(function(artist) {
        const matchingPlaylists = playlists.filter(function(playlist) {
            return playlist.artists.includes(artist);
        });

        return `
            <section class="artist-card">
                <h2>${escapeHTML(artist)}</h2>

                ${matchingPlaylists.map(function(playlist) {
                    return `
                        <a href="#playlist/${playlist.key}">
                            ${escapeHTML(playlist.name)} ↗
                        </a>
                    `;
                }).join("")}
            </section>
        `;
    }).join("");
}

// --------------------------------------------------
// GENRES PAGE
// --------------------------------------------------

function showGenres() {
    const genres = [];

    playlists.forEach(function(playlist) {
        if (!genres.includes(playlist.genre)) {
            genres.push(playlist.genre);
        }
    });

    genres.sort();

    content.innerHTML = `
        ${homeLink()}

        <div class="page-heading">
            <p class="eyebrow">Follow your sound</p>
            <h1>Browse by Genre</h1>

            <p class="subtitle">
                Find a playlist by its general sound.
                These are broad SideTracked tags; mixed playlists
                can include other genres.
            </p>
        </div>

        ${genres.map(function(genre) {
            const matchingPlaylists = playlists.filter(function(playlist) {
                return playlist.genre === genre;
            });

            return `
                <section class="genre-section">
                    <h2>${escapeHTML(genre)}</h2>

                    <div class="playlist-grid">
                        ${matchingPlaylists.map(function(playlist) {
                            return playlistCard(playlist);
                        }).join("")}
                    </div>
                </section>
            `;
        }).join("")}
    `;
}

// --------------------------------------------------
// RANDOM PLAYLIST PAGE
// --------------------------------------------------

function showRandom() {
    // Prevents the same playlist appearing twice in a row.
    const choices = playlists.filter(function(playlist) {
        return playlist.key !== previousRandomPlaylist;
    });

    const randomIndex = Math.floor(Math.random() * choices.length);
    const chosenPlaylist = choices[randomIndex];

    previousRandomPlaylist = chosenPlaylist.key;

    content.innerHTML = `
        ${homeLink()}

        <section class="random-box">
            <p class="random-symbol" aria-hidden="true">⚄</p>
            <p class="eyebrow">A little musical chance</p>

            <h1>Your next soundtrack?</h1>

            <p>
                One random pick from the whole collection.
                Click the playlist to explore it.
            </p>

            ${playlistCard(chosenPlaylist)}

            <button id="random-button" class="button">
                ↻ Pick another playlist
            </button>
        </section>
    `;

    document.getElementById("random-button").addEventListener(
        "click",
        showRandom
    );
}

// --------------------------------------------------
// PAGE NOT FOUND
// --------------------------------------------------

function showNotFound() {
    content.innerHTML = `
        ${homeLink()}

        <h1>A little off track.</h1>

        <p class="subtitle">
            That page isn't in the collection.
        </p>

        <a href="#home" class="button">Back to Home</a>
    `;
}

// --------------------------------------------------
// NAVIGATION
// --------------------------------------------------

function updateNavigation(page) {
    const navigationLinks = document.querySelectorAll("nav a");

    navigationLinks.forEach(function(link) {
        link.classList.remove("active");
        link.removeAttribute("aria-current");

        let currentPage = page;

        if (page === "playlist") {
            currentPage = "playlists";
        }

        if (link.dataset.page === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
}

function renderPage() {
    // Examples:
    // #home
    // #activity/studying
    // #playlist/piano
    // #artists

    const route = window.location.hash.slice(1) || "home";
    const routeParts = route.split("/");

    const page = routeParts[0];
    const selectedItem = routeParts[1];

    switch (page) {
        case "home":
            showHome();
            break;

        case "activity":
            showActivity(selectedItem);
            break;

        case "playlist":
            showPlaylist(selectedItem);
            break;

        case "playlists":
            showAllPlaylists();
            break;

        case "artists":
            showArtists();
            break;

        case "genres":
            showGenres();
            break;

        case "random":
            showRandom();
            break;

        default:
            showNotFound();
    }

    updateNavigation(page);

    const heading = content.querySelector("h1");

    document.title = heading
        ? heading.textContent + " | SideTracked"
        : "SideTracked";

    window.scrollTo(0, 0);
}

// Re-render whenever a navigation link changes the hash.
window.addEventListener("hashchange", renderPage);

// Display the starting page.
renderPage();