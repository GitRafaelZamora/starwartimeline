apiURL = 'http://dev-starwarstimeline.pantheonsite.io/api/movies';

new Vue({
    el: '#app', 
    data: {
        hello: 'Hello World Again!',
        movies: ''
    },
    ready: function() {
        this.getMovies();
    },
    methods: {
        getMovies: function() {

            var settings = {
              "async": true,
              "crossDomain": true,
              "url": "http://dev-starwarstimeline.pantheonsite.io/api/movies",
              "method": "GET",
              "headers": {
                "cache-control": "no-cache",
              }
            }
            let that = this;
            $.ajax(settings).done(function (movies) {
                that.$set('movies', movies);
                console.log(movies);
            });
        }
    }
})