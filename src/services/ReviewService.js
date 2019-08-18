export default class ReviewService {
    url = "https://wbdev-su19-project-server.herokuapp.com/api/";
    urlHeroku = 'https://peaceful-savannah-55840.herokuapp.com/api/'


    static myInstance = null;


    static getInstance() {
        if (ReviewService.myInstance == null) {
            ReviewService.myInstance = new ReviewService();
        }
        return this.myInstance;
    }

    findAllReview=()=>
        fetch(this.url + "review").then(response => response.json())

    createReview = (review, uid, pid)=>
        fetch(this.url+`user/${uid}/product/${pid}/review`, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res)

    deleteReview =(rid) =>
        fetch(this.url + "review/" + rid, {
            method: 'DELETE'
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
