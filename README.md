# MusicGenius

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

MusicGenius is a web application inspired by RapGenius built using Ruby on Rails
and React.js. MusicGenius allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete song lyrics
- [ ] annotate lyrics through highlighting
- [ ] add new artists with descriptions

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Artist Model, Song Model, API, and basic APIUtil (2 days)

**Objective:** Artists, and Songs can all be created

- [x] create `Artist` and `Song` models
- [x] seed the database with a small amount of test data
- [ ] allow for creation of artists and songs
- [ ] must be logged in to add song or artist
- [ ] jBuilder views for add artist and add song
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Splash Page Setup and Styling (1 day)

**Objective:** Nav Bar linking to add artist and add user, Songs Listed in most recently created order

- [ ] nav bar with functional links for add artist and add song pages
- [ ] Displays most recently created songs (broken links for now)
- [ ] CSS styling to make it all look pretty
- [ ] CSS for other pages as well

### Phase 4: Song Page Basic Setup (1 day)

**Objective:** Statically displays lyrics and artist descriptions

- [ ] present data using the song > album > artist hierarchy
- [ ] position elements on the page
- [ ] Add Song page now routes here
- [ ] fix splash page links to route here

### Phase 5: Annotations (2 day)

**Objective:** Annotations belong to Users and Songs.  Components for creating and viewing annotations

- [ ] create `Annotation` model
- build out API, Flux loop, and components for:
  - [ ] Annotation CRUD
  - [ ] Adding Annotations requires being logged in
  - [ ] Can view annotations and who created them
  - [ ] Can create annotations on highlighted sections that do not already have annotations

### Phase 6: Searching (1.5 days)

**Objective:** Search properly returns relevant information. Search results page stylized

- [ ] Make search return useful songs/artists/albums
- [ ] Data displayed nicely (CSS)
- [ ] If search matches an artist exactly displays artist description
- [ ] Results link to song pages

### Phase 7: Clean Up (1.0 days)

**objective:** Fix any issues, mess with css styling until perfect

- [ ] if any minor errors persist, fix them
- [ ] get styling perfect

### Bonus Features (TBD)
- [ ] Users can upvote annotations
- [ ] comment section at bottom of song page
- [ ] users can have profiles
- [ ] Artists have images associated with them that display on song and search pages

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
