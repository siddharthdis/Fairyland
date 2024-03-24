// Get the modal
var modal = document.getElementsByClassName("modal")[0];

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img1 = document.getElementById("img1");
//var img2= document.getElementById("img2");
var img = document.getElementsByClassName("galleryimage")[0];
var modalImg = document.getElementsByClassName("modal-content")[0];
var captionText = document.getElementById("caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



var modal1 = document.getElementsByClassName("modal")[1];

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img1 = document.getElementById("img1");
//var img2= document.getElementById("img2");
var img1 = document.getElementsByClassName("galleryimage")[1];
var modalImg1 = document.getElementsByClassName("modal-content")[1];
var captionText1 = document.getElementById("caption");
img1.onclick = function() {
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}







var modal2 = document.getElementsByClassName("modal")[2];

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img1 = document.getElementById("img1");
//var img2= document.getElementById("img2");
var img2 = document.getElementsByClassName("galleryimage")[2];
var modalImg2 = document.getElementsByClassName("modal-content")[2];
var captionText2 = document.getElementById("caption");
img2.onclick = function() {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[2];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}






var modal3 = document.getElementsByClassName("modal")[3];
var img3 = document.getElementsByClassName("galleryimage")[3];
var modalImg3 = document.getElementsByClassName("modal-content")[3];
var captionText3 = document.getElementById("caption");
img3.onclick = function() {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
}
var span3 = document.getElementsByClassName("close")[3];
span3.onclick = function() {
  modal3.style.display = "none";
}




var modal4 = document.getElementsByClassName("modal")[4];
var img4 = document.getElementsByClassName("galleryimage")[4];
var modalImg4 = document.getElementsByClassName("modal-content")[4];
var captionText4 = document.getElementById("caption");
img4.onclick = function() {
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
}
var span4 = document.getElementsByClassName("close")[4];
span4.onclick = function() {
  modal4.style.display = "none";
}



var modal5 = document.getElementsByClassName("modal")[5];
var img5 = document.getElementsByClassName("galleryimage")[5];
var modalImg5 = document.getElementsByClassName("modal-content")[5];
var captionText5 = document.getElementById("caption");
img5.onclick = function() {
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
}
var span5 = document.getElementsByClassName("close")[5];
span5.onclick = function() {
  modal5.style.display = "none";
}




var modal6 = document.getElementsByClassName("modal")[6];
var img6 = document.getElementsByClassName("galleryimage")[6];
var modalImg6 = document.getElementsByClassName("modal-content")[6];
var captionText6 = document.getElementById("caption");
img6.onclick = function() {
  modal6.style.display = "block";
  modalImg6.src = this.src;
}
var span6 = document.getElementsByClassName("close")[6];
span6.onclick = function() {
  modal6.style.display = "none";
}




var modal7 = document.getElementsByClassName("modal")[7];
var img7 = document.getElementsByClassName("galleryimage")[7];
var modalImg7 = document.getElementsByClassName("modal-content")[7];
var captionText7 = document.getElementById("caption");
img7.onclick = function() {
  modal7.style.display = "block";
  modalImg7.src = this.src;
}
var span7 = document.getElementsByClassName("close")[7];
span7.onclick = function() {
  modal7.style.display = "none";
}





var modal8 = document.getElementsByClassName("modal")[8];
var img8 = document.getElementsByClassName("galleryimage")[8];
var modalImg8 = document.getElementsByClassName("modal-content")[8];
var captionText8 = document.getElementById("caption");
img8.onclick = function() {
  modal8.style.display = "block";
  modalImg8.src = this.src;
}
var span8 = document.getElementsByClassName("close")[8];
span8.onclick = function() {
  modal8.style.display = "none";
}





var modal10 = document.getElementsByClassName("modal")[9];
var img10 = document.getElementsByClassName("galleryimage")[9];
var modalImg10 = document.getElementsByClassName("modal-content")[9];
var captionText10 = document.getElementById("caption");
img10.onclick = function() {
  modal10.style.display = "block";
  modalImg10.src = this.src;
}
var span10 = document.getElementsByClassName("close")[9];
span10.onclick = function() {
  modal10.style.display = "none";
}



var modal11 = document.getElementsByClassName("modal")[10];
var img11 = document.getElementsByClassName("galleryimage")[10];
var modalImg11 = document.getElementsByClassName("modal-content")[10];
var captionText11 = document.getElementById("caption");
img11.onclick = function() {
  modal11.style.display = "block";
  modalImg11.src = this.src;
}
var span11 = document.getElementsByClassName("close")[10];
span11.onclick = function() {
  modal11.style.display = "none";
}


var modal12 = document.getElementsByClassName("modal")[11];
var img12 = document.getElementsByClassName("galleryimage")[11];
var modalImg12 = document.getElementsByClassName("modal-content")[11];
var captionText12 = document.getElementById("caption");
img12.onclick = function() {
  modal12.style.display = "block";
  modalImg12.src = this.src;
}
var span12 = document.getElementsByClassName("close")[11];
span12.onclick = function() {
  modal12.style.display = "none";
}



function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

