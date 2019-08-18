export default class EditorService {
    url = "https://wbdev-su19-project-server.herokuapp.com/api/";
    urlHeroku = 'https://peaceful-savannah-55840.herokuapp.com/api/'
    static myInstance = null;


    static getInstance() {
        if (EditorService.myInstance == null) {
            EditorService.myInstance = new EditorService();
        }
        return this.myInstance;
    }

    createEditor = (editor, code) =>
        fetch(this.url + "editor/" + code, {
            method: 'POST',
            body: JSON.stringify(editor),
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res)


    getAllEditor = () =>
        fetch(this.url + "editor/product")
            .then(res => res.json());


}
