export default class ReviewService {
    url = "http://localhost:8080/api/";

    static myInstance = null;


    static getInstance() {
        if (ReviewService.myInstance == null) {
            ReviewService.myInstance = new ReviewService();
        }
        return this.myInstance;
    }

    getReviewsForProduct = (urlKey) =>
        fetch(this.url + `product/${urlKey}/review`)
            .then(res => {
                if (res.status == 200) {
                    return res.json();
                }
            })


    getRatingForPorduct = (urlKey) =>
        fetch(this.url + `product/${urlKey}/rating`)
            .then(res => {
                if (res.status == 200) {
                    return res.json();
                }
            })

}
