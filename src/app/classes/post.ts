export class Post {
    title: String;
    content: String;
    post_id: number;

    constructor(title: String, content: String, post_id: number) {
        this.title = title;
        this.content = content;
        this.post_id = post_id;
    }
}