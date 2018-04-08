let beers = [];

let addBeer = function(name, category) {
    let beer = {
        beerName: name,
        beerCategory: category
    }
    beers.push(beer);
    // alert('Adding beer ' + name + ' into categiry ' + category);
}

let renderBeers = function() {
    // Empty current content of beers list
    let beersList = $('.beers-list');
    beersList.empty();
    beers.forEach(function(beer) {
        $("<li>" + beer.beerName + ", " + beer.beerCategory + "</li>").appendTo(beersList);
    });
}

let postBeerHandler = function() {
    let name = $('.beer-input').val();
    let category = $('.category-input').val();
    addBeer(name, category);
    renderBeers();
}

$('.post-beer').click(postBeerHandler);