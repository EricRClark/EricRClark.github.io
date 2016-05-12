$(document).ready(function() {
    page.init();
$(".flip").hover(function(){
  $(this).find(".card").toggleClass("flipped");
  return false;
})

$('.slider2').bxSlider({
    slideWidth: 300,
    minSlides: 2,
    maxSlides: 2,
    slideMargin: 10
  });
});
// var page = {
//     init: function() {
//         page.styling();
//         page.events();
//           },
//
//     styling: function() {
//             page.projectsGet();
//             page.contactGet();
//             page.aboutGet();
//           },
//
//     events: function() {
//       $('.button.-projects').on('click', page.projectsGet);
//       $('.button.-contact').on('click', page.contactGet);
//       $('.button.-about').on('click', page.aboutGet);
//           },
//
//     projectsGet: function () {
//       var tmpl = _.template(template.projectsTemplate)
//     }
// }
