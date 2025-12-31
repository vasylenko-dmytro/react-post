import { ProductsGrid } from '../../features/product';

export default function HomePage() {
  return (
    <div className="max-w-340 px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
      {/* Cards Grid */}
      <ProductsGrid />
      {/* End Cards Grid */}
    </div>
  );
}