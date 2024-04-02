import { Suspense } from 'react'
import SearchBar from './components/searchbar'


function SearchBarFallback() {
    return <>placeholder</>
}

export default function AllModelSearch() {


    // This will not be logged on the server when using static rendering
    return (
            <Suspense fallback={<SearchBarFallback />}>
                <SearchBar />
            </Suspense>
      )
}