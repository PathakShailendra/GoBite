import React from 'react'
import { IoClose } from 'react-icons/io5'

const DisplayCartItem = () => {
  return (
    <section className='bg-neutral-900/70 fixed top-0 left-0 right-0 bottom-0 '>
        <div className='bg-white w-full max-w-sm min-h-screen max-h-screen ml-auto'>
            <div>
                <h2>Cart</h2>
                <button>
                    <IoClose  />
                </button>
            </div>
        </div>
    </section>
  )
}

export default DisplayCartItem