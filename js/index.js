// Parameters:

var description = "Motorcycle Restore Blog";

$(document).ready(function(){
	$("body").html("<p>hello</p>");
	init();
});

function init()
{
	render_head();
	render_body();
}

function render_head()
{

}

function render_body()
{
	$("body").append("<header></header>");
	$("body header").append("<div class='hello'></div>");
}