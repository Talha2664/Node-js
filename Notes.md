In a Backend Folder

Create package.json
```
package.json is the identity card of your Node.js project.
It tells:
Project name
Which packages you installed (express, nodemon, etc.)
How to run your project

Command : npm init -y
```

Install nodemon(Optional)

It automatically restarts your Node.js app when you change code.

Option 1 (BEST – Project level)
```
Install nodemon as dev dependency:

Command : npm install nodemon --save-dev

This will add in package.json:

"devDependencies": {
  "nodemon": "^3.1.11"
}

This is recommended.
```
Option 2 (Global – Optional)
```
Command : npm install -g nodemon
```


