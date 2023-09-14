
import { ok, badRequest } from 'wix-http-functions';

//https://info729926.wixsite.com/thrivingsolutions/_functions/shareMyInfo


export async function get_shareMyInfo(request) {
    const response = {
        "headers": {
            "Content-Type": "application/json"
        }
    }
    const info = [{
        name:"Daniel Maldonado" , agencySite: "https://ThrivingSolutionsLLC.com", email:"dev@ThrivingSolutionsllc.com" , phone: "407-742-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img03" , state: "New"
    },
    {
        name:"Yaneisy Maldonado" , agencySite: "https://ThrivingSolutionsLLC.com", email:"info@thrivingsolutionsllc.com" , phone: "407-747-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img04" , state: "Work In Progress"
    },
    {
        name:"Emmanuel Maldonado" , agencySite: "https://ThrivingSolutionsLLC.com", email:"Emmanuel@thrivingsolutionsllc.com" , phone: "407-785-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img05" , state: "Work In Progress"
    },
    {
        name:"Isaias Maldonado" , agencySite: "https://ThrivingSolutionsLLC.com", email:"Isaias@thrivingsolutionsllc.com" , phone: "407-765-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img06" , state: "Work In Progress"
    },
    {
        name:"Natalia Maldonado" , agencySite: "https://ThrivingSolutionsLLC.com", email:"natalia@thrivingsolutionsllc.com" , phone: "407-715-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img07" , state: "Work In Progress"
    },
    {
        name:"Bruno Maldonado" , agencySite: "https://ThrivingSolutionsLLC.com", email:"bruno@thrivingsolutionsllc.com" , phone: "407-757-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img08" , state: "Work In Progress"
    },
    {
        name:"Carmen Maria Perez Garcia" , agencySite: "https://ThrivingSolutionsLLC.com", email:"carmen@thrivingsolutionsllc.com" , phone: "407-784-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img09" , state: "Retired"
    },
    {
        name:"Melisa Nieves" , agencySite: "https://Go180Realty.com", email:"melisa@thrivingsolutionsllc.com" , phone: "407-781-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img02" , state: "Fulfillment"
    },
    {
        name:"Joe Nieves" , agencySite: "https://Go180Realty.com", email:"melisa@thrivingsolutionsllc.com" , phone: "407-780-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img12" , state: "Running"
    },
    {
        name:"Jayden Nieves" , agencySite: "https://Go180Realty.com", email:"melisa@thrivingsolutionsllc.com" , phone: "407-786-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img13" , state: "Work In Progress"
    },
    {
        name:"Jadier Nieves" , agencySite: "https://Go180Realty.com", email:"melisa@thrivingsolutionsllc.com" , phone: "407-787-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img14" , state: "Work In Progress"
    },
    {
        name:"Sophia Nieves" , agencySite: "https://Go180Realty.com", email:"melisa@thrivingsolutionsllc.com" , phone: "407-788-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img11" , state: "Work In Progress"
    },

]
    response.body = info
    return ok(response);
}
    
