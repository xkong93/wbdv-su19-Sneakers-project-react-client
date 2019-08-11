export default class UserService {
    url = "http://localhost:8080/api/";
    urlHeroku = 'https://peaceful-savannah-55840.herokuapp.com/api/'
    static myInstance = null;


    static getInstance() {
        if (UserService.myInstance == null) {
            UserService.myInstance = new UserService();
        }
        return this.myInstance;
    }

    validate = () =>
        fetch(this.url +`user/validate`,{
    method: "GET",
    credentials: 'include'
}).then(response => response.json())

    register = (newUser) =>
        fetch(this.url + `register`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include'//required
        }).then(response => response.json())

    login = (user) =>
        fetch(this.url + `login`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include'//required
        }).then(response => response.json())

    logout = () =>
        fetch(this.url + `logout`, {
            method: "GET",
            credentials: 'include'//required
        }).then(response => response.json())


    getPortfolioForUserByUserId = (uid) =>{
        return fetch(this.url +`user/${uid}/portfolio`)
            .then(response => response.json())
        }
}
