import { LightningElement ,wire} from 'lwc';
import getProducts from '@salesforce/apex/ProductsManager.getAllProducts'
export default class ProductDetails extends LightningElement {

    prodresult;
    errors;
    @wire(getProducts)
    getProds({error,data}){
        if(data){
            this.prodresult=data;
        } 
    else if(error) {
        this.errors=error;
    }
}
}