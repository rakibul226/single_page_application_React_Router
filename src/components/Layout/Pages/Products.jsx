import { useLoaderData } from "react-router-dom";
import Card from "./Card";



const Products = () => {

    const {products}= useLoaderData();

    return (
        
        <div className="grid grid-cols-3 gap-5 mx-20">
            {
                products?.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>

    );
};

export default Products;