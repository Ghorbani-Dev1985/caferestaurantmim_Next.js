
export interface PostsListType {
    id: number,
    date: string,
    title: {
      rendered: string
    },
    content: {
      rendered: string
    },
    excerpt: {
      rendered: string
    }
    _embedded: {
      ['wp:featuredmedia']: {
        source_url: string
      }[]
    }
}