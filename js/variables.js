
module.exports.CountHotel = 45;
module.exports.maxLenghTitle = 5;
module.exports.maxLenghDesc = 15;
module.exports.PriceCount = {
    min: 0,
    max: 13000
}
module.exports.avatarCount = {
    min: 1,
    max: 8
}
module.exports.locationX = {
    min: 35.65000,
    max: 35.70000
}
module.exports.locationY = {
    min: 139.70000,
    max: 139.80000
}

module.exports.roomsCount = {
    min: 1,
    max: 3,
    full: 100
}
module.exports.guestsCount = {
    min: 1,
    max: 3
}
module.exports.TitleHotel = [
    'San Pietro Grand Suite',
    'TIBERINA APARTMENTS - ROME TRASTEVERE',
    'Hotel Relais Dei Papi',
    'Nobildonne Relais',
    'Passepartout tower'
]

module.exports.description = [
    'This is our guests favorite part of Rome, according to independent reviews.',
    'Popular points of interest near TIBERINA APARTMENTS - ROME TRASTEVERE include Largo di Torre Argentina, Palazzo Venezia and Great Synagogue of Rome. The nearest airport is Rome Ciampino, 15 km from the accommodation, and the property offers a paid airport shuttle service.',
    'Just 500 m from Lepanto Metro Station on line A, Hotel Relais Dei Papi is 5 minutes’ walk from St. Peters Square and the Vatican Museums. All air-conditioned, rooms come with free Wi-Fi, flat-screen TV with pay-per-view channels, and a mini-bar.',
    'NOBILDONNE RELAIS is located in the Spagna district in Rome, 260 m from Via Condotti. It offers accommodations with frescoed ceilings and Venetian mosaic floors. Free WiFi is throughout.',
    'Popular points of interest near the accommodations include Torre Argentina, Pantheon and Castel Sant Angelo. The nearest airport is Rome Ciampino Airport, 9.3 mi from Passepartout.'
]

module.exports.type = [
    'palace',
    'flat',
    'house',
    'bungalow'
]

module.exports.checkin = [
    '12:00',
    '13:00',
    '14:00'
]
module.exports.checkout = [
    '12:00',
    '13:00',
    '14:00'
]

module.exports.Features = [
    'wifi', 
    'dishwasher', 
    'parking', 
    'washer',
    'elevator', 
    'conditioner'
]
module.exports.photos = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
]

module.exports.roomValid = {
    1:[1],
    2:[2,1],
    3:[3,2,1],
    100:[0]
}
module.exports.typePriceValid = {
    bungalow: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
}
