export class Post {
    titulo: String;
    texto: String;
    post_id: number;

    constructor(titulo: String, texto: String, post_id: number) {
        this.titulo = titulo;
        this.texto = texto;
        this.post_id = post_id;
    }
}