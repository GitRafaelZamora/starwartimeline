apiURL = 'http://localhost:8888/moviesapp/api/movies';

new Vue({
    el: '#app', 
    data: {
        movies: ''
    },
    ready: function() {
      this.getMovies();
    },
    methods: {
        getMovies: function() {
          this.$http.get(apiURL, function(movies) {
            console.log(movies[1].url);
            this.$set('movies', movies.slice().sort(function (a, b) {
              var first = a.order;
              var second = b.order;
                if (first < second) return -1;
                if (first  > second) return 1;
                return 0;
              })
            );
          });
        },
    }
})