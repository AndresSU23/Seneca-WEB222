//Step 1
document.addEventListener("DOMContentLoaded", (event) => {
    //DOM Loading Event Listener Creation
    var main = document.querySelector(`main`); //Getting Main Object
  
    //Step 3
    var third_para = document.querySelector(`#third-para`); //Getting Third Paragraph element
    third_para.innerHTML = "Julieta Venegas Spotify "; //Modifying the text content
    var link = document.createElement("a"); //Creatinh Hyperlink
    link.href =
      "https://open.spotify.com/intl-es/artist/2QWIScpFDNxmS6ZEMIUvgm?si=sdhnW33sTCGtK-SFRjRAhw"; //Hyperlink content
    link.target = "_blank"; //Target Attribute
    link.innerHTML = "Click Here"; //Text content
    link.className = "140273228"; //Change Class
    third_para.appendChild(link); //Adding link
  
    //Step 4
    var start_btn = document.querySelector(`.btn-start`); //Getting Start Button
    start_btn.addEventListener("click", (event) => {
      //Creating Click listener fro start
      var sect = document.createElement("section"); //Create Section
      sect.innerHTML = "The startbutton was clicked!"; //Change Text Content
      main.appendChild(sect); //Adding section to main element
    });
  
    //Step 5
    var h1 = document.querySelector("h1"); //Getting the first h1
    function loop() {
      //Creating loop recursive function
      setTimeout(() => {
        //Setting 3.5 Seconds Timer
        h1.innerHTML = `There are ${main.childElementCount} section elements inside main`;
        loop(); //Recursiveness
      }, 3500);
    }
    setTimeout(() => {
      //Setting first 2.5 Seconds Timer
      h1.innerHTML = `There are ${main.childElementCount} section elements inside main`;
      loop(); //Calling Second Timer
    }, 2500);
  });
  //Step 2
  document.title = `WEB222 Test5 - Fall, 2023 - David Andres Sanchez Umbarila`; //Setting page title  