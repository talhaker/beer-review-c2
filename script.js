let beers = [];
let beersSorted = false;

let addBeer = function(name, category, rating) {
    let beer = {
        beerName: name,
        beerCategory: category,
        beerRating: rating
    }
    beers.push(beer);
    beersSorted = false;
}

let renderBeers = function() {
    // Empty current content of beers list
    let beersList = $('.beers-list');
    beersList.empty();
    beers.forEach(function(beer) {
        $("<li>" + beer.beerName + " (" + beer.beerCategory + "), rating: " + beer.beerRating + "</li>").appendTo(beersList);
    });
}

let postBeerHandler = function() {
    let name = $('.beer-input').val();
    let category = $('.category-input').val();
    let rating = $('.rating-input option:selected').val();
    addBeer(name, category, rating);
    renderBeers();
}

$('.post-beer').click(postBeerHandler);


let sortBeers = function() {
    if (beersSorted) {
        beers.reverse();
    } else {
        beers.sort(function(a, b) {
            return (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0);
        });
        beersSorted = true;
    }

    renderBeers();
}

$('.sort-beers').click(sortBeers);