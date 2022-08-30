export type Timestamp = number;

/**
 * Should be a vaild UUID.
 */
export type Id = string;

export interface Enitity {
	id: Id;
	createdAt?: Timestamp;
	lastModifiedAt?: Timestamp;
}

export type Ref<T extends Enitity> = Pick<T, "id">;

export interface Article extends Enitity {
	alias?: string[];
	title?: string;
	author?: Ref<Author>[];
	tag?: Ref<Tag>[];
}

export interface Author extends Enitity {
	name?: string;
	title?: string;
	information?: { [x: string]: string };
}

export enum TagType {
	TAG,
	CATEGORY,
}

export interface Tag extends Enitity {
	name?: string;
	type?: TagType;
}
