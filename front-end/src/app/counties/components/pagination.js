"use client"
import { useRouter, useSearchParams} from 'next/navigation';
import React, {useState} from 'react';


const Pagination = ({num_instances}) => {

    
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '16'

    
    const [hasNextPage, setHasNextPage] = useState(true);
    const [hasPrevPage, setHasPrevPage] = useState((hasPrevPage) => page > 1 ? true : false);

    return (
    <div className='flex gap-2'>
      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/counties/?page=${Number(page) - 1}&per_page=${per_page}`)
          setHasPrevPage(page> 1)
        }}>
        prev page
      </button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/counties/?page=${Number(page) + 1}&per_page=${per_page}`)
          setHasNextPage(page < Math.ceil(num_instances / per_page))
        }}>
        next page
      </button>
    </div>
  )

};

export default Pagination;