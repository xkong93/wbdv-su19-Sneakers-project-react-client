export default class ProductService {
    url = "http://localhost:8080/api/";
        urlHeroku = 'https://peaceful-savannah-55840.herokuapp.com/api/'

    static myInstance = null;


    static getInstance() {
        if (ProductService.myInstance == null) {
            ProductService.myInstance = new ProductService();
        }
        return this.myInstance;
    }

    createProduct = (urlKey) => {
        return fetch(this.urlHeroku + `product/${urlKey}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }})
        }


        //trick! fetch hell
        addProduct = (urlKey, uid) =>
            fetch(this.urlHeroku + "product/" + urlKey)
                .then(res => {
                    if (res.status == 200) {
                        //product already exists
                        return fetch(this.urlHeroku + `user/${uid}/product/${urlKey}`)
                            .then(response => response) //this will response a status code
                    } else {
                        //create new product
                        return fetch(this.urlHeroku + `product/${urlKey}`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            }
                        }).then(() => fetch(this.urlHeroku + `user/${uid}/product/${urlKey}`))
                            .then(res =>
                                res
                            )
                    }
                })

        addProductForEditor = (urlKey, eid) =>
            fetch(this.urlHeroku + "product/" + urlKey)
                .then(res => {
                    if (res.status == 200) {
                        //product already exists
                        return fetch(this.urlHeroku + `editor/${eid}/product/${urlKey}`)
                            .then(response => response) //this will response a status code
                    } else {
                        //create new product
                        return fetch(this.urlHeroku + `product/${urlKey}`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            }
                        }).then(() => fetch(this.urlHeroku + `editor/${eid}/product/${urlKey}`))
                            .then(res =>
                                res
                            )
                    }
                })
        findAllProduct = () =>
            fetch(this.urlHeroku + 'product').then(response => response.json())

        findProductByUrlKey = (urlKey) =>
            fetch(this.urlHeroku + 'product/getId/' + urlKey).then(response => response.json())


    }
