function myFunction() {
    document.getElementById("leet").innerHTML = "45 73chn0l06y c0n71nu35 70 d3v3l0p, 7h3 n33d 70 574y 0n 70p 0f 3v3r ch4n61n6 cyb3r53cur17y n33d5 w1ll 3n5ur3 7h3 r3l3v4nc3 1n 7h3 f13ld.";
  }
  
  function myFunction2() {
    document.getElementById("leet2").innerHTML = "cyb3r53cur17y";
  }

  function myFunction3() {
    document.getElementById("leet3").innerHTML = "r3l3v4n7";
  }

  function myFunction4() {
    document.getElementById("leet4").innerHTML = "1n d3m4nd";
  }
  
  function myFunction5() {
    document.getElementById("leet5").innerHTML = "d3m4nd f0r 3xp3r75 1n 7h3 f13ld 15 pr0j3c73d 70 1ncr3453 516n1f1c4n7ly 0v3r 7h3 n3x7 73n y34r5.";
  }

  function myFunction6() {
    document.getElementById("leet6").innerHTML = "1n73r3571n6";
  }
  function myFunction7() {
    document.getElementById("leet7").innerHTML = "7h3r3 15 4 l07 70 l34rn, y35, bu7 und3r574nd1n6 cyb3r53cur17y w1ll 61v3 y0u 4 c0mpr3h3n51v3 und3r574nd1n6 0f m4ny d1ff3r3n7 45p3c75 0f 17 45 w3ll 45 hum4n p5ych0l06y 4nd cr1m1n0l06y.";
  }
//Pop-up Confirm Box
  function myConfirm() {
    var txt;
    if (confirm("This is a cybersecurity notification. Should you accept it? Or should you cancel?")) {
        window.location.href = 'http://jacobrigal.github.io/cyber/safe.html';
    } else {
        window.location.href = 'http://jacobrigal.github.io/cyber/safe.html';
    }
    document.getElementById("confirm").innerHTML = txt;
  }

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  function yourName() {
    var txt;
    var person = prompt("Please enter your name:", "(Name)");
    if (person == null || person == "") {
      txt = " with no-name";
    } else {
      txt = " for " + person;
    }
    document.getElementById("name").innerHTML = txt;
  }