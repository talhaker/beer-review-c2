let beers = [];

let addBeer = function(name, category) {
    let beer = {
        beerName: name,
        beerCategory: category
    }
    beers.push(beer);
    // alert('Adding beer ' + name + ' into categiry ' + category);
}

let postBeerHandler = function() {
    let name = $('.beer-input').val();
    let category = $('.category-input').val();
    addBeer(name, category);
}

$('.post-beer').click(postBeerHandler);