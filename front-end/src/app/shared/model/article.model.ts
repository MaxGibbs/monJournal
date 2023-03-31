export interface IArticle {
    id?: number;
    title?: string;
    content?: string;
}

export class Article implements IArticle {
    public id?: number | undefined;
    public title?: string | undefined;
    public content?: string | undefined;
}