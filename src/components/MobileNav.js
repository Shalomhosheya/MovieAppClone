import React from 'react'
import { mobileNav } from '../constants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNav = () => {
  return (
    <section className="lg:hidden h-14 bg-neutral-600 bg-opacity-75 fixed bottom-0 w-full">
      <div className="flex justify-between items-center px-4">
        {mobileNav.map((nav, index) => (
          // Remove the `return` outside and directly return the JSX
          <NavLink key={nav.label+"mobilenavigation"}
          className={({ isActive }) =>`px-3 flex h-full items-center flex-col justify-center`}
          >
            <div className="text-2xl">
              {nav.icon}
            </div>
            <p className="text-sm">
                {nav.label}
            </p>
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default MobileNav
