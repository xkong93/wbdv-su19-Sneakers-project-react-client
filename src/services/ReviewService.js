export default class ReviewService {
    url = "http://localhost:8080/api/";

    static myInstance = null;


    static getInstance() {
        if (ReviewService.myInstance == null) {
            ReviewService.myInstance = new ReviewService();
        }
        return this.myInstance;
    }

    createReview = (review, uid, pid)=>
        fetch(this.url+`user/${uid}/product/${pid}/review`, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'content-type': 'application/json'
            }
        })

    getReviewsForProduct = (urlKey) =>
        fetch(this.url + `product/${urlKey}/review`)
            .then(res =>
                     res.json()
            )


    getRatingForPorduct = (urlKey) =>
        fetch(this.url + `product/${urlKey}/rating`)
            .then(res =>
                     res.json()
            )

    getReviewsByUser = (uid) =>
        fetch(this.url + `user/${uid}/review`)
            .then( res =>{
                if(res.status == 200){
                    return res.json();
                }else{
                    return []
                }
            })

}
