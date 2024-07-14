import { useGetProductsByCategory } from "src/hooks/useProducts";

const RestaurantProducts = () => {
    const {data , isPending} = useGetProductsByCategory(800)
    console.log(data , isPending)
    return  <section className='container relative min-h-screen mt-6'>
        
    </section>
}
 
export default RestaurantProducts;