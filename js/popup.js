
$(document).ready(function() {
	
	chrome.tabs.getSelected(null, function(tab) {
		    tabUrl = tab.url;
		    
		    $("#link").attr("src",tabUrl);
    	});   

	
    	var reply_click1 = function()
		{
			$('body').css("width", "400px");
		}

		var reply_click2 = function()
		{
		    $('body').css("width", "800px");
		}

		document.getElementById('boton1').onclick = reply_click1;
		document.getElementById('boton2').onclick = reply_click2;
});

