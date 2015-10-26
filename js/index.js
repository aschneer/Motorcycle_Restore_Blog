// FIGURE OUT A WAY TO SET THE HTTP QUERY PARAMETERS
// IF THE SITE IS JUST OPENED FROM A LINK OR THE
// ADDRESS IS TYPED IN.  IN THE CASE WHERE THE USER
// DOESN'T TYPE THE SPECIFIC PAGE INDEX AS A QUERY
// PARAMETER, THE SITE SHOULD STILL BE ABLE TO GO
// TO THE HOME PAGE.

// ALSO, IF THE USER JUST GOES TO THE HOME PAGE,
// THERE WON'T BE ANY QUERY PARAMETERS.  THIS IS
// OKAY BECAUSE WE CAN JUST CALL THE INDEX ZERO
// IF NONE IS SPECIFIED AND THE HOME PAGE WILL
// BE SHOWN, HOWEVER IT CAUSES ANOTHER PROBLEM.
// IF THE USER REFRESHES THE PAGE, IT WILL GO
// BACK TO THE HOME PAGE UNLESS THERE IS A WAY
// TO INSERT THE CURRENT PAGE INDEX NUMBER INTO
// THE HTTP ADDRESS AS A QUERY PARAMETER.

// FIGURE OUT A WAY TO PROGRAMMATICALLY ADD TEXT
// TO THE HTTP ADDRESS USING JAVASCRIPT.

// Location where the sitemap CSV is stored.
var siteMapURL = "./data/siteMap.csv";
var siteMap = [[]];
var description = "Motorcycle Restore Blog";
var page_start = 0;
// THIS HTTP QUERY PARAMETER MUST
// BE A 3 DIGIT NUMBER.
var page_current = 000;
var page = {
	index: 0,
	name: "BLANK",
	title: "BLANK",
	date_weekday: "BLANK",
	date_month: 0,
	date_day: 0,
	date_year: 0,
};
var pages = [];




$(document).ready(function(){
	init();
});

function init()
{
	page_current = getPage();
	loadData();
	render_head();
	render_body();
}

function getPage()
{
	var query = window.location.search.substring(0);
	if(query.charAt(0) == "?")
	{
		if(query.substr(1,6) == "index=")
		{
			return parseInt(query.substr(7,3));
		}
	}
	return 0;
}

function loadData()
{
	// Grab site map from CSV file.
	var ajaxObj_siteMap = $.ajax({
		type: "GET",
		url: siteMapURL,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		dataType: "text",
		async: true,
		error: function(jqXHR, textStatus, errorThrown){
			console.log("Error: " + textStatus);
			console.log(errorThrown);
		},
		success: function(data, textStatus, jqXHR){
			$.csv.toArrays(data, {}, function(err, dataOut){
				siteMap = dataOut;
				console.log(siteMap.length);
				for(var i = 1; i < (siteMap.length-1); i++)
				{
					pages[siteMap[i][0]] = {
						index: siteMap[i][0],
						name: siteMap[i][1],
						title: siteMap[i][2],
						date_weekday: siteMap[i][3],
						date_month: siteMap[i][4],
						date_day: siteMap[i][5],
						date_year: siteMap[i][6],
					};
				}
				console.log(pages);
			})
		}
	});
}

function render_head()
{
}

function render_body()
{
	$("body").append("<header></header>");

	// ADD FUNCTION CALLS HERE TO RENDER
	// ALL THE PICTURES AND CAPTIONS BY CALLING
	// SINGLE, DOUBLE, OR TRIPLE PICTURE FUNCTIONS.

}

function addPhotos(numInRow, addresses)
{
	// numInRow is the number of pictures desired in the row.
	// addresses is an array of the addresses of the desired pictures.
}

function addCaption(text)
{
	// text is the full string text of the caption.
	// Multiple paragraphs are included in this string if necessary.
}