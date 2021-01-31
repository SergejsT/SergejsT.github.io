$(document).ready(function(){
   
    $('ul.catalog_tabs').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.container').find('div.catalog_content').removeClass('active').eq($(this).index()).addClass('active');
      });
      

});