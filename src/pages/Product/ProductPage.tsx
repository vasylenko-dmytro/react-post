import React, {useState} from 'react';
import type {Product} from '../../features/product/types/product';
import defaultImg from '@/assets/images/default.png';
import {formatStampValue} from '../../shared/utils/stampHelpers';

export default function ProductPage({product}: { product: Product }) {
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'ship'>('desc');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Column 1: Image Gallery (4 columns) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div
              className="aspect-square bg-gray-50 dark:bg-neutral-800 rounded-2xl border border-gray-200 dark:border-neutral-700 flex items-center justify-center p-6 shadow-sm">
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
              {[product.imageUrlOriginal, product.imageUrlSmall, product.imageUrlPane].map((img, i) => img && (
                <button key={i}
                        className="size-20 shrink-0 border-2 border-gray-100 dark:border-neutral-700 rounded-lg overflow-hidden hover:border-blue-500 focus:border-blue-500 transition-all">
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
              ))}
            </div>
          </div>

          {/* Column 2: Product Info & Summary (5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-500 dark:text-neutral-400 text-sm mb-2">{product.series || 'Stamp Collection'}</p>

            <div className="flex items-center gap-2 mb-4">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {product.availability ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="space-y-1 text-sm text-gray-600 dark:text-neutral-400 mb-6">
              <p><span className="font-semibold">SKU: #</span>{product.itemNumber}</p>
              <p><span className="font-semibold">Issue Date: </span>
                {new Date(product.issueDate).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}</p>
            </div>

            <div className="prose prose-sm dark:prose-invert text-gray-700 dark:text-neutral-300">
              <p className="line-clamp-6">{product.description}</p>
            </div>
          </div>

          {/* Column 3: Checkout Controls (3 columns) */}
          <div className="md:col-span-3">
            <div
              className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-3xl border border-gray-200 dark:border-neutral-700 sticky top-24">
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">1.
                  Denomination:</label>
                <button
                  className="w-full p-4 bg-white dark:bg-neutral-900 border-2 border-blue-600 rounded-xl shadow-sm text-center">
                  <span
                    className="text-xl font-black text-blue-600 dark:text-blue-400">{formatStampValue(product.denomination)}</span>
                </button>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">2. Choose a
                  Quantity:</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-600 rounded-xl px-4 py-3 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md">
                  Add to Collection
                </button>
                <button
                  className="w-full bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-600 text-gray-700 dark:text-neutral-200 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-600 transition-all font-semibold text-sm">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* More Information Tabs Section */}
        <section className="border-t border-gray-200 dark:border-neutral-800 pt-12">
          <h2 className="text-2xl font-bold mb-10 text-gray-900 dark:text-white">More Information</h2>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Vertical Sidebar Tabs */}
            <div className="flex flex-col w-full md:w-72 gap-2">
              <TabLink label="Description" active={activeTab === 'desc'} onClick={() => setActiveTab('desc')}/>
              <TabLink label="Product Specs" active={activeTab === 'specs'} onClick={() => setActiveTab('specs')}/>
              <TabLink label="Shipping Info" active={activeTab === 'ship'} onClick={() => setActiveTab('ship')}/>
            </div>

            {/* Content Panel */}
            <div className="flex-1 bg-gray-50/50 dark:bg-neutral-800/50 p-8 rounded-3xl min-h-75">
              {activeTab === 'desc' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="text-gray-700 dark:text-neutral-300 leading-relaxed mb-6">{product.description}</p>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t border-gray-200 dark:border-neutral-700 pt-6">
                    <div>
                      <span className="text-gray-500 block">Stamp Issuance:</span>
                      <span
                        className="font-semibold dark:text-white">{new Date(product.issueDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Designer:</span>
                      <span className="font-semibold dark:text-white">{product.designer || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'specs' && (
                <div className="w-full border-collapse animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <InfoBlock label="Issue:" value={product.name}/>
                  <InfoBlock label="Item Number:" value={product.itemNumber}/>
                  <InfoBlock label="Denomination:" value={product.denomination}/>
                  <span className="text-[12px] font-black uppercase tracking-widest text-gray-400">Type of Issue:</span>
                  <InfoBlock label="Format:" value={`Pane of ${product.stampsPerPane}`}/>
                  <InfoBlock label="Series:" value={product.name}/>
                  <InfoBlock label="Issue Date:" value={product.issueDate}/>
                  <InfoBlock label="Designer:" value={product.designer}/>
                  <InfoBlock label="Stamps per Pane:" value={product.stampsPerPane}/>
                  <InfoBlock label="Print Quantity:" value={product.printQuantity}/>
                  <InfoBlock label="Perforation:" value={product.perforation ? 'Yes' : 'No'}/>
                  <InfoBlock label="Europa:" value={product.europa ? 'Yes' : 'No'}/>
                </div>
              )}
              {activeTab === 'ship' && (
                <div
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-gray-700 dark:text-neutral-300">
                  <p className="mb-4">Standard delivery for philatelic items typically takes 5-7 business days.</p>
                  <ul className="list-disc ps-5 space-y-2 text-sm text-gray-600 dark:text-neutral-400">
                    <li>Philatelic products are non-refundable.</li>
                    <li>Items are shipped in protective packaging to prevent bending.</li>
                    <li>Tracking is available for all domestic orders.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Sub-components
function TabLink({label, active, onClick}: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center justify-between px-6 py-5 rounded-2xl font-bold transition-all duration-300 text-left ${
        active
          ? 'bg-blue-900 text-white shadow-xl translate-x-3 scale-105'
          : 'text-gray-600 dark:text-neutral-400 hover:bg-gray-100 dark:hover:bg-neutral-800'
      }`}
    >
      <span>{label}</span>
      <svg
        className={`size-5 transition-transform ${active ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`}
        fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
      </svg>
    </button>
  );
}

function InfoBlock({label, value}: { label: string, value: string | number | null }) {
  return (
    <div className="flex items-center justify-between ">
      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</span>
      <p className="text-gray-900 dark:text-white font-bold">{value || 'N/A'}</p>
    </div>
  );
}