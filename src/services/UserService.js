export default class UserService {
    // url = "http://www.webdev5610.site/api/";
    url2 = "http://localhost:8080/api/";
    url = 'https://peaceful-savannah-55840.herokuapp.com/api/'
    static myInstance = null;


    static getInstance() {
        if (UserService.myInstance == null) {
            UserService.myInstance = new UserService();
        }
        return this.myInstance;
    }

    createUser = (User) =>
        fetch(this.url + 'user', {
            method: 'POST',
            body: JSON.stringify(User),
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include'//required

        }).then(res => res)

    login = (user) =>
        fetch(this.url + "login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include'//required
        }).then(res => {
            if (res.status == 200) {
                return res.json()
            }
        })

    findUserByUsername = (uname) =>
        fetch(this.url + "username/" + uname).then(response => response.json())

    findUserById = (uid) =>
        fetch(this.url + "user/" + uid).then(response => response.json())

    getProductsForUser = (uid) =>
        fetch(this.url + "user/" + uid + "/product").then(response => response.json())

    getPortfolioForUserByUserId = (uid) => {
        return fetch(this.url + `user/${uid}/portfolio`)
            .then(response => response.json())
    }

    getPortfolioForEditorByEditorId = (eid) => {
        return fetch(this.url + `user/${eid}/collection`)
            .then(response => response.json())
    }
    getPublicProfileForUserByUserId = (uid) => {
        return fetch(this.url + `user/${uid}/publicProfile`)
            .then(response => response.json())
    }


    getPrivateProfileForUserByUserId = (uid) => {
        return fetch(this.url + `user/${uid}/privateProfile`, {
            credentials: 'include'//required

        }).then(response => response.json())
    }

    updateUser = (user, uid) =>
        fetch(this.url + "user/" + uid, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
                        credentials: 'include'//required

        })

    DeleteProductFromUserById = (uid, productUrlKey) =>
        fetch(this.url + `user/${uid}/product/${productUrlKey}`, {
            method: 'DELETE',

        })

    removeProductFromEditorCollection = (eid, productUrlKey) =>
        fetch(this.url + `editor/${eid}/product/${productUrlKey}`, {
            method: 'DELETE',
        })
}
