

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
    $('.collapsibleExp').collapsible('open', 0);
    $("#cvButton").on("click", downloadCV);
  });
  $(".dropdown-trigger").dropdown();

  function downloadCV(){
    window.open('/documents/CV_CASTREC_Killian.pdf');
  }