export default class UserService {
    url = "http://www.webdev5610.site/api/";
    urlHeroku = 'https://peaceful-savannah-55840.herokuapp.com/api/'
    static myInstance = null;


    static getInstance() {
        if (UserService.myInstance == null) {
            UserService.myInstance = new UserService();
        }
        return this.myInstance;
    }

    createUser = (User) =>
        fetch(this.urlHeroku + 'user', {
            method: 'POST',
            body: JSON.stringify(User),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res)

    login = (user) =>
        fetch(this.urlHeroku + "login", {
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
        fetch(this.urlHeroku + "username/" + uname).then(response => response.json())

    findUserById = (uid) =>
        fetch(this.urlHeroku + "user/" + uid).then(response => response.json())

    getProductsForUser = (uid) =>
        fetch(this.urlHeroku + "user/" + uid + "/product").then(response => response.json())

    getPortfolioForUserByUserId = (uid) => {
        return fetch(this.urlHeroku + `user/${uid}/portfolio`)
            .then(response => response.json())
    }

    getPortfolioForEditorByEditorId = (eid) => {
        return fetch(this.urlHeroku + `user/${eid}/collection`)
            .then(response => response.json())
    }
    getPublicProfileForUserByUserId = (uid) => {
        return fetch(this.urlHeroku + `user/${uid}/publicProfile`)
            .then(response => response.json())
    }


    getPrivateProfileForUserByUserId = (uid) => {
        return fetch(this.urlHeroku + `user/${uid}/privateProfile`, {
            credentials: 'include'//required

        }).then(response => response.json())
    }

    updateUser = (user, uid) =>
        fetch(this.urlHeroku + "user/" + uid, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })

    DeleteProductFromUserById = (uid, productUrlKey) =>
        fetch(this.urlHeroku + `user/${uid}/product/${productUrlKey}`, {
            method: 'DELETE',

        })

    removeProductFromEditorCollection = (eid, productUrlKey) =>
        fetch(this.urlHeroku + `editor/${eid}/product/${productUrlKey}`, {
            method: 'DELETE',
        })
}
