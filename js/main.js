// import * as offer from "./variables.js";
const offer = require("./variables.js");
const func = require("./util.js");
const http = require("http");
const path = require('path');
const fs = require("fs");
const os = require("os");
const busboy = require('busboy');
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

function generatorOfferForm(arrayData) {
    return   {
                    id: func.getRandomInt(1, 5000),
                    author: {
                        avatar: arrayData.avatar
                    },
                    hotelOffer: {
                        title: arrayData.title,
                        description: arrayData.description,
                        photos: [arrayData.photos],
                        address: `${arrayData.locationX}, ${arrayData.locationY}`,
                        price: arrayData.price,
                        type: arrayData.type,
                        rooms: arrayData.rooms,
                        guests: arrayData.guests,
                        checkin: arrayData.checkin,
                        checkout: arrayData.checkout,
                        Features: arrayData.Features.split(','),
                        location: {
                            x: arrayData.locationX,
                            y: arrayData.locationY
                        }
                    }
                }
}
let houseArray = {};
http.createServer((req, res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.writeHead(200, { "Content-Type": "application/json" });
    const url = req.url;

    if (req.method === "POST"){
        console.log('попал в пост');
        if (url === "/offert") {
// фото
    const bb = busboy({ headers: req.headers });
        bb.on('file', (name, file, info) => {
            if(name == 'avatar'){
                const saveTo = path.join('img/avatars', `${Math.random().toString(36).substr(2, 15)}.jpg`);
                houseArray[name] = `http://${req.headers.host}/`+saveTo;
                file.pipe(fs.createWriteStream(saveTo));
            }else{
                const saveTo = path.join('img/house', `${Math.random().toString(36).substr(2, 15)}.jpg`);
                houseArray[name] = `http://${req.headers.host}/`+saveTo;
                file.pipe(fs.createWriteStream(saveTo));
            }
            
            
        file.on('data', (data) => {
            // console.log(`File [${name}] got ${data.length} bytes`);
        }).on('close', () => {
            // console.log(`File [${name}] done`);
        });
        });
        
        bb.on('field', (name, val, info) => {
            houseArray[name] = val;
        });
        
        bb.on('close', () => {
           const HotelDataOffer = generatorOfferForm(houseArray); 

           if(fs.readFileSync("offert.txt").toString('utf-8') == ''){
                    fs.writeFileSync("offert.txt", JSON.stringify([HotelDataOffer]));
                }else{
                    const bodyNew = HotelDataOffer;
                    const PhotoUOffer = JSON.parse(fs.readFileSync("offert.txt"));;
                    PhotoUOffer.push(bodyNew);
                    fs.writeFileSync("offert.txt", JSON.stringify(PhotoUOffer));
                }
            // res.write(fs.readFileSync("offert.txt"));
        res.end();
    });
    req.pipe(bb);
// фото енд

        }
    }else if (req.method === "GET"){
        console.log('попал в ГЕТ');
        if(url === "/offert"){
            const HotelResult = fs.readFileSync("offert.txt", "utf-8");
            res.end(HotelResult);
        }
    }
    let filePath = path.join(process.cwd(),url)
    let contentType = 'text/html';

    fs.readFile(filePath, (error, data) => {
        if (error) return
        
        res.writeHead(200, { 'Content-Type':  contentType })
        res.end(data, 'utf8')
    
    })
}).listen(3001);
