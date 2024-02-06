## Canvas / Slack group number (please check this carefully)
Group 22
## names of the team members
Alea Nablan, Grace Pan, Maadhav Kothuri, Raymond Wang
## name of the project (alphanumeric, no spaces, max 32 chars; this will also be your URL)
FosterHope
## the proposed project
Our project is to bring awareness to foster care and consolidating resources to those in need for foster care in Texas. In this way, we can help support children in the foster care system so that they can have better experiences.
## URLs of at least three data sources that you will programmatically scrape (at least one must be a RESTful API) (be very sure about this)

https://www.dfps.texas.gov/Child_Protection/Foster_Care/Resource_Directory.asp Foster Care Orgs
https://www.tffa.org/resources/regional-directory-of-resources/ government agencies
https://charity-navigator.stellate.io/ Foster Care Orgs with Reviews
https://www.guidestar.org/search/ Foster Care Orgs
https://developers.google.com/maps (RESTful API) Locations of Orgs
https://cwoutcomes.acf.hhs.gov/cwodatasite/pdf/texas.html
https://projects.propublica.org/nonprofits/search?q=foster+care(RESTful API)
https://www.mediawiki.org/wiki/API:Main_page#API_documentation (RESTful API)
https://data.texas.gov/See-Category-Tile/CPS-3-2-Children-in-Substitute-Care-by-Placement-T/kgpb-mxxd/about_data Foster Kids per county
https://www.opendatanetwork.com/dataset/data.texas.gov/u4j8-y2ff Foster homes per county
https://www.dfps.texas.gov/Child_Protection/Foster_Care/Resource_Directory.asp Resources for Foster Children
https://developers.google.com/youtube/v3/docs YouTube API for any videos used

## at least three models
Counties
-   Name
-   Population
-   Number of agencies / organizations
-   Number of kids in foster care
-   Number of foster homes

Media
-   Maps of each county
-   Images of foster homes in the area

Agencies/organizations
-   Name
-   Location
-   Type 
-   Reviews (number of stars)
-   Proximity
-   Hours of Operation (Open right now or not)

Media
-   Images of organizations
-   Text about each organization

Resources(Events/communities, financial aids, mental health)
-   Name
-   Location
-   Type
-   Cost
-   Target Audience (Kids or parents?)

Media
-   Images of each resource
-   Text description of each resource
-   Videos about the resource (if available for that resource)

## an estimate of the number of instances of each model
Counties = ~250
Agencies/organizations = ~2000
Resources = ~250

## instances of each model must connect to instances of at least two other models
Counties link resources and organizations within the county. Each organization connects back to the instance of the county that it is in, as well as resources that it provides. Each resource connects back to the organizations that they are provided by (if provided by a listed organization) and the counties that they are located in.

## describe three questions that your site will answer

- What is the distribution of children in foster care between different counties in Texas?
- What organizations are in place to support foster children?
- What resources can foster children and foster families draw upon to help them be successful?
