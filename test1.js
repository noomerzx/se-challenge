// Sort complex objects in javascript.  In the given example, we have a list of hotels that come from a data source.  We need to create a sorting function that will sort based on the following criteria.

// 1) Price - decimal
// 2) Popularity 
// 3) Previously Viewed

// Explain what sorting approach you are using (bubble, merge etc) and why this is performant.  Could it be improved? How would this scale to 1000's of objects?


// Functions
const generateHotelsList = (hotelCount) => {
    const hotels = [];
    const randomNumber = (min = 0, max = 1000) => {
        return Math.random() * (max - min) + min;
    }
    for (let i = 0; i < hotelCount; i++) {
        hotels.push({
            name: `Hotel #${i}`,
            price: randomNumber(100, 10000).toFixed(2),
            rank: randomNumber(0.1, 1).toFixed(2),
            viewed: Math.random() >= 0.5
        })
    }
    return hotels;
}

// This function use to sort by priority sequence (price > rank > viewed)
const sortHotels = (hotels) => {
    // Write your sorting logic here 
    let result = hotels.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price) || parseFloat(a.rank) - parseFloat(b.rank) || a.viewed - b.viewed
    })
    return result
}

// This function use to sort as same priority (price = rank = viewd)
const filterSortHotels = (hotels) => {
    // Write your sorting logic here 
    let viewedList = hotels.filter(item => item.viewed)
    let notViewList = hotels.filter(item => !item.viewed)
    viewedList = viewedList.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price)
    })
    notViewList = notViewList.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price) || parseFloat(a.rank) - parseFloat(b.rank)
    })
    return [...viewedList, ...notViewList]
}



// Operational 
const hotelList = generateHotelsList(5);
const sortedHotels = sortHotels(hotelList);
const sortedHotels2 = filterSortHotels(hotelList);

console.log(sortedHotels)
console.log(sortedHotels2)