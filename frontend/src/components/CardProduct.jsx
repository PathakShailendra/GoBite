import React from 'react'
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees'
import { Link } from 'react-router-dom'
import { valideURLConvert } from '../utils/validURLConvert'

const CardProduct = ({data}) => {
    const url = `/product/${valideURLConvert(data.name)}-${data._id}`
  return (
    <Link to={url} className="border py-2 lg:p-4 grid gap-1 lg:gap-3 min-w-38 lg:min-w-52 rounded">
      <div className="min-h-24 max-h-24 lg:max-h-32 rounded overflow-hidden">
        <img src={data.image[0]} className='w-full h-full object-scale-down lg:scale-125' alt="" />
      </div>
      <div className="rounded-full mt-1 ml-1 lg:ml-0 p-1 w-fit text-xs lg:text-sm px-2 text-green-600 bg-green-100">
        10 min
      </div>
      <div className="px-2 lg:px-0 font-medium text-sm lg:text-base text-ellipsis line-clamp-2">
        {
            data.name
        }
      </div>
      <div className="w-fit lg:px-0 px-2 text-sm lg:text-base">
        {data.unit}
      </div>

      <div className="px-2 lg:px-0 flex items-center justify-between gap-1 lg:gap-3 text-sm lg:text-base">
        <div className="font-semibold">
            {DisplayPriceInRupees(data.price)}
        </div>
        <div className="">
            <button className='bg-green-600 hover:bg-green-700 text-white px-2 lg:px-4 py-1 rounded' >Add</button>
        </div>
      </div>
    </Link>
  )
}

export default CardProduct