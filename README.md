# project1

## Environments

- [The Project 1 site prod](https://project1-prod.netlify.app/) for demo.
  This is the production site
- [The Project 1 site develop](https://project1-dev.netlify.app/) for demo.
  This is the development site, where testing happens to ensure everything is good before moving to production

## Purpose

This is a test team project website! The purpose for this site is to practice not only coding html, css and javascript, but to learn how to collaborate with others via stories in github as well as get more comfortable with different libraries and frameworks and coding techniques for fun!

## Tech Used

<b>Built with</b>

- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

- HTML5, CSS, Javascript, and jQuery

# Getting Started

- Clone the GitHub repo to your machine `git clone https://github.com/schmitty890/project1.git`
- Run the index.html file on your live server for development.
- 🎉Happy developing!🎉

# Development 👨‍💻

Once you've cloned the project, start your live server off your index.html file.

### Branching process

- Master is a 🔒protected branch🔒. This means we need at least 1 approval before we merge into our master branch. (having the master branch protected helps so we know for sure what is going into master, and noone can accidentally push code to it and break our site)
- Develop will be the branch we create branches off of. Develop will be merged into master at the end of every day.
- This screenshot 👇 illustrates this process
- Feature A and Feature B are branches where we code our tasks. Once finished with making your edits, we merge that branch into develop. At the end of everyday, develop gets merged into master.
- Then develop is updated with the latest version of master, and the process happens all over again.

![screenshot](https://raw.githubusercontent.com/schmitty890/homestead/master/public/assets/images/branching.jpg)

### Git steps

1. Checkout the `develop` branch locally on your machine, `git checkout develop`
2. `git pull` on the develop to make sure your develop branch is up to date with the latest code
3. `git checkout -b yournewbranch` create a new branch off of develop, and name the branch related to the story you are working on. In this example, the branch name is `yournewbranch`
4. Now that you are on your new branch, make your code edits
5. Once you are happy with your code edits, see the status of your files with `git status`
6. `git add .` will add all of the changed files to your commit message. If you only want a single file or specific files added, `git add thefilename` will add the specific file instead of all of them
7. `git commit -m "your commit message with what your change is"` add a commit message to go along with your commit
8. `git push` to push your commit up to the repository. Navigate to the [branches tab](https://github.com/schmitty890/project1/branches) to see your branch in the repository

### Pull requests

Each branch needs to have a pull request (PR) where others review the code changes. Click on `New pull request` on your branch you just pushed up and point your branch to be merged into `develop`. NOTE: do NOT point your pull request to merge straight to master. See the screenshot above for a visual on the branching strategy we will follow for this repository.

### Find a bug or want to add an issue? 🕵️

- Document what the issue is, if you can find the root problem, write whatever you have down
- Go to the Issues tab, create a new issue
- Assign it to yourself if you want to work on that issue, or leave it blank and someone else can assign themselves to it if they want to take on the challenge
- Add a label to it. Most are going to be bugs or enhancement
- [See bucky talk about this in more detail](https://www.youtube.com/watch?v=YshvUGgF_3o)
