import { Categories } from "../interfaces/category-interface";
import {ENV} from "../utils"

async function getAllCategories():Promise<Categories> {
    try {
        // const url = `${ENV.API_URL}${ENV.CONTENT.CATEGORY}?populate=*`
        const url = `${ENV.API_URL}/categorias?populate=*`;
        const response = await fetch(url);
        
        if (response.status !== 200 ) throw response;

        return await response.json();
        
    } catch (error) {
        throw error
    }
}

export const categoryCtrl = {
    getAll: getAllCategories
}