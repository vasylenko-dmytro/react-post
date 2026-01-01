import {useState} from 'react';
import brandIcon from '../../../assets/logo_75.ico';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 inset-x-0 before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto before:rounded-4xl before:border before:border-gray-200 dark:border-neutral-900 after:absolute after:inset-0 after:-z-1 after:max-w-5xl after:mx-2 lg:after:mx-auto after:rounded-4xl after:bg-gray-300 dark:after:bg-neutral-900 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
      <nav className="relative max-w-5xl w-full md:flex md:items-center md:justify-between md:gap-3 ps-5 pe-2 mx-2 lg:mx-auto py-2 dark:bg-neutral-900 rounded-4xl">

        <div className="flex items-center justify-between">
          <a
            className="flex items-center font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
            href="/" aria-label="Brand">
            <img src={brandIcon} alt="sCollecto" className="h-8 w-auto"/>
          </a>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative size-9 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {!isOpen ? (
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6"/>
                  <line x1="3" x2="21" y1="12" y2="12"/>
                  <line x1="3" x2="21" y1="18" y2="18"/>
                </svg>
              ) : (
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300 basis-full grow md:block`}>
          <div className="overflow-hidden overflow-y-auto max-h-[75vh]">
            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
              <a className="p-2 flex items-center text-sm text-blue-600 dark:text-blue-500" href="/">
                Stamps
              </a>

              <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 dark:text-neutral-200"
                 href="#">
                Cards & Envelopes
                <sup className="ms-0.5 text-xs bg-blue-700 text-white py-0.5 px-1 rounded-lg">TBD</sup>
              </a>

              <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 dark:text-neutral-200"
                 href="#">
                Collectors Items
                <sup className="ms-0.5 text-xs bg-blue-700 text-white py-0.5 px-1 rounded-lg">TBD</sup>
              </a>

              <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 dark:text-neutral-200"
                 href="#">
                Saved
                <sup className="ms-0.5 text-xs bg-blue-700 text-white py-0.5 px-1 rounded-lg">TBD</sup>
              </a>

              <div
                className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5 md:ms-1.5 md:before:block md:before:absolute md:before:top-1/2 md:before:-start-px md:before:w-px md:before:h-4 md:before:bg-gray-300 md:before:-translate-y-1/2 dark:md:before:bg-neutral-700">
                <a
                  className="p-2 w-full flex items-center text-sm text-gray-800 hover:text-gray-500 dark:text-neutral-200"
                  href="#">
                  <svg className="shrink-0 size-4 me-3 md:me-2" xmlns="http://www.w3.org/2000/svg" width="24"
                       height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                       strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  Log in
                  <sup className="ms-0.5 text-xs bg-blue-700 text-white py-0.5 px-1 rounded-lg">TBD</sup>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
