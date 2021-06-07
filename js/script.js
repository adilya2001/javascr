"use strict";

const numberOfFilms = prompt('How many films have you watched','');

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors:{},
genres : [],
privat: false
};

const a = prompt('what was the last one?', ''),
b = prompt('Whats the rait?',''),
c = prompt('what was the last one?', ''),
d = prompt('Whats the rait?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

