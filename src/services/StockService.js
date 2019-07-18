export default class StockService {
    static myInstance=null;

    static getInstance() {
        if (StockService.myInstance == null) {
            StockService.myInstance =
                new StockService();
        }
        return this.myInstance;
    }

    //因为网站的api不是公共api 所以不能直接fetch 网上说什么违反cors policy
    //只能通过代理服务器模拟浏览器请求
    //看这篇文章：https://medium.com/netscape/hacking-it-out-when-cors-wont-let-you-be-great-35f6206cc646
    searchItem = (keyWords) =>
        fetch(`https://cors-anywhere.herokuapp.com/https://stockx.com/api/browse?_search=${keyWords}&dataType=product`)
            .then(response => response.json())

    obtainDetailInfo = (urlKey) =>
        fetch(`https://cors-anywhere.herokuapp.com/https://stockx.com/api/products/${urlKey}`)
            .then(response => response.json())
}
