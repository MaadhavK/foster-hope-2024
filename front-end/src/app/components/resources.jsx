async function fetchResources(){
    const res = await fetch("http://localhost:3000/api/resources");
    const resources = await res.json();
    return resources;
}

const Resources = async () => {
    const resList = await fetchResources();
    return (
        <div className="resources">
            {resList.resources.map(resource => (
                <div key={resource.name} className="card">
                    <h1>{resource.name}</h1>
                    <div>{resource.location}</div>
                    <div>{resource.type}</div>
                    <div>Cost: {resource.cost}</div>
                    <div>Audience: {resource.target_audience}</div>
                </div>
            ))}
        </div>
    )
}
export default Resources