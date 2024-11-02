import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 !pb-20 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
