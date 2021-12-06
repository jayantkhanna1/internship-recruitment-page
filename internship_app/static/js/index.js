function change_col(id){
    for(var i=1;i<=5;i++){
        if(i!=id){
            document.getElementById("h"+i).style.color="hsla(0,0%,100%,.6)";
            document.getElementById(i+"m").style.color="hsla(0,0%,100%,.6)";
            document.getElementById("s"+i).style.color="hsla(0,0%,100%,.6)";
        }
        else{
            document.getElementById("h"+id).style.color="#ff2759";
            document.getElementById(i+"m").style.color="#ff2759";
            document.getElementById("s"+i).style.color="#ff2759";
        }
    }
    $("#mySidenav").fadeOut(200);
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the offset position of the navbar
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
var sticky = header.offsetTop+200;
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (window.pageYOffset > sticky && !isMobile) {
      document.getElementById("header-sticky").style.visibility="visible"
   $("#header-sticky").fadeIn(500);
  } else {
    $("#header-sticky").fadeOut(100);
  }
}
//to hide nav when website is opened
$("#mySidenav").fadeOut(1);
function openNav() {
  //document.getElementById("mySidenav").style.visibility="visible"
  $("#mySidenav").fadeIn(500);
  }
  
  function closeNav() {
    $("#mySidenav").fadeOut(200);
  }

  function check_form(){
    username=document.getElementById("name").value;
    subject=document.getElementById("subject").value;
    message=document.getElementById("message").value;
    number=document.getElementById("number").value;
    email=document.getElementById("email-form").value;
    if(username=='')
    {
      document.getElementById("error").innerHTML="*ENTER NAME!";
      document.getElementById("error").style.display="block";
      return false;
    }
    else if(number=='')
    {
      document.getElementById("error").innerHTML="*ENTER NUMBER!";
      document.getElementById("error").style.display="block";
      return false;
    }
    else if(email=='')
    {
      document.getElementById("error").innerHTML="*ENTER EMAIL!";
      document.getElementById("error").style.display="block";
      return false;
    }
    else if(subject=='')
    {
      document.getElementById("error").innerHTML="*ENTER SUBJECT!";
      document.getElementById("error").style.display="block";
      return false;
    }
    else if(message=='')
    {
      document.getElementById("error").innerHTML="*ENTER MESSAGE!";
      document.getElementById("error").style.display="block";
      return false;
    }
    
  }