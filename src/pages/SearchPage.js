import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchPage = () => {
  const loc = useLocation()
  console.log(loc)
  return (
    <div>
      SearchPage
    </div>
  )
}

export default SearchPage
