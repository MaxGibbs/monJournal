export interface IArticleCreationDto {
    title?: string;
    content?: string;
}

export class ArticleCreationDto implements IArticleCreationDto {
    public title?: string | undefined;
    public content?: string | undefined;
}