export default class StockService {
    static myInstance = null;

    static getInstance() {
        if (StockService.myInstance == null) {
            StockService.myInstance =
                new StockService();
        }
        return this.myInstance;
    }


    //since this is an unofficial api, we need to use a proxy server to fetch json data
    // otherwise it will violate CORS policy and fail to fetch json data
    //read this article https://medium.com/netscape/hacking-it-out-when-cors-wont-let-you-be-great-35f6206cc646
    searchItem = (keyWords) =>
        fetch(`https://cors-anywhere.herokuapp.com/https://stockx.com/api/browse?_search=${keyWords}&dataType=product`)
            .then(response => response.json())

    obtainDetailInfo = (urlKey) =>
        fetch(`https://cors-anywhere.herokuapp.com/https://stockx.com/api/products/${urlKey}?includes=market&currency=USD`).then(response => response.json())
}
