import { Suspense } from 'react'
import SearchBar from './components/searchbar'


function SearchBarFallback() {
    // add loading page
    return (<div style={{backgroundColor:"#c7c7c7", height:"100vh", width:"100vw"}}></div>)
}

export default function AllModelSearch() {


    // This will not be logged on the server when using static rendering
    return (
            <Suspense fallback={<SearchBarFallback />}>
                <SearchBar />
            </Suspense>
      )
}