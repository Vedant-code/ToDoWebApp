import React from 'react'
import Logo from "./Logo"

function Header() {
  return <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
    <nav>
        {/* {Logo} */}
        <Logo/>
    </nav>
  </header>
}

export default Header