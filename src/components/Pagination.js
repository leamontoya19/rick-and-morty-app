import React from 'react'

const Pagination = () => {
  return (
    <nav>
        <ul className='pagination justify-content-center'>
            <li className='page-item'>
                <button className='page-link'>Previous</button>
            </li>
            <li className='page-item'>
                <button className='page-link'>Next</button>
            </li>
        </ul>
      
    </nav>
  )
}

export default Pagination
