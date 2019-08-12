export default class EditorService {
    url = "http://localhost:8080/api/";
    urlHeroku = 'https://peaceful-savannah-55840.herokuapp.com/api/'
    static myInstance = null;


    static getInstance() {
        if (EditorService.myInstance == null) {
            EditorService.myInstance = new EditorService();
        }
        return this.myInstance;
    }
}
