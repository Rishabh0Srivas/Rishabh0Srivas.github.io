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



  // Flipbook


  
function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

p1 = randomIntFromInterval(1,40)
p2 = randomIntFromInterval(1,40)
p3 = randomIntFromInterval(1,40)
p4 = randomIntFromInterval(1,40)

console.log(p1,":",p2,":",p3,":",p4)

var r = document.querySelector(':root');
r.style.setProperty('--pic1', `url("./assets/p${p1}.jpg")`);
r.style.setProperty('--pic2', `url("./assets/p${p2}.jpg")`);
r.style.setProperty('--pic3', `url("./assets/p${p3}.jpg")`);
r.style.setProperty('--pic4', `url("./assets/p${p4}.jpg")`);
r.style.setProperty('--pic5', 'url("./assets/p40.jpg")');