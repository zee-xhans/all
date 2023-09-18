 //buatan zeeshan
    let myImage = new Image(170, 170);
    myImage.src = 'download.jpg';

    let myGunting = new Image(170, 170);
    myGunting.src = 'download (1).jpg';

    let myKertas = new Image(170, 170);
    myKertas.src = 'download (2).jpg';
   
    function batuLg() {
      document.getElementById("coloumn-1").append(myImage);

      let computer = [myImage, myGunting, myKertas];
      document.getElementById("coloumn-2").append(computer[Math.floor(Math.random()*computer.length)]);

      let comp = computer[Math.floor(Math.random()*computer.length)];

      if (comp === myImage)  {
        document.getElementById("info").innerHTML = "ANTUM SERI";
      } 
      else if (comp === myKertas) {
        document.getElementById("info").innerHTML = "ANTUM KALAH";
      }
      else if (comp === myGunting){
        document.getElementById("info").innerHTML = "ANTUM MENANG";
      } 
    }

    function guntingLg() {
      document.getElementById("coloumn-1").append(myGunting);

      let computer = [myImage, myGunting, myKertas];
      document.getElementById("coloumn-2").append(computer[Math.floor(Math.random()*computer.length)]);

      let comp = computer[Math.floor(Math.random()*computer.length)];

      if (comp === myGunting)  {
        document.getElementById("info").innerHTML = "ANTUM SERI";
      } 
      else if (comp === myImage) {
        document.getElementById("info").innerHTML = "ANTUM KALAH";
      }
      else if (comp === myKertas){
        document.getElementById("info").innerHTML = "ANTUM MENANG";
      } 
    }

    function kertasLg() {
      document.getElementById("coloumn-1").append(myKertas);

      let computer = [myImage, myGunting, myKertas];
      document.getElementById("coloumn-2").append(computer[Math.floor(Math.random()*computer.length)]);

      let comp = computer[Math.floor(Math.random()*computer.length)];

      if (comp === myKertas)  {
        document.getElementById("info").innerHTML = "ANTUM SERI";
      } 
      else if (comp === myGunting) {
        document.getElementById("info").innerHTML = "ANTUM KALAH";

      } else if (comp === myImage){
        document.getElementById("info").innerHTML = "ANTUM MENANG";

      }
     }
