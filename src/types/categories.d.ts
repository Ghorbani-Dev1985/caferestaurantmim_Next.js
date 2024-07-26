
export interface CategoryListType {
    id: number,
    name: string,
    image: {
      src: string,
      alt: string,
      name: string  
    },
    parent: number
}