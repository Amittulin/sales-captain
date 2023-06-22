import React from 'react'

const Header = () => {
  return (
    <header class="text-gray-600 body-font shadow-lg">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className='sales-c'>
    <img src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo-p-500.webp" alt="" />
    </div>
    
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900">Products</a>
        <a class="mr-5 hover:text-gray-900">Solutons</a>
        <a class="mr-5 hover:text-gray-900">Pricing</a>
        <a class="mr-5 hover:text-gray-900">Resources</a>
        <a class="mr-5 hover:text-gray-900">Support</a>
      </nav>
      <button class="inline-flex items-center bg-white-100 text-black border-solid py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 border-2">Sign in
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d=""></path>
        </svg>
      </button>

      <button class="inline-flex items-center bg-gray-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0">Get started
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d=""></path>
        </svg>
      </button>
    </div>
  </header>
  )
}

export default Header