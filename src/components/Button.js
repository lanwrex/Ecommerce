import React from 'react'

const Button = ({label}) => {
  return (
   <>
   <li>
   <button>
    <div className='mr-6 text-slate-600 hover:text-blue-600'>
   {label}
   </div>
   </button>
   </li>''
   </>
  )
}

export default Button