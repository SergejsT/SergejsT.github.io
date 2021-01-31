let lang = document.getElementById("f_language");

//'Latvieski';
function lang_button_click(lang_f){
    if (lang_f == 'en') {
        lang.innerHTML = "English";
    } else if (lang_f == 'ru') {
        lang.innerHTML = "Русский";
    } else {
        lang.innerHTML = "Latviešu";
    } 

}

$(document).ready(function(){
   
    $('ul.navbar-nav').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.container').find('div.catalog_content').removeClass('active').eq($(this).index()).addClass('active');
      });
      

});