# PeerMedicalTest

RESTful API with Node.js, Express.js, Mongoose and MongoDB.
Example of a RESTful API built with Node.js, Express.js, Mongoose and MongoDB.

## RESTful API endpoints

### POST /api/users
Create a new user.

- Method: POST
- URL: /api/users
- Headers:

    {

    "token": "5CD4ED173E1C95FE763B753A297D5",

    "Content-Type": "application/json"

    }

- Body:

    {

    "name": "Lorie",

    "avatar": "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"

    }



### POST /api/article
Create a new article.

- Method: POST
- URL: /api/article
- Headers:

    {

    "token": "5CD4ED173E1C95FE763B753A297D5",

    "Content-Type": "application/json"

    }

- Body:

    {

    "userId": "5d699f8ac4048c1de843e5dc",

    "title": "TV",
    
    "text": "TV Full HD",
    
    "tags":["electronic", "TV", "samsung"]
    
    }


### PUT /api/articles/:article_id
Edit an article.

- Method: PUT
- URL: /api/articles/5d699eb0c4048c1de843e5db
- Headers:

    {

    "token": "5CD4ED173E1C95FE763B753A297D5",

    "Content-Type": "application/json"

    }

- Body:

    {

    "userId": "5d699f8ac4048c1de843e5dc",

    "title": "TV",
    
    "text": "TV Full HD",
    
    "tags":["electronic", "TV", "samsung"]
    
    }
    
    

### DELETE /api/articles/:article_id
Remove an article.

- Method: DELETE
- URL: /api/articles/5d699eb0c4048c1de843e5db
- Headers:

    {

    "token": "5CD4ED173E1C95FE763B753A297D5",

    "Content-Type": "application/json"

    }
   


### POST /api/articles
Return all articles (from all users) that contains the given tag(s) (1 or more).

- Method: GET
- URL: /api/articles?tags=book,TV
- Headers:

    {

    "token": "5CD4ED173E1C95FE763B753A297D5",

    "Content-Type": "application/json"

    }

    
## Install
npm install

## Run
0. Make sure MongoDB is running, if not: sudo ~/mongodb/bin/mongod (assuming you have ~/mongodb directory).
1. npm start
