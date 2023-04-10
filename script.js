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
    console.log(distance)

    // If the count down is over, write some text 
    if (distance < 23000) {
      console.log(distance)
    clearInterval(x);
    // document.getElementById("vid").style.display = "none";
    document.getElementById("cdntimer").style.display = "none";
    document.getElementById("c").style.display = "block";
    // document.getElementById("vidsrc").setAttribute("src", "./assets/B_vid.mp4");
    // a = document.getElementById("vidsrc").getAttribute;
    // console.log(a);
    changeVid('./assets/Final_vid.mp4');
    changeAudio('./assets/Final_aud.mp3')
    document.getElementById('vid').style.margin = "auto";
    document.getElementById('vid').style.top = "2%"
    document.getElementById('vid').style.width = "50%";
    setTimeout(()=> {
      changeVid('./assets/B_vid.mp4');
      document.getElementById("vid").style.zIndex = -1
      changeAudio('./assets/Cover_aud.mp3')
      document.getElementById('player').setAttribute('loop','');
   }
   ,20000);

  }
    }, 1000);
  }

  
  
  document.addEventListener('contextmenu', event => event.preventDefault());
  window.onload=function(){
    document.getElementById("player").play();
  }


  function changeVid(url){
    document.getElementById('vid').remove();
    var newvid = document.createElement('video');
    newvid.setAttribute('id', 'vid');
    newvid.setAttribute('muted', '');
    var newsrc = document.createElement('source')
    newsrc.setAttribute('id', 'vidsrc');
    newsrc.setAttribute('type', 'video/mp4');
    newsrc.setAttribute('src', url);
    document.getElementById('bd').appendChild(newvid);
    document.getElementById('vid').appendChild(newsrc);
    newvid.play();
    setTimeout(()=> {
      fireworks()
   }
   ,31000);
  }

function changeAudio(url){
  document.getElementById('player').remove();
    var newaud = document.createElement('audio');
    newaud.setAttribute('id', 'player');
    // newaud.setAttribute('muted', '');
    var newsrc = document.createElement('source')
    // newsrc.setAttribute('id', 'vidsrc');
    newsrc.setAttribute('type', 'audio/mp3');
    newsrc.setAttribute('src', url);
    document.getElementById('bd').appendChild(newaud);
    document.getElementById('player').appendChild(newsrc);
    newaud.play();
}


function fireworks(){
  var head = document.getElementsByTagName('HEAD')[0];
 
        // Create new link Element
        var link = document.createElement('link');
 
        // set the attributes for link element
        link.rel = 'stylesheet';
     
        link.type = 'text/css';
     
        link.href = 'fireworks.css';
        link.id = 'firew'
 
        // Append link element to HTML head
        head.appendChild(link);

        setTimeout(()=> {
          link.remove()
       }
       ,3000);
}