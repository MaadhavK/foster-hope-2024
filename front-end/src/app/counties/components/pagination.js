"use client"
import { useRouter, useSearchParams} from 'next/navigation';
import React, {useState, useEffect} from 'react';
import "../counties.css";

const Pagination = ({num_instances}) => {

    
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '16'

    const [pageState, setPageState] = useState( {
        prevPage : 0,
        nextPage : 2,
        hasPrevPage: false,
        hasNextPage: true
    });

    return (
    <div className='flex gap-2'>
      <button
        className='bg-blue-500 text-white p-1'
        disabled={!pageState.hasPrevPage}
        onClick={() => {
          router.push(`/counties/?page=${Number(page) - 1}&per_page=${per_page}`)
            setPageState({
                    prevPage: pageState.prevPage - 1,
                    nextPage: pageState.nextPage - 1,
                    hasPrevPage: pageState.prevPage - 1> 0,
                    hasNextPage: true
                });
          
        }} 
        >
        prev page
      </button>

      <div className='text-black'>
        {pageState.prevPage + 1} / {Math.ceil(Number(num_instances)/Number(per_page))}
        
      </div>

      <button
        className='bg-blue-500 text-white p-1'
        disabled={!pageState.hasNextPage}
        onClick={() => {
          router.push(`/counties/?page=${Number(page) + 1}&per_page=${per_page}`)
            setPageState({
                prevPage: pageState.prevPage + 1,
                nextPage: pageState.nextPage + 1,
                hasPrevPage: true,
                hasNextPage: pageState.nextPage + 1 < Math.ceil(Number(num_instances)/Number(per_page))
            });
            
          
        }}>
        next page
        
      </button>
    </div>
  )

};

export default Pagination;