Npm i to download dependencies

LESSON LEARNED FROM BUILDING THIS APPLICATION:

Always run CI/CD early in the project,  was attempting to deploy but will not build on deployment and too many bugs to back track.

Server worked on Azure, but could not retrieve the data from a AWS RDS. Tried deploying on AWS but server would not deploy but the Postgres DB was hosted on AWS RDS successfully


npx knex migrate:make 
migrate:rollback/latest
npx knex seed:run
