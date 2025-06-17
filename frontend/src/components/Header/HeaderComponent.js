import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  const user = {
    name:"Sakshi"
  }

  const cart = {
    totalCount:5
  }

  const logout = () => {

  }


  return (
    <div>
      <header className='bg-white border-b-[1px] border-solid border-[#e72929]'>
        <div className='mx-auto my-0 flex justify-between'>
          <Link to="/" className='text-[#af1313] font-bold p-4'>BellynJoy</Link>
          <nav>
            <ul className='flex'>
                {
                  user ? (
                    <li>
                      <Link to="/profile" className='text-[#af1313] hover:text-[#e72929] p-4 inline-block'>{user.name}</Link>
                      <Link to="/profile" className='text-[#af1313] hover:text-[#e72929]'>Profile</Link>
                      <Link to="/orders" className='text-[#af1313] hover:text-[#e72929]'>Orders</Link>
                      <a onClick={logout} href='/' className='text-[#af1313] hover:text-[#e72929]'>Logout</a>
                    </li>
                  ) : (
                    <Link to="/login" className='text-[#af1313] hover:text-[#e72929]'>Login</Link>
                  )
                }
                <li>
                  <Link to="cart" className='text-[#af1313] hover:text-[#e72929] p-4 inline-block'>Cart {cart.totalCount>0 && <span>{cart.totalCount}</span>}</Link>
                </li>
              </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default HeaderComponent