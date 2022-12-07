# Project Template: React/Rails API

## Description

Concert Go-er allows users to schedule their own and reserve tickets for concerts. Users who reserve tickets for a concert will have their username displayed on the concert modal as attending. This simple app is built to show the relationship between 3 models with 2 has_many through associations.

[Video walkthrough](https://youtu.be/7UTy35iW76I)

**Note on routing**: react-router-dom v6 was used. When changing front-end Routes, please double check your syntax. For more information, [check out this blog](https://blog.webdevsimplified.com/2022-07/react-router/)

## Cloning To Run Locally

The application is currently deployed with render. If you would like to run the application in localhost, do the following:

Start by **cloning** the application repository and removing the remote:

```console
$ git clone git@github.com:mykovasyl/phase-4-project-concert-goer.git your-project-name
$ cd your-project-name
$ git remote rm origin
```

Then, [create a new remote repository][create repo] on GitHub. Head to
[github.com](https://github.com) and click the **+** icon in the top-right
corner and follow the steps to create a new repository. **Important**: don't
check any of the options such as 'Add a README file', 'Add a .gitignore file',
etc. — since you're importing an existing repository, creating any of those
files on GitHub will cause issues.

[create repo]: https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line#adding-a-project-to-github-without-github-cli

Finally, connect the GitHub remote repository to your local repository and push
up your code:

```console
$ git remote add origin git@github.com:your-username/your-project-name.git
$ git push -u origin main
```

# Backend set up: migrations and seeding

## Migrations

To set up the database using migrations, run 'rails db:migrate'.

If changes need to be made to a migration, first run 'rails db:rollback' until you've rolled back the migration you're looking to change. After making the necessary changes, run 'rails db:migrate' once again.

New migrations can be created using the rails generator 'rails g migration NAME_OF_MIGRATION'. Remember to use '--no-test-framework' at the end of a generator if you're not building out your own test code.

If you make a mistake when creating the generator in CLI, run 'rails d migration NAME_OF_MIGRATION'

## Seeding

The seed file includes a template for seeding data. To make seeding easier, the faker gem was included in the Gemfile. Get more info on [faker gem here](https://github.com/faker-ruby/faker)

Run 'rails db:seed' to seed data.

If there are issues with the seed data and new data needs to be used, comment out the seed file and run 'rails db:reset' to drop and re-setup the DB.

# Frontend set up: npm and local server

## NPM install

Run 'npm install --prefix client' to install the package for the front end.

## Localhost Set-up

The current version of this application is set up to be deployed.

If you would like to run a localhost server, include the following changes to your cloned repo:

1. In the `Gemfile`, replace `gem 'pg', '~> 1.1'` with `gem 'sqlite3', '~>
1.4'`.
2. In the `database.yml` file, change the line `adapter: postgresql` to
   `adapter: sqlite3`.

Make sure to commit these changes to your cloned repo and run `bundle install` before launching the servers.

## Starting the servers

You can use the following commands to run the application servers:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

Shut down servers with control+C.
