import { getJSON, fetch } from "wix-fetch";
import {Permissions, webMethod} from "wix-web-module";


// export function getAstrosDataold() {

//     return getJSON('http://api.open-notify.org/astros.json')
//     .then((json) => {
//         return json
//     })
// }

export const getAstrosData = webMethod(Permissions.Anyone, () => {
    return getJSON('http://api.open-notify.org/astros.json')
    .then((json) => {
        return json
    })
})


export const getAstros= webMethod(Permissions.Anyone, async() => {
    let results = await getJSON('http://api.open-notify.org/astros.json')
    return results
})



export const getFreeDog = webMethod(Permissions.Anyone, async() =>{
    let results = await getJSON('https://dog.ceo/api/breeds/image/random')
    return results
})



export const getFreeDog1 = webMethod(Permissions.Anyone, async() =>{
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data
});

export const getAgency = webMethod(Permissions.Anyone, async(url) =>{
    const response = await fetch(url);
    const data = await response.json();
    return data
});

