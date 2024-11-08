import React from 'react'

function Header() {
  return (
    <header className="relative py-4 md:py-6">
<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
            <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                <img className="w-auto h-8" src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg" alt="" />
            </a>
        </div>

        <div className="flex lg:hidden">
            <button type="button" className="text-gray-900">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10">
            <div className="flex items-center space-x-12">
                <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Features </a>

                <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Pricing </a>

                <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Automation </a>
            </div>

            <div className="w-px h-5 bg-gray-300"></div>

            <a href="#" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> Login </a>

            <a
                href="#"
                title=""
                className="
                    px-5
                    py-2
                    text-base
                    font-semibold
                    leading-7
                    text-gray-900
                    transition-all
                    duration-200
                    bg-transparent
                    border border-gray-900
                    rounded-xl
                    font-pj
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                    hover:bg-gray-900 hover:text-white
                    focus:bg-gray-900 focus:text-white
                "
                role="button"
            >
                Create free account
            </a>
        </div>
    </div>
</div>
</header>

  )
}

export default Header