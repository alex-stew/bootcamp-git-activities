const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://minesweeper1.p.rapidapi.com/boards/new?r=1&c=1&bombs=1",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "ff7e3222e3mshdcd61009ad7b766p16bb23jsn5a4be166eff1",
		"x-rapidapi-host": "minesweeper1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});