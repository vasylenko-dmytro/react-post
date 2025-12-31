import React from 'react';
import type { Product } from '../../features/product/types/product';
import { ProductCard } from '../../features/product';
import productData from '../../features/product/data/productData.json';

export default function HomePage() {
  const products: Product[] = productData;

  return (
    <div className="max-w-340 px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
        { products.map((product) => (
          <div key={product.id}>
            {/* Card */}
            <ProductCard product = {product}/>
            {/* End Card */}
          </div>
        ))}
      </div>
      {/* End Cards Grid */}
    </div>
  );
}