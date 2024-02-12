async function fetchOrgs(){
    const res = await fetch("http://localhost:3000/api/orgs");
    const orgs = await res.json();
    return orgs;
}

const listOrgs = async () => {
    const orgList = await fetchOrgs();
    return (
        <div className="orgs">
            {orgList.agencies.map(org => (
                <div key={org.name} className="card">
                    <h1>{org.name}</h1>
                    <small>{org.location}</small>
                    <small>{org.type}</small>
                    <p>{org.reviews} stars</p>
                    <p>Hours: {org.hours}</p>
                </div>
            ))}
        </div>
    )
}
export default listOrgs