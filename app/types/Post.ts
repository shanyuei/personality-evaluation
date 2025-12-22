export type Post = {
    title: string;
    documentId: string;
    id: number;
    locale: string;
    slug: string;
    publishedAt: string;
    excerpt: string;
    cover: {
        id: number;
        documentId: string;
        url: string;
    }[];
    category: {
        id: number;
        documentId: string;
        name: string;
    };
    tags: {
        id: number;
        documentId: string;
        name: string;
    }[];
}