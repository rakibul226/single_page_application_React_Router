import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {

        const productDetails = useLoaderData();
       
       
        const {thumbnail,price,title,description} = productDetails;
    return (
       <div className="grid h-screen place-items-center">
         <div >   
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="h-72 w-80 md:rounded-none md:rounded-s-lg" src={thumbnail} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <span className="text-3xl font-bold text-white">${price}</span>
                    
                </div>
            </a>

        </div>
       </div>
    );
};

export default ProductDetails;