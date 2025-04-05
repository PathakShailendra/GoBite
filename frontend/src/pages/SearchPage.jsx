import React, { useState } from 'react'
import CardLoading from '../components/CardLoading'

const SearchPage = () => {
  const [data, setData ] = useState([])
  const [loading, setLoading] = useState(true)
  const loadingarrayCard = new Array(10).fill(null)
  return (
    <section className='bg-white'>
      <div className='container mx-auto p-4'> 
        <p>Search Result : {data.length}</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-4'>
        


        {/* Loading data */}
        {
          loading && (
            loadingarrayCard.map((_, index) => {
              return (
                <CardLoading key={"loadingSearchPage"+index} />
              )
            })
          )
        }
        </div>
      </div>
    </section>
  )
}

export default SearchPage