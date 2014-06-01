(function(window,$) {

	/* =======================================================================
	Constructer
	========================================================================== */
	$(document).ready(function(){

		showArticle();

		return false;

	});

	/* =======================================================================
	Show Article
	========================================================================== */
	function showArticle() {

		var $parent = $("#selectTitle");
		var h       = $parent.height();
		var $btn    = $parent.find("li");

		$btn.on('click', function() {

			var num = $btn.index(this) + 1;

			$parent.animate({
				'marginTop': -h*num
			});

			return false;
			
		});


		return false;

	}


	return false;


})(window,jQuery);