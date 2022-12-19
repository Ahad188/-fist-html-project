for( var i=0; i < 5; i++){
     document.querySelectorAll(".mybottom")[i].addEventListener("click",function(){

     var text = this.innerHTML;
     console.log(text);
     audioSong(text);
     animation(text)
     });
};

     function audioSong(text){

          switch(text){
               case "a": 
               var audio = new Audio("music/barsat.mp3");
               audio.play();
               break;
               case "b": 
               var audio = new Audio("music/coffe.mp3");
               audio.play();
               break;
               case "c": 
               var audio = new Audio("music/meri.mp3");
               audio.play();
               break;
               case "d": 
               var audio = new Audio("music/nobel.mp3");
               audio.play();
               break;
               case "e": 
               var audio = new Audio("music/tumi.mp3");
               audio.play();
               break;
          };
     };
          function animation(text){
              var ani = document.querySelector("." + text);
              ani.classList.add("pera");

              setTimeout (function(){

               ani.classList.remove("pera");
              }, 10000);
          };

          document.addEventListener("keypress",function(event){
              var text = event.key;
               audioSong(text);
               animation(text)
          });