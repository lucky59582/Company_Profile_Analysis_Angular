
function openC(cName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
// 

function contactUs(){
  alert("Thank You for Contacting Us! \n Our Team will get back to you soon:)");
  window.location.reload()
}
 