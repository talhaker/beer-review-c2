let beers = [];

let addBeer = function(name, category, rating) {
    let beer = {
        beerName: name,
        beerCategory: category,
        beerRating: rating
    }
    beers.push(beer);
    // alert('Adding beer ' + name + ' into categiry ' + category);
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