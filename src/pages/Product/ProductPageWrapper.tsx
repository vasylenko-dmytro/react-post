import { useParams } from 'react-router-dom';
import ProductPage from './ProductPage';
import productData from '../../features/product/data/productData.json';
import { Product } from '../../features/product/types/product';

export default function ProductPageWrapper() {
  const { id } = useParams<{ id: string }>();

  // Find the stamp in your local data
  const product = (productData as Product[]).find(p => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <h2 className="text-2xl font-bold dark:text-white">Stamp Not Found</h2>
        <p className="text-gray-500">We couldn't find the item you're looking for.</p>
      </div>
    );
  }

  return <ProductPage product={product} />;
}