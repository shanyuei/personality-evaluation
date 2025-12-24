export type Tag = {
    name: string;
    documentId: string;
    id: number;
    locale: string;
    slug: string;
    posts: {
        id: number;
        documentId: string;
    }[];
}
