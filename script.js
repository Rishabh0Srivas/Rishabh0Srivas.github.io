getRandomMessage();
timer();

  function getRandomMessage() {
    fetch('https://retoolapi.dev/FMGixB/birthdaywishes')
      .then(res => res.json())
      .then(data => {
        const value = data[Math.floor(Math.random() * data.length)];
        var child = document.getElementById("msg");
        // randomMessage.textContent = value.message
        console.log(value.message)
        // const node = document.createTextNode(value.message);
        child.innerText = value.message
      })
      .catch(error => console.log(error));
  }


  function timer(){
    // Set the date we're counting down to
    var countDownDate = new Date("April 11, 2023 00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("cdntimer").innerHTML = days + "D " + hours + "H "
    + minutes + "M " + seconds + "S ";

    // If the count down is over, write some text 
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("vid").style.display = "none";
    document.getElementById("cdntimer").style.display = "none";
    document.getElementById("c").style.display = "block";
    }
    }, 1000);
  }

  
  
  document.addEventListener('contextmenu', event => event.preventDefault());
  window.onload=function(){
    document.getElementById("player").play();
  }




  // Typing



  var aText = new Array(
    "Lonely nights with soaking pillows", 
    "the freezing breeze that fills you with sorrow",
    "your body lies down but your mind would never",
    "and thoughts you hold tight, would tie you forever",
    "are you longing for the end? are you suffering from pain?",
    "are you wishing to go back all the way from back then?",
    "when the light in your eyes was shining bright as fire?",
    "or the darkness in desperation was nowhere to find?",
    "i know",
    "deep down in there",
    "you are broken,",
    "you are imprisoned",
    "you are trapped in your own depression",
    "they say you are not enough",
    "like they fucking ask you to be on top",
    "but no one was born as perfect as gods",
    "so we are just that, imperfect human",
    "the grades won't speak up for your true borned talents",
    "maybe we'll all die sooner or later",
    "death would kiss you goodnight as light as a feather",
    "then why wasting your time to care about others?",
    "your life is only yours so find how to make it better",
    "but hey, you know, just a small reminder",
    "that i love you and hope that you'll love yourself forever"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 4; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    // console.log(sContents + aText[iIndex].substring(0, iTextPos) + "_")
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();
