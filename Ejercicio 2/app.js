const API_URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=094ebe605ba5c3dde938ea23ec042b42&format=json&limit=10'

const lastUrl = API_URL
$.get(lastUrl, function(lastFM) {
    var artist_JSON = JSON.stringify(lastFM)
    var array_artista = JSON.parse(artist_JSON)

    for (i = 0; i < 10; i++) {
        console.log(`name: ${array_artista.artists.artist[i].name}, Playcount: ${array_artista.artists.artist[i].playcount}, Listeners: ${array_artista.artists.artist[i].listeners} `);
    }
});