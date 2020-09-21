let guest1Vegan = true;
let guest2Vegan = true;

if (guest1Vegan && guest2Vegan) {
    console.log('Only vegan food')
} else if (guest1Vegan || guest2Vegan) {
    console.log('Offer some vegan options')
} else {
    console.log('Anything')
}
