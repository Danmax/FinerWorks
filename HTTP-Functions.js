
import { ok, badRequest } from 'wix-http-functions';

//https://info729926.wixsite.com/thrivingsolutions/_functions/shareMyInfo


export async function get_shareMyInfo(request) {
    const response = {
        "headers": {
            "Content-Type": "application/json"
        }
    }
    const info = [{
        name:"Daniel Maldonado" , agencySite: "https://ThrivingSolutionsLLC.com", email:"dev@ThrivingSolutionsllc.com" , phone: "407-555-7865", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img3" , state: "Work In Progress"
    },
    {
        name:"Yaneisy Maldonado" , agencySite: "https://ThrivingSolutionsLLC.com", email:"info@thrivingsolutionsllc.com" , phone: "407-731-5555", city:"Orlando" , bookings: "https://ThrivingSolutionsLLC.com/Bookings", img:"/img4" , state: "Work In Progress"
    },
    }]
    response.body = info
    return ok(response);
}
    
