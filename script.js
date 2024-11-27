const inputElement = document.querySelector('input');
const translateButton = document.querySelector('#translateButton');
const lingala = document.querySelector('#lingala-word');

const tryThis = () => {
    let APIKEY = 'af02d8495c9d0aa3fb4c70065792a44f';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputElement.value}&appid=${APIKEY}`)
        .then(response => response.json())
        .then(json => lingala.innerHTML = json["weather"][0]["main"]);
};
                                                                                                                                                                                                                                                                                   
// async function getData(url = "http://localhost:8080/") {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error("Data not found")
//         }
//         const data = await response.json();
//     } catch (error) {
//         console.error("There was a problem with your fetch request: ", error);

//     }
// }

// let hello = getData().data;