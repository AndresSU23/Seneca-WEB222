/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       David Andres Sanchez Umbarila
 *      Student ID: 140273228
 *      Date:       03/11/2023
 */ // All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;
// For debugging, display all of our data in the console. You can remove this later.
console.log({
    artists,
    songs
}, "App Data");
//Artist Load
window.addEventListener("load", function() {
    let menuDiv = document.querySelector("#menu");
    artists.forEach((artist)=>{
        //Info Load
        let menuButton = document.createElement("button");
        menuButton.innerHTML = artist.name;
        menuButton.addEventListener("click", function() {
            let artistH2 = document.querySelector("#selected-artist");
            artistH2.innerHTML = `${artist.name} [`;
            artist.urls.forEach((url)=>{
                console.log();
                artistH2.innerHTML += `<a href='${url.url}'>${url.name}${url.name === artist.urls[artist.urls.length - 1].name ? "</a>]" : ", </a>"}`;
            });
            let songsTable = document.querySelector("#songs");
            songsTable.innerHTML = "";
            songs.filter((x)=>x.artistId === artist.artistId && !x.explicit).forEach((song)=>{
                console.log(song);
                let songRow = document.createElement("tr");
                songRow.innerHTML += `<th><a href='${song.url}'>${song.title}</a></th>`;
                songRow.innerHTML += `<th>${song.year}</th>`;
                songRow.innerHTML += `<th>${Math.floor(song.duration / 60)}:${String(song.duration % 60).padStart(2, "0")}</th>`;
                songsTable.appendChild(songRow);
            });
        });
        menuDiv.appendChild(menuButton);
    });
});

//# sourceMappingURL=index.8d5a5ebb.js.map
