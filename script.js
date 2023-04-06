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
    "In a world that can be unkind, the path ahead can be hard to find.", 
    "A girl once stood with her head held high, a smile, and an endless sky.",
    "But life had setbacks and failures in store for her.",
    "making her question her worth and her future uncertain.",
    "Friends betrayed her, adding to her pain.",
    "leaving her with anger and self-doubt to sustain.",
    "But she is more than the mistakes she's made.",
    "More than the failures she's faced",
    "She has a brilliant mind, a kind heart, and an unafraid spirit.",
    "It's okay to face setbacks and to make mistakes.",
    "It's all part of the journey; it takes time.",
    "Embrace the failures and use them to grow.",
    "And never forget, your worth will always aglow.",
    "For life and all that it brings, the future holds amazing things.",
    "Don't be a prisoner of your own thoughts",
    "Instead, ignite the fuel of confidence in you.",
    "Embrace your journey, for it's what makes you whole.",
    "And when you look back on your life, you'll see how far you've grown.",
    "And, let me tell you",
    "You are worth more than gold.",
    "( ͡≖ ͜ʖ ͡≖)✌"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 4; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter(callback)
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
      callback();
    }
    
    
    typewriter(typewriter());
    
    // console.log("end")
    
    
