import React from 'react'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-10 h-24 p-8 pb-10 bg-[#282c34]">
      <footer className="mx-auto flex max-w-4xl flex-row">
        <ul className="flex items-center mx-auto flex-wrap mb-6 md:mb-0">
          <li><p className="md:text-xs lg:text-lg font-normal ttext-gray-50 dark:text-gray-400  mr-4 md:mr-6"> © {currentYear} Todo List TS. All rights reserved.</p></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer