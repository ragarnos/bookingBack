// import * as offer from "./variables.js";
const offer = require("./variables.js");
const func = require("./util.js");
const http = require("http");
const fs = require("fs");
// function generationOffer(index){
//     return {  
//         id: index + 1,
//         author: {
//             avatar: `img/avatars/user0${func.getRandomInt(offer.avatarCount.min, offer.avatarCount.max)}.png`
//         },
//         hotelOffer: {
//             title: offer.TitleHotel[func.getRandomInt(0, offer.TitleHotel.length - 1)],
//             description: offer.description[func.getRandomInt(0, offer.description.length - 1)],
//             photos: func.randomUniqueArray(offer.photos),
//             address: `${func.getRandomFloat(offer.locationX.min, offer.locationX.max)}, ${func.getRandomFloat(offer.locationY.min, offer.locationY.max)}`,
//             price: func.getRandomInt(offer.PriceCount.min, offer.PriceCount.max),
//             type: offer.type[func.getRandomInt(0, offer.type.length - 1)],
//             rooms: func.getRandomInt(offer.roomsCount.min, offer.roomsCount.max),
//             guests: func.getRandomInt(offer.guestsCount.min, offer.guestsCount.max),
//             checkin: offer.checkin[func.getRandomInt(0, offer.checkin.length - 1)],
//             checkout: offer.checkout[func.getRandomInt(0, offer.checkout.length - 1)],
//             Features: func.randomUniqueArray(offer.Features),
//             location: {
//                 x: func.getRandomFloat(offer.locationX.min, offer.locationX.max),
//                 y: func.getRandomFloat(offer.locationY.min, offer.locationY.max)
//             }
//         }
//     }
// }
// const HotelDataOffer = new Array(offer.CountHotel).fill(null).map((e, index) => generationOffer(index));


// fs.writeFileSync("offert.txt", JSON.stringify(HotelDataOffer));


http.createServer((req, res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, UPDATE");
    res.writeHead(200, { "Content-Type": "application/json" });
    const url = req.url;
    let body = "";

    if (req.method === "POST"){
        console.log('попал в пост');
        if (url === "/offert") {
            req.on("data", (data) =>{
                body += data.toString(); 
            });
            req.on("end", () => {
                if(fs.readFileSync("offert.txt").toString('utf-8') == ''){
                    fs.writeFileSync("offert.txt", JSON.stringify(body));
                }else{
                    const bodyNew = JSON.parse(body);
                    const PhotoUOffer = JSON.parse(fs.readFileSync("offert.txt"));;
                    PhotoUOffer.push(bodyNew);
                    fs.writeFileSync("offert.txt", JSON.stringify(PhotoUOffer));
                }
            });
            res.write(fs.readFileSync("offert.txt"));
            res.end();
        }
    }else if (req.method === "GET"){
        console.log('попал в ГЕТ');
        if(url === "/offert"){
            const HotelResult = fs.readFileSync("offert.txt", "utf-8");
            res.end(HotelResult);
        }else if(HotelResult.status !== 200){
            res.end("Unable to find this photo")
        }
    }
}).listen(3001);
