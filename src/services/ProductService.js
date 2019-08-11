export default class ProductService{
    url = "http://localhost:8080/api/";
    static myInstance = null;


    static getInstance() {
        if (ProductService.myInstance == null) {
            ProductService.myInstance = new ProductService();
        }
        return this.myInstance;
    }

    findAllProduct =() =>
        fetch(this.url +'product').then(response => response.json())
}
