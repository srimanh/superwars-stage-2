const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Hulk",
    "Fish",
    "Ninja",
    "Black Cat",
    "Wolverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
 ];
 const PLAYER_IMAGES = [
    "images/super-1.png",
    "images/super-2.png",
    "images/super-3.png",
    "images/super-4.png",
    "images/super-5.png",
    "images/super-6.png",
    "images/super-7.png",
    "images/super-8.png",
    "images/super-9.png",
    "images/super-11.png",
    "images/super-12.png",
    "images/super-13.png",
    "images/super-14.png",
    "images/super-15.png",
    "images/super-16.png",
    "images/super-17.png",
    "images/super-18.png",
    "images/super-19.png",
    "images/super-20.png",
 ];

// initialize players with image and strength
function initPlayers(players) {
    let detailedPlayers = [];
    for (let i = 0; i < players.length-1; i++) {
        let player = {
            name: players[i],
            strength: getRandomStrength(),
            image: PLAYER_IMAGES[i],
            type: i % 2 === 0 ? 'hero' : 'villain'
        };
        detailedPlayers.push(player);
    }
    return detailedPlayers;
 }
    // Create players using for loop
    // Type your code here


// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for (let i = 0; i < players.length; i++) {
        fragment += `
            <div class="player">
                <img src="${players[i].image}" alt="${players[i].name}">
                <h3>${players[i].name}</h3>
                <p id="str">${players[i].strength}</p>
            </div>`;
    }

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}