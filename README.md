Npm i to download dependencies

Workingo on adding middleware to function to check for duplicates in the post router

Have deployed the database to AWS and AZURE but AZURE has caused the most issues when coming to launching the DB on a cloud service, so am sticking with AWS for RDS. Attemped to launch the server on Azure but would not read AWS RDS so switched. Still working on launching the server because I have ran into issues with AWS ELB and will probably start from scratch and relaunch again but this is the current progress I have. 


npx knex migrate:make 
migrate:rollback/latest
npx knex seed:run