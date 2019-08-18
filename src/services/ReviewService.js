export default class ReviewService {
    url = "http://localhost:8080/api/";
    urlHeroku = 'https://peaceful-savannah-55840.herokuapp.com/api/'

    static myInstance = null;


    static getInstance() {
        if (ReviewService.myInstance == null) {
            ReviewService.myInstance = new ReviewService();
        }
        return this.myInstance;
    }

    findAllReview=()=>
        fetch(this.urlHeroku + "review").then(response => response.json())

    createReview = (review, uid, pid)=>
        fetch(this.urlHeroku+`user/${uid}/product/${pid}/review`, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res)

    deleteReview =(rid) =>
        fetch(this.urlHeroku + "review/" + rid, {
            method: 'DELETE'
        })


    getReviewsForProduct = (urlKey) =>
        fetch(this.urlHeroku + `product/${urlKey}/review`)
            .then(res =>
                     res.json()
            )


    getRatingForPorduct = (urlKey) =>
        fetch(this.urlHeroku + `product/${urlKey}/rating`)
            .then(res =>
                     res.json()
            )

    getReviewsByUser = (uid) =>
        fetch(this.urlHeroku + `user/${uid}/review`)
            .then( res =>{
                if(res.status == 200){
                    return res.json();
                }else{
                    return []
                }
            })

}
