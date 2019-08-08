export default class UserService {
    url = "http://localhost:8080/api/login";

    static myInstance = null;


    static getInstance() {
        if (UserService.myInstance == null) {
            UserService.myInstance = new UserService();
        }
        return this.myInstance;
    }

    login = (user) =>
        fetch(this.url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }})
            .then(res => res)


}
