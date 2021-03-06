/* Leet translator functions */

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
 

/*Pop-up Confirm Box, triggered by 'Security Test' button, which is actually a tricky cybersecurity teaching tool that leads you to a page that gives you a tip why you should be careful with links */
 
function myConfirm() {
    if (confirm("This is a cybersecurity notification. Should you accept it? Or should you cancel?")) {
        window.location.href = 'http://jacobrigal.github.io/cyber/safe.html';
    } else {
        window.location.href = 'http://jacobrigal.github.io/cyber/safe.html';
    }
  }

 /* Shows time  */

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  /* This function allows you to customize the page based on your name entered into a prompt. If the field is empty, will send an alert and new prompt to enter name. If empty a second time, new alert that redirects to Cisco cybersecurity page on clicking 'OK'. */ 
  
  function myName1() {
    var person2 = prompt("Please enter your name", "a future ethical hacker");
    if (person2 == null || person2 == "") {
      alert("Name must be filled out");
      person2 = prompt("Please enter your name:", "");
    }
    if (person2 == null || person2 == "") {
      alert("You really don't want to cooperate! Have fun on another site!");
      window.location.href = 'https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html';
  }
   else {
      you2 = " for " + person2;
    }
    document.getElementById("name").innerHTML = you2;
  }

  /*Makes the font bigger in the main sections on the home page */
  
  function myFont() {
    var x, i;
    x = document.querySelectorAll("#agent, #leet, #leet3, #leet4, #leet5, #leet6, #leet7");
    for (i = 0; i < x.length; i++) {
      x[i].style.fontSize = "35px";
    }
  }
 
  /* Displays some detected info from end user. */
  
    var txt = "Warning: This information about your system is available to every website you visit. It can be used to fingerprint your OS, browser, etc., and can possibly be used to exploit your system. Please make sure you have updated everything to the latest version!! *Note: the follwing info may not be entirely accurate:";
    txt += "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
    txt += "<p>Browser Name: " + navigator.appName + "</p>";
    txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
    txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
    txt += "<p>Browser Language: " + navigator.language + "</p>";
    txt += "<p>Browser Online: " + navigator.onLine + "</p>";
    txt += "<p>Platform: " + navigator.platform + "</p>";
    txt += "<p>User-agent header: " + navigator.userAgent + "</p>"; 
    document.getElementById("agent").innerHTML = txt;
    browserversion = navigator.appVersion;
    platform = navigator.platform;
  
/* Takes the header info from the previous function and searches the string for the most recent version of Chrome, and for the Win32 OS platform. */
var n = browserversion.includes('Chrome/83.0.4103.97');
notify = ('Your version of Chrome is detecting as being up to date');
linktext = ("Click here for a rundown on Chrome's past issues");
link2 = linktext.link("https://www.zdnet.com/article/google-patches-chrome-zero-day-under-active-attacks/");
notupdated = ('Your version of Chrome is detecting as being an older release. This may be because you are using a different browser altogether. Please see the following links to learn about vulnerabilities in earlier versions of Chrome: ' + link2);

if (n == true) {
  document.getElementById("browse").innerHTML = notify;
}
else {
  document.getElementById("browse").innerHTML = notupdated;
}
console.log(notify);

/*Code for button that hides detected info */
function hideOsInfo() {
  var x = document.getElementById("agent");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
