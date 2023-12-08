/**
 * WEB222 – Assignment 05
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
 *      Date:       21/11/2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

//Artist Load
window.addEventListener("load", function () {
  let menuDiv = document.querySelector("#menu");
  let main = document.querySelector("main");
  let catalog = document.createElement("div");
  catalog.className = "catalog";
  main.appendChild(catalog);
  artists.forEach((artist) => {
    //Info Load
    let menuButton = document.createElement("button");
    menuButton.innerHTML = artist.name;
    menuButton.addEventListener("click", function () {
      //Artist Info Load
      let artistH2 = document.querySelector("#selected-artist");
      artistH2.innerHTML = `${artist.name} [`;
      artist.urls.forEach((url) => {
        console.log();
        artistH2.innerHTML += `<a href='${url.url}'>${url.name}${
          url.name === artist.urls[artist.urls.length - 1].name ? "</a>]" : ", </a>"
        }`;
      });

      //Songs Load
      catalog.innerHTML = "";
      let counter = 0;
      let songRow = document.createElement("div");
      songRow.className = "songRow";
      songs
        .filter((x) => x.artistId === artist.artistId && !x.explicit)
        .forEach((song) => {
          //Card Creation
          console.log(`Loaded Song: ` + song.songId);
          let card = document.createElement("div");
          card.className = "card";
          //Image Button Creation
          let figure = document.createElement("figure");
          let imgBtn = document.createElement("button");
          imgBtn.type = "button";
          imgBtn.addEventListener("click", function () {
            //Image Button Click Funtion
            console.log(song);
            window.open(song.url, "_blank");
          });
          let img = document.createElement("img");
          img.src = song.image_url;
          img.alt = "Cover";
          imgBtn.appendChild(img);
          figure.appendChild(imgBtn);
          //Adding Caption Image Reference
          let caption = document.createElement("figcaption");
          let ref = document.createElement("a");
          ref.innerHTML = "Reference";
          ref.href = song.image_ref;
          caption.appendChild(ref);
          figure.appendChild(caption);
          card.appendChild(figure);
          //Creating Song Information Container
          let container = document.createElement("container");
          let songTitle = document.createElement("p");
          //Creating Song Title
          songTitle.innerHTML = song.title;
          songTitle.id = "songTitle";
          container.appendChild(songTitle);
          let details = document.createElement("p");
          //Creating Song Details
          details.innerHTML = `Year: ${song.year} - Duration: ${Math.floor(
            song.duration / 60
          )}:${String(song.duration % 60).padStart(2, "0")}`;
          container.appendChild(details);
          card.appendChild(container);
          //New Row Controller
          counter++;
          if (counter === 4) {
            catalog.appendChild(songRow);
            songRow = document.createElement("div");
            songRow.className = "songRow";
          } else {
            songRow.appendChild(card);
          }
        });
      //Single Card Check
      if (counter) {
        catalog.appendChild(songRow);
      }
    });
    menuDiv.appendChild(menuButton);
  });
  //Setting Default Load Artist
  let defaulArt = document.querySelector("#menu button");
  defaulArt.click();
});
