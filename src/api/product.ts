import { UniqueProduct } from "../interfaces/product-interface"
import {ENV} from "../utils"

async function getUniqueProduct(id:number):Promise<UniqueProduct> {
    try {
        // const url = `${ENV.API_URL}${ENV.CONTENT.PRODUCTS}/${id}?populate=*`
        const url = `${ENV.API_URL}/productos/${id}?populate=*`
        
        const response = await fetch(url);

        if(response.status !== 200) throw response;
        return await response.json();
    } catch (error) {
        throw error
    }
}

export const productCtrl = {
    getOne: getUniqueProduct
}