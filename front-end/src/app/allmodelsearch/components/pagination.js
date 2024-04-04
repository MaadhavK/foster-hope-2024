"use client"
import { useRouter, useSearchParams} from 'next/navigation';
import React, {useState, useEffect} from 'react';

import { Lora } from "next/font/google";

const lora = Lora({weight: '400', subsets: ['latin']})

// The logic for creating pagination in our model pages
const Pagination = ({num_instances, path}) => {

    
    const router = useRouter()
    const searchParams = useSearchParams()

    const per_page = searchParams.get('per_page') ?? '16'
    const page = searchParams.get('page') ?? '1'

    // State for pagination logic
    const [pageState, setPageState] = useState( {
        prevPage : 0,
        nextPage : 2,
        hasPrevPage: false,
        hasNextPage: true
    });

    return (
    <div className={lora.className} style={{'paddingBottom':'10px'}}>
      <button style={{display:"inline", marginRight:"20px"}}
        className='bg-blue-500 text-white p-1'
        disabled={!pageState.hasPrevPage}
        onClick={() => {
          // Routing to the previous page and updating state
          router.push(`/${path}&page=${Number(page) - 1}&per_page=${per_page}`)
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

      <div className='text-black' style={{display:"inline"}}>
        {pageState.prevPage + 1} / {Math.ceil(Number(num_instances)/Number(per_page))}
        
      </div>

      <button style={{display:"inline", marginLeft:"20px"}}
        className='bg-blue-500 text-white p-1'
        disabled={!pageState.hasNextPage}
        // Routing to the next page and updating state
        onClick={() => {
          router.push(`/${path}&page=${Number(page) + 1}&per_page=${per_page}`)
            setPageState({
                prevPage: pageState.prevPage + 1,
                nextPage: pageState.nextPage + 1,
                hasPrevPage: true,
                hasNextPage: pageState.nextPage + 1 < 1 + Math.ceil(Number(num_instances)/Number(per_page))
            });
            
          
        }}>
        next page
        
      </button>
    </div>
  )

};

export default Pagination;