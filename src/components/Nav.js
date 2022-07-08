import { useState, useEffect } from 'react'
import Cart from './Cart'
import Menu from '../images/icon-menu.svg'
import Close from '../images/icon-close.svg'
import Avatar from '../images/image-avatar.png'
import Logo from '../images/logo.svg'
import Icon from '../images/icon-cart.svg'


function Nav({addToCart}) {
  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState(false)

  function handleModel() {
    setMenu(true)
  }

  function openCart() {
    setCart((prevDate) => !prevDate)
  }

  useEffect(() => {
    const modal = document.querySelector('#modal')
    if (menu === true) {
      modal.showModal()
    }
  }, [menu])

  return (
    <>
      {/* Mobile Nav */}
      {menu ? (
        <dialog
          id='modal'
          className=' z-30 ml-0 min-h-screen w-[15rem] list-none bg-white py-20 pt-10 font-bold text-black  md:hidden'
        >
          <ul
            aria-label='navigation'
            className='ml-5 flex flex-col gap-7 text-lg text-black '
          >
            <li className='mr-3 mb-8' onClick={() => setMenu(!menu)}>
              <button
              className='cursor-pointer'>
                <img src={Close} alt='Close Icon' />
              </button>
            </li>
            <li>
              <button
              className='cursor-pointer'>Collection</button>
            </li>
            <li>
              <button className='cursor-pointer'>Men</button>
            </li>
            <li>
              <button
              className='cursor-pointer'>Women</button>
            </li>
            <li>
              <button
               className='cursor-pointer'>About</button>
            </li>
            <li>
              <button
              className='cursor-pointer'>Contact</button>
            </li>
          </ul>
        </dialog>
      ) : (
        ''
      )}
      <ul
    
        className='h-30 fixed z-20 flex w-screen items-center justify-between bg-white px-5 py-7 md:hidden'
      >
        {!menu ? (
          <li className='mr-3' onClick={handleModel}>
            <a href='/#'
            className='cursor-pointer'>
              <img src={Menu} alt='Menu Icon' />
            </a>
          </li>
        ) : (
          ''
        )}
        <li className='mb-[2px]'>
          <a href='/#'
          className='cursor-pointer'>
            <img src={Logo} alt='Logo' />
          </a>
        </li>
        <li className='relative ml-auto mr-5'>
          {addToCart > 0 ? (
            <p className='absolute bottom-3 left-2 rounded-lg bg-orange-400 px-2 text-xs text-white'>
              {addToCart}
            </p>
          ) : (
            ''
          )}
          <a href='/#' 
          className='cursor-pointer' onClick={openCart} >
            <img src={Icon} alt='Cart Icon' />
          </a>
        </li>
        <li>
          <a href='/#'
           className='cursor-pointer' onClick={openCart}>
            <img
              src={Avatar}
              className='h-10 rounded-full hover:border-2 hover:border-orange-400'
              alt='Avatar'
            />
          </a>
        </li>
      </ul>
      {cart ? <Cart addToCart={addToCart} /> : ''}

      {/* Desktop Nav */}
      <ul
        aria-label='navigation'
        className='h-30 top-0 z-20 hidden w-full  bg-white py-7 shadow-md md:fixed md:flex md:items-center md:px-10 md:text-sm lg:px-20 lg:text-base'
      >
        <li className='mb-[2px] md:max-w-[15%] lg:max-w-full'>
          <button
           className='cursor-pointer'>
            <img src={Logo} alt='Logo Icon' />
          </button>
        </li>
        <ul className='ml-10 flex text-gray-500 md:gap-3 lg:gap-5'>
          <li className='relative after:absolute after:left-0 after:h-1  after:w-0 after:rounded-sm after:bg-primary-orange after:hover:w-full md:after:top-[3.5rem] lg:after:top-[3.7rem]'>
            <button
            className='cursor-pointer'>Collection</button>
          </li>
          <li className='relative after:absolute after:left-0 after:h-1  after:w-0 after:rounded-sm after:bg-primary-orange after:hover:w-full md:after:top-[3.5rem] lg:after:top-[3.7rem]'>
            <button
             className='cursor-pointer'>Men</button>
          </li>
          <li className='relative after:absolute after:left-0 after:h-1  after:w-0 after:rounded-sm after:bg-primary-orange after:hover:w-full md:after:top-[3.5rem] lg:after:top-[3.7rem]'>
            <a href='/#'
             className='cursor-pointer'>Women</a>
          </li>
          <li className='relative after:absolute after:left-0 after:h-1  after:w-0 after:rounded-sm after:bg-primary-orange after:hover:w-full md:after:top-[3.5rem] lg:after:top-[3.7rem]'>
            <button  className='cursor-pointer'>About</button>
          </li>
          <li className='relative after:absolute after:left-0 after:h-1  after:w-0 after:rounded-sm after:bg-primary-orange after:hover:w-full md:after:top-[3.5rem] lg:after:top-[3.7rem]'>
            <button  className='cursor-pointer'>Contact</button>
          </li>
        </ul>

        <li className='relative ml-auto md:mr-3 lg:mr-10'>
          {addToCart > 0 ? (
            <p className='absolute bottom-3 left-2 rounded-lg bg-primary-orange px-2 text-xs text-neutral-white'>
              {addToCart}
            </p>
          ) : (
            ''
          )}
          <button className='cursor-pointer' onClick={openCart}>
            <img src={Icon} alt='Cart Icon' />
          </button>
        </li>
        <li>
          <a href='/#' className='cursor-pointer' onClick={openCart}>
            <img
              src={Avatar}
              alt='Avatar'
              className='rounded-full hover:border-2 hover:border-orange-400 md:h-10 lg:h-12'
            />
          </a>
        </li>
      </ul>
    </>
  )
}

export default Nav
