$(document).ready(function() {
  $.get(
    "https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-12&sortBy=publishedAt&apiKey=503f3230564f4ed3b78a5c344507bdbe",
  ).done(function(result) {
    console.log(result);
    $(".title").append(`<h4>${result.articles[12].title}</h4>`);
    $(".newsPic").append(`<img src="${result.articles[12].urlToImage}" style="width: 100%;
    height: 100%;">`);
  })

  var slideIndex = 0;
  var slides = document.getElementsByClassName("mySlides");

  showSlides();

  function showSlides() {
     var i;
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex> slides.length) {slideIndex = 1}
     slides[slideIndex-1].style.display = "block";
     setTimeout(showSlides, 3000); // Change image every 5 seconds
  }

  function currentSlide(no) {
     var i;
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     slideIndex = no;
     slides[no-1].style.display = "block";
  }

  function plusSlides(n) {
   var newslideIndex = slideIndex + n;
   if(newslideIndex < 5 && newslideIndex > 0){
      currentSlide(newslideIndex);
   }
  }
})
