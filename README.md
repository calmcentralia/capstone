# MusicGenius

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

MusicGenius is a web application inspired by RapGenius built using Ruby on Rails
and React.js. MusicGenius allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [x] Create an account
- [x] Log in / Log out
- [x] Create, read, edit, and delete song lyrics
- [x] annotate lyrics through highlighting
- [x] add new artists with descriptions

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
- [x] allow for creation of artists and songs
- [x] must be logged in to add song or artist
- [x] jBuilder views for add artist and add song
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Splash Page Setup and Styling (1 day)

**Objective:** Nav Bar linking to add artist and add user, Songs Listed in most recently created order

- [x] nav bar with functional links for add artist and add song pages
- [x] Displays most recently created songs (broken links for now)
- [x] CSS styling to make it all look pretty
- [x] CSS for other pages as well

### Phase 4: Song Page Basic Setup (1 day)

**Objective:** Statically displays lyrics and artist descriptions

- [x] present data using the song > album > artist hierarchy
- [x] position elements on the page
- [x] Add Song page now routes here
- [x] fix splash page links to route here

### Phase 5: Annotations (2 day)

**Objective:** Annotations belong to Users and Songs.  Components for creating and viewing annotations

- [x] create `Annotation` model
- build out API, Flux loop, and components for:
  - [x] Annotation CRUD
  - [x] Adding Annotations requires being logged in
  - [x] Can view annotations and who created them
  - [x] Can create annotations on highlighted sections that do not already have annotations

### Phase 6: Searching (1.5 days)

**Objective:** Search properly returns relevant information. Search results page stylized

- [x] Make search return useful songs/artists/albums
- [x] Data displayed nicely (CSS)
- [x] If search matches an artist exactly displays artist description
- [x] Results link to song pages

### Phase 7: Clean Up (1.0 days)

**objective:** Fix any issues, mess with css styling until perfect

- [ ] if any minor errors persist, fix them
- [ ] get styling perfect

### Bonus Features (TBD)
- [ ] Users can upvote annotations
- [x] comment section at bottom of annotations
- [ ] users can have profiles
- [ ] Artists have images associated with them that display on song and search pages
- [x] Comments and Annotations can share images

things to finish that I have started:

- [x] styling of comments
- [ ] delete buttons for comments and annotations
- [ ] the rest of the error handling
- [ ] edit annotations and comments
- [ ] cloudinary?  

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
