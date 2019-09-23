export default class ProductService {
    // url = "https://wbdev-su19-project-server.herokuapp.com/api/";
    url = 'http://server.sneakerjunkies.life/api/'

    static myInstance = null;


    static getInstance() {
        if (ProductService.myInstance == null) {
            ProductService.myInstance = new ProductService();
        }
        return this.myInstance;
    }

    createProduct = (urlKey) => {
        return fetch(this.url + `product/${urlKey}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }})
        }


        //trick! fetch hell
        addProduct = (urlKey, uid) =>
            fetch(this.url + "product/" + urlKey)
                .then(res => {
                    if (res.status == 200) {
                        //product already exists
                        return fetch(this.url + `user/${uid}/product/${urlKey}`)
                            .then(response => response) //this will response a status code
                    } else {
                        //create new product
                        return fetch(this.url + `product/${urlKey}`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            }
                        }).then(() => fetch(this.url + `user/${uid}/product/${urlKey}`))
                            .then(res =>
                                res
                            )
                    }
                })

        addProductForEditor = (urlKey, eid) =>
            fetch(this.url + "product/" + urlKey)
                .then(res => {
                    if (res.status == 200) {
                        //product already exists
                        return fetch(this.url + `editor/${eid}/product/${urlKey}`)
                            .then(response => response) //this will response a status code
                    } else {
                        //create new product
                        return fetch(this.url + `product/${urlKey}`, {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            }
                        }).then(() => fetch(this.url + `editor/${eid}/product/${urlKey}`))
                            .then(res =>
                                res
                            )
                    }
                })
        findAllProduct = () =>
            fetch(this.url + 'product').then(response => response.json())

        findProductByUrlKey = (urlKey) =>
            fetch(this.url + 'product/getId/' + urlKey).then(response => response.json())


    }
