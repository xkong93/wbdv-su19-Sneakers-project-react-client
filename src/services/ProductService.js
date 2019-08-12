export default class ProductService{
    url = "http://localhost:8080/api/";
    static myInstance = null;


    static getInstance() {
        if (ProductService.myInstance == null) {
            ProductService.myInstance = new ProductService();
        }
        return this.myInstance;
    }

    addProduct = (urlKey, uid)=>
        fetch(this.url+ "product/" + urlKey + "/" +uid, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }}).then(response => response.json())

    findAllProduct =() =>
        fetch(this.url +'product').then(response => response.json())
}
