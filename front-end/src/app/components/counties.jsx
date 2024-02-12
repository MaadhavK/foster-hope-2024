

async function fetchCounties(){
    const res = await fetch("http://localhost:3000/api/counties");
    const counties = await res.json();
    return counties;
}

const Counties = async () => {
    const countylist = await fetchCounties();
    return (
        <div className="counties">
            {countylist.counties.map(county => (
                <div key={county.name} className="card">
                    <h1>{county.name}</h1>
                    <small> Population: {county.population}</small>
                    <p>Num of agencies: {county.agency_count}</p>
                    <p>Num of foster homes: {county.foster_home_count}</p>
                    <p>Num of foster kids: {county.foster_kid_count}</p>
                </div>
            ))}
        </div>
    )
}
export default Counties