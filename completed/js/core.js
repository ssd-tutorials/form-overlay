var formObject = {
	urlForm : '/mod/process.php',
	overlayDiv : '<div id="overlay"><div class="overlay"><div class="loader"></div></div></div>',
	resize : function(form) {
		if (form.length > 0) {
			var tableWidth = form.children('table').outerWidth();
			form.width(tableWidth);
		}
	},
	clickSubmit : function(obj) {
		obj.live('click', function() {
			$(this).closest('form').submit();
			return false;
		});
	},
	fieldSubmit : function(obj) {
		obj.live('keypress', function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 13) {
				$(this).closest('form').submit();
				return false;
			}
		});
	},
	process : function(form) {
		form.live('submit', function() {
			var thisForm = $(this);
			formObject.appendOverlay(thisForm);
			
			jQuery.post(formObject.urlForm, function(data) {
				
				var delay = setTimeout(function() {
					formObject.removeOverlay(thisForm);
				}, 3000);
				
			});
			
			return false;
		});
	},
	appendOverlay : function(form) {
		form.find('input').attr('disabled', true);
		var formWidth = form.width();
		var formHeight = form.height();
		var formPosition = form.position();
		$('body').append(formObject.overlayDiv);
		$('#overlay').css({
			'left' : formPosition.left + 'px',
			'top' : formPosition.top + 'px'
		});
		$('#overlay, .overlay').css({
			'width' : formWidth + 'px',
			'height' : formHeight + 'px'
		});
		$('#overlay').fadeIn(300);
	},
	removeOverlay : function(form) {
		$('#overlay').fadeOut(300, function() {
			form.find('input').attr('disabled', false);
			$(this).remove();
		});
	}
};
$(function() {

	formObject.resize($('.formOverlay'));
	formObject.clickSubmit($('.button'));
	formObject.fieldSubmit($('.field'));
	formObject.process($('.formOverlay'));

});