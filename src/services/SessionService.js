export default class SessionService {


    static getInstance() {
        if (SessionService.myInstance == null) {
            SessionService.myInstance = new SessionService();
        }
        return this.myInstance;
    }

    createSessionUid = (User) =>
        fetch(this.url + 'user', {
            method: 'POST',
            body: JSON.stringify(User),
            headers: {
                'content-type': 'application/json'
            }
        })

}
