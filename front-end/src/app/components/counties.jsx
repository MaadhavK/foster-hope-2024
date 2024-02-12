import Link from "next/link"

async function fetchCounties(){
    const response = await fetch("https://localhost:3000/api/counties");
    const counties = await response.json();
    return counties
}

const Counties = async () => {
    const counties = await fetchCounties();
    return (
        <div className="counties">
            {counties.map((county) => (
                <div className="card">
                    <h1>{county.name}</h1>
                    <small> Population: {county.population}</small>
                    <p>Num of agencies: {county.agency_count}</p>
                    <p>Num of foster homes: {county.foster_home_count} 
                        \n Num of foster kids: {county.foster_kid_count}</p>
                </div>
            ))}
        </div>
    )
}
export default Counties