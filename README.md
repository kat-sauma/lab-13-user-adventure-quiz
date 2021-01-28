# EDIT-THIS-README
Meta Data
- miro board plan for story
- make data page

ENTER PAGE HTML
- Video or Image
- Button 
    redirects to home page


HOME PAGE HTML
- Form for User Info
- Submit button
    store to local storage
    redirect to map

MAP HTML
- LIST ul to create each quest as li
- image/s
- clickable 3 areas of ocean
    sends to quest

MAP GOALS
- completed quests: redirect to results page
- if user has <= 0 oxygen points redirect to results page
- otherwise grab quest data
- loop through
- generate title for each quest
- if quest has been completed disable or cross out
- if quest has not been completed it should link to correct quest

QUEST HTML
- header image paragraph button radio buttons
- 3 pages from each place on map
    selection click sends back to map with crossed out quest

QUEST GOAL
- grab id of quest from URL
- id to findById quest in quest data
- use quest to populate elements of html
- submit button
    calc users new stats oxygen and bioluminescence points
    put new stats in local storage
    return to map

Results Page
- display writing that explains custom experience of user's quest
- replay button 
    clear local storage
    return home page