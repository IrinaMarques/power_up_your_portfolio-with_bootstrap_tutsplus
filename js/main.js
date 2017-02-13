// make the selection items appear in each category
var $grid = $('.portfolio-items').isotope('layout');

// filter items on button/a click
$('.portfolio-filter').on( 'click', 'a', function(e) {
	e.preventDefault();
  	var filterValue = $(this).attr('data-filter');
  	$grid.isotope({ filter: filterValue });
// pill navigation change
	$('.portfolio-filter li').removeClass('active');
	$(this).closest('li').addClass('active');
});

