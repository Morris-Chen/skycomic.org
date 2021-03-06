define([], function () {
	var tabs = ['.horizon-tabs > li > a'];
	_.each(tabs, function (a) {
		var $a = $(a);
		$a.live('click', function () {
			var $li = $(this).parent(),
				$activeLi = $li.parent().find('li.active');
			$($activeLi.attr('data-tab')).removeClass('active');
			$($li.attr('data-tab')).addClass('active');
			$activeLi.removeClass('active');
			$li.addClass('active');
			if (a != '.horizon-tabs > li > a') {
				return false;
			}
		});
	});
});