export type ArticleId = string;

export interface Article {
	id: ArticleId;
	alias?: ArticleId[];
	date?: Date;
	lastModified?: Date;
	title: string;
	content: string;
}