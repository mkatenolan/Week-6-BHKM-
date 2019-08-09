# Week-6-BHKM-
Database project 

Andy, Christine, Emmanuel, Martha

Team BHKM - Bugbear

![](https://i.imgur.com/k5LL7Km.png)


## Project

* This week's project will involve setting up a database which you connect to via a node.js server. You'll use your data to make a dynamic web app for your front-end.
* Some suggested project ideas are below. Feel free to modify according to your interest, provided your idea has similar functionality.

### Requirements
* Simple web app with a node server and a database
* Your database comes with a schema, which should be documented in your readme (along with any other architectural decisions)
* Database hosted on Heroku, or locally
* Build script for your database
* Security concerns appropriately considered (you must protect against script injections!)
* Content dynamic, but DOM manipulation kept to a minimum
* Mobile-first design
* Clear user journey (even if you take one of our suggested ideas, document the user journey in your readme)
* test your server routes with supertest
* test your pure functions both server and client side
* set up a test database so that you can test your database queries
* Note We don't expect you to authenticate users (i.e. have a login or signup page), or even to simulate this feature. We'll cover how to do that properly in later weeks. Since these ideas were designed with Founders & Coders users in mind, we'll rely on trust instead of authentication :)

### code of conduct

- BEM 
- Ensure euqual number of commits 
- Commit often
-  Switch regularly but (do few commits first)
- Compartmentalise and work on the dedicated branch (pushing only needed after milestones)
- feature and fix branches

###  Idea
* Users are able to search for peetpeeves, add comments or create new petpeeves that they have



* You will need to make the requests and update the DOM in response using client-side JavaScript.
* As well as serving static HTML and JS files, your server will also need to provide endpoints that return DB query results as JSON. You can query your server from the client using the XMLHttpRequest method.
* You'll need to be able to make both POSTand GET requests to your server.

### MVP
- [ ] Mobile first design
- [ ] Basic site with long list of previous inputs by user
- [ ] Logo in top left, description and a search bar
- [ ] Field inputs are category, name and rant


### Stretchgoals
- [ ] GIFS
- [ ] Colour coded based upon your level of rage
- [ ] On selection - order previous entries by category
- [ ] 

### TO-DO
- [x] file structure?
- [x] Set-up repo 
- [x] Set-up Heroku + database URL 
- [x] set-up Travis 
- [x] create empty files
- [x]boilderplate HTML, CSS 
- [x]set-up server file 
- [x]set-up router file 
- [x]handler file 
- [x]install dependencies --> tape, tap-spec, ? 
- [x]config.env file
- [x]decide tables + write SQL file 
- [x]db_connection file 
- [x]build script file 
- [x]test folder - server-side tests + front-end tests 
- [x]queries file 
- [ ]html 
- [ ]CSS 
- [ ]front-end JS file 


### How to create local test database

- [ ] pgcli (will get you into your 'username')
- [ ] /d (gives you all tables currently accessible)
- [ ] /l (gives you all local databases)
- [ ] /c <databasename> (lets you switch to a different database)
- [ ] (once in the right database run) \i src/database/db_build.sql  (the path starting at the root of your folder)
- [ ] SELECT * FROM <databasename>

- [ ] go out of the pgcli and run: node <filebathtobuild.js> (node src/database/build.js = this will run the build file which will also build the remote database on heroku)
- [ ] you can now outside of pgcli write: pgcli <linkforherokudatabase> (selecting SELECT * from <databasename> will populate the correct base)
 
