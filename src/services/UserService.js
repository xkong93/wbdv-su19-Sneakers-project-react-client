export default class UserService {
    url = "http://localhost:8080/api/";
    urlHeroku = 'https://peaceful-savannah-55840.herokuapp.com/api'
    static myInstance = null;


    static getInstance() {
        if (UserService.myInstance == null) {
            UserService.myInstance = new UserService();
        }
        return this.myInstance;
    }

    login = (user) =>
        fetch(this.urlHeroku + "login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include'//required
        }).then(res => res)

    getPortfolioForUserByUserId = (uid) =>{
        return fetch(this.urlHeroku +`user/${uid}/portfolio`)
            .then(response => response.json())
        }
}
