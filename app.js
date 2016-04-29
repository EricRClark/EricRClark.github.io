$(document).ready(function() {
    page.init();
});

var page = {
    init: function() {
        page.styling();
        page.events();
          },

    styling: function() {
            page.projectsGet();
            page.contactGet();
            page.aboutGet();
          },

    events: function() {
      $('.button.-projects').on('click', page.projectsGet);
      $('.button.-contact').on('click', page.contactGet);
      $('.button.-about').on('click', page.aboutGet);
          },

    projectsGet: function () {
      var tmpl = _.template(template.projectsTemplate)
    }
}
