import { User } from "../interfaces/user-interface";
import {ENV} from "../utils"

async function loginUser(identifier:string, password:string):Promise<User>{
    try {
        const url = `${ENV.API_URL}/auth/local`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier,
                password
            })
        });

        if (response.status!== 200 ) throw response;
        
        
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export const userCtl = {
    login:loginUser
}