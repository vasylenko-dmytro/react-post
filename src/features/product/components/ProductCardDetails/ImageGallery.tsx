import defaultImg from '@/assets/images/default.png';
import { Product} from "../../types/product";

export default function ImageGallery({product}: { product: Product }) {
  return(

  <div className="md:col-span-4 flex flex-col gap-6">
    <div className="aspect-square bg-gray-50 dark:bg-neutral-800 rounded-2xl border border-gray-200 dark:border-neutral-700 flex items-center justify-center p-6 shadow-sm">
      <img
        src={product.imageUrlOriginal}
        alt={product.name}
        className="max-w-full max-h-full object-contain drop-shadow-2xl"
        onError={(e) => {
          e.currentTarget.src = defaultImg;
          e.currentTarget.onerror = null;
        }}
      />
    </div>

    {/* Thumbnails */}
    <div className="flex gap-3 justify-start overflow-x-auto pb-2">
      {[product.imageUrlOriginal, product.imageUrlSmall, product.imageUrlPane].map(
        (img, i) =>
          img && (
            <button
              key={i}
              className="size-20 shrink-0 border-2 border-gray-100 dark:border-neutral-700 rounded-lg overflow-hidden hover:border-blue-500 focus:border-blue-500 transition-all"
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`view-${i}`}
                onError={(e) => {
                  e.currentTarget.src = defaultImg;
                  e.currentTarget.onerror = null;
                }}
              />
            </button>
          )
      )}
    </div>
  </div>
  )
}