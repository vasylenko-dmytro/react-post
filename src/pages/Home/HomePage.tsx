import React from 'react';
import { Link } from 'react-router-dom';
import type {Product} from '../../features/product/types/product';
import {ProductCard} from '../../features/product';
import productData from '../../features/product/data/productData.json';

export default function HomePage({searchTerm}: { searchTerm: string }) {
  const products: Product[] = productData;
  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) ||
      product.itemNumber.toString().includes(term) ||
      product.issueYear.toString().includes(term)
    );
  });

  return (
    <div className="max-w-340 px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <Link to={`/stamps/${product.id}`} className="block transition-transform hover:scale-[1.01]">
                <ProductCard product={product} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 dark:text-neutral-400 text-lg">
            No stamps match "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
}