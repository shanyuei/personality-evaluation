export type Category = {
  id: number
  documentId: string
  name: string
  posts: { count: number },
  locale: string
  slug: string
}
