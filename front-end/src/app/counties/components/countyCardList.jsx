import { Card } from "react-bootstrap";

async function fetchCounties(){
    const res = await fetch("http://localhost:3000/api/counties");
    const counties = await res.json();
    return counties;
}

const Counties = async () => {
    const countylist = await fetchCounties();
    // console.log(countylist);
    return (
        <div>
            {countylist.counties.map(county => (
                <Card key={county.name}>
                    <h1>{county.name}</h1>
                    <small> Population: {county.population}</small>
                    <p>Num of agencies: {county.agency_count}</p>
                    <p>Num of foster homes: {county.foster_home_count}</p>
                    <p>Num of foster kids: {county.foster_kid_count}</p>
                </Card>
            ))}
        </div>
    )
}
export default Counties