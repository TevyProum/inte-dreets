// Tabs desktop
$(document).on('click', '.tab-filter', function() {
  $('.tab-filter').removeClass('active');
  $(this).removeClass('current');
  $(this).addClass('active');
  $(this).addClass('current');
  
  var tab_id = $(this).attr('data-tab');
  $('.tab-content').removeClass('current');
  $('#'+tab_id).addClass('current');
});

// Tabs mobile
$(document).on('change', '.tabsMobile select', function() {
  var tab_id = this.value;
  $('.tab-content').removeClass('current');
  $('#'+tab_id).addClass('current');
  document.location.href = '#'+tab_id;  
});

// Tabs-action desktop
$(document).on('click', '.action-filter', function() {
  $('.action-filter').removeClass('active');
  $(this).removeClass('current');
  $(this).addClass('active');
  $(this).addClass('current');
  
  var tab_id = $(this).attr('data-action');
  $('.action-content').removeClass('current');
  $('#'+tab_id).addClass('current');
});

// Tabs-action toggle mobile
$(document).on('click', '.actionTab .toggle', function() {
  $('.actionTab .toggle').toggleClass('active');
  $('.actionTab ul').toggleClass('active');
});

// Fixed au scroll
var positionTabs = $('.tabs').offset().top;
var positionTabsMobile = $('.tabsMobile').offset().top;

$(window).scroll(() => {
    if (($(window).scrollTop() >= (positionTabs || positionTabsMobile))) {
        $('.tabs').addClass("fixed");
        $('#tabs').addClass("height");
        $('.dropdown').addClass("fixedMobile");
        $('#tabs').addClass("heightMobile");
    } 
    else {
        $('.tabs').removeClass("fixed");
        $('#tabs').removeClass("height");
        $('.dropdown').removeClass("fixedMobile");
        $('#tabs').removeClass("heightMobile");
    }
});