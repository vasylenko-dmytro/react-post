import React from 'react';
import type { Product } from '../types/product';
import productData from '../data/productData.json';

export default function ProductGrid() {
  const products: Product[] = productData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
      { products.map((product) => (
        <div>
          {/* Card */}
          <div className="group flex flex-col">
            <div className="relative">
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.imageUrlSmall}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                  loading="lazy" />
              </div>

              <div className="pt-4">
                <h3 className="font-medium md:text-lg text-black dark:text-white">
                  {product.name}
                </h3>
              </div>

              <a className="after:absolute after:inset-0 after:z-1" href="#"></a>
            </div>

            <div className="mb-2 mt-4 text-sm">
              {/* List */}
              <div className="flex flex-col">
                {/* Item */}
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">Denomination:</span>
                    </div>

                    <div className="text-end">
                      <span className="text-black dark:text-white">{product.denomination}</span>
                    </div>
                  </div>
                </div>
                {/* End Item */}

                {/* Item */}
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">SKU:</span>
                    </div>

                    <div className="flex justify-end">
                      <span className="text-black dark:text-white">#{product.itemNumber}</span>
                    </div>
                  </div>
                </div>
                {/* End Item */}

                {/* Item */}
                <div className="py-3 border-t border-gray-200 dark:border-neutral-700">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="font-medium text-black dark:text-white">Year:</span>
                    </div>

                    <div className="text-end">
                      <span className="text-black dark:text-white">{product.issueYear}</span>
                    </div>
                  </div>
                </div>
                {/* End Item */}
              </div>
              {/* End List */}
            </div>

            <div className="mt-auto">
              <a
                className="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-yellow-400 text-black hover:bg-yellow-500 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
                href="#">
                Save
                <sup className="ms-0.5 text-xs bg-blue-700 text-white py-0.5 px-1 rounded-lg">TBD</sup>
              </a>
            </div>
          </div>
          {/* End Card */}

        </div>
      ))}
    </div>
  );
}