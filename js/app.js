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
            this.$http.get(apiURL, function(movies) {
                this.$set('movies', movies);
                console.log(movies);
            });
        }
    }
})