export type Tag = {
    name: string;
    documentId: string;
    id: number;
    locale: string;
    posts: {
        id: number;
        documentId: string;
    }[];
}
