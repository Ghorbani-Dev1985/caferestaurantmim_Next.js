
export interface ProductsListType {
    id: number,
    name: string,
    slug: string,
    description: string,
    categories: {
        id: number,
        name: string,
        slug: string
    }[],
    price: string,
    images : {
        id: number,
        src: string,
        name: string,
        alt: string,
    }[]
}