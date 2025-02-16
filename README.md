## Canvas / Slack group number (please check this carefully)

Group 22

## names of the team members

Alea Nablan, Grace Pan, Maadhav Kothuri, Raymond Wang, Nathan Cheng

## name of the project (alphanumeric, no spaces, max 32 chars; this will also be your URL)

FosterHope

**Website:** https://www.foster-hope.com/

**API Documentation:** https://documenter.getpostman.com/view/32909464/2sA2r3ZkjZ

| Team Members    | GitLab ID        | EID     |
| --------------- | ---------------- | ------- |
| Maadhav Kothuri | @maadhavskothuri | msk2789 |
| Nathan Cheng    | @nathanchengus   | nyc278  |
| Grace Pan       | @pan-grace       | gp22489 |
| Alea Nablan     | @aleanadhiraa    | ann2246 |
| Raymond Wang    | @raymww          | rmw2945 |

| Phase | GitSHA                                   |
| ----- | ---------------------------------------- |
| 1     | 42428369ca57bda5d00eab779c3d5462d838e9db |
| 2     | 0eef6e227541bcea32e30692a70224bd97d00346                                         |
| 3     | 03d0ad3b8f760fca818a7225ba9e99b0c38a003a                                         |
| 4     | e55922a8aae408146784a7f8ac83fe9418cc8fd4

| Phase | Gitlab Pipeline                                             |
| ----- | ----------------------------------------------------------- |
| 1     | https://gitlab.com/nathanchengus/cs373-group-22/-/pipelines |
| 2     | https://gitlab.com/nathanchengus/cs373-group-22/-/pipelines                                                           |
| 3     | https://gitlab.com/nathanchengus/cs373-group-22/-/pipelines                                                            |
| 4     | https://gitlab.com/nathanchengus/cs373-group-22/-/pipelines                                                            |

| Phase | Leader      |
| ----- | ----------- |
| 1     | Alea Nablan |
| 2     | Nathan Cheng            |
| 3     | Raymond Wang             |
| 4     | Grace Pan            |

Group leader helped coordinate and make sure we all had time to meet. Also helped divide tasks.
##Phase 1 Expected vs. Actual Time

- Maadhav Kothuri: Expected 12 hours, Actual 15 hours
- Nathan Cheng: Expected 14 hours, actual 16 hours
- Raymond Wang: Expected 7, Actual 12 hours
- Grace Pan: Expected 15 hours, actual 15 hours
- Alea Nablan: Expected 8 hours, Actual 12 hours

##Phase 2 Expected vs. Actual Time

- Maadhav Kothuri: Expected 15 hours, Actual 28 hours
- Nathan Cheng: Expected 18 hours, actual 28 hours
- Raymond Wang: Expected 16, Actual 28 hours
- Grace Pan: Expected 14 hours, actual 28 hours
- Alea Nablan: Expected 17 hours, Actual 28 hours

##Phase 3 Expected vs. Actual Time

- Maadhav Kothuri: Expected 7 hours, Actual 10 hours
- Nathan Cheng: Expected 10 hours, actual 16 hours
- Raymond Wang: Expected 10, Actual 18 hours
- Grace Pan: Expected 9 hours, actual 15 hours
- Alea Nablan: Expected 11 hours, Actual 16 hours

##Phase 4 Expected vs. Actual Time

- Maadhav Kothuri: Expected 3 hours, Actual 2 hours
- Nathan Cheng: Expected 4 hours, actual 4 hours
- Raymond Wang: Expected 2, Actual 4 hours
- Grace Pan: Expected 4 hours, actual 3 hours
- Alea Nablan: Expected 4 hours, Actual 3 hours

## RFP (Project Proposal)

Our project is to bring awareness to foster care and consolidating resources to those in need for foster care in Texas. In this way, we can help support children in the foster care system so that they can have better experiences.

## API Documentation

https://documenter.getpostman.com/view/32909464/2sA2r3ZkjZ

## URLs of at least three data sources that you will programmatically scrape (at least one must be a RESTful API) (be very sure about this)

- https://charity-navigator.stellate.io/ Foster Care Orgs with Reviews
- https://developers.google.com/maps (RESTful API) Locations of Orgs, children mental health institutions, Reviews, Hours of Operation
- https://projects.propublica.org/nonprofits/search?q=foster+care(RESTful API) Nonprofit Foster Orgs
- https://www.mediawiki.org/wiki/API:Main_page#API_documentation (RESTful API)
- https://data.texas.gov/See-Category-Tile/CPS-3-2-Children-in-Substitute-Care-by-Placement-T/kgpb-mxxd/about_data Foster Kids per county
- https://www.opendatanetwork.com/dataset/data.texas.gov/u4j8-y2ff Foster homes per county
- https://developers.google.com/youtube/v3/docs YouTube API for any videos used
- https://data.texas.gov/dataset/CPI-1-1-Texas-Child-Population-ages-0-17-by-County/x5xb-idr6/about_data Child Population per county
- https://www.eventbrite.com/platform/api#/introduction/about-our-api Children events

## at least three models

Counties

- Name
- Population
- Number of agencies / organizations
- Number of kids in foster care
- Number of foster homes

Media

- Maps of each county
- Images of foster homes in the area

Agencies/organizations

- Name
- Location
- Type
- Reviews (number of stars)
- Proximity
- Hours of Operation (Open right now or not)

Media

- Images of organizations
- Text about each organization

Resources(Events/communities, mental health)

- Name
- Location
- Type
- Phone Number
- Website

Media

- Images of each resource
- Text description of each resource
- Videos about the resource (if available for that resource)

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

## Estimated time to completion

16 hours

## Actual time to completion
