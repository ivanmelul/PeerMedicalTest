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

    "Content-Type": "application/x-www-form-urlencoded"

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

    "Content-Type": "application/x-www-form-urlencoded"

    }

- Body:

    {

    "userId": "5d699f8ac4048c1de843e5dc",

    "title": "TV",
    
    "text": "TV Full HD",
    
    "tags[0]":"electronic",
    
    "tags[1]":"TV",
    
    "tags[2]":"samsung"
    
    }


### PUT /api/articles/:article_id
Edit an article.

- Method: PUT
- URL: /api/articles/5d699eb0c4048c1de843e5db
- Headers:

    {

    "token": "5CD4ED173E1C95FE763B753A297D5",

    "Content-Type": "application/x-www-form-urlencoded"

    }

- Body:

    {

    "userId": "5d699f8ac4048c1de843e5dc",

    "title": "TV",
    
    "text": "TV Full HD",
    
    "tags[0]":"electronic",
    
    "tags[1]":"TV",
    
    "tags[2]":"samsung"
    
    }
    
    

### DELETE /api/articles/:article_id
Remove an article.

- Method: DELETE
- URL: /api/articles/5d699eb0c4048c1de843e5db
- Headers:

    {

    "token": "5CD4ED173E1C95FE763B753A297D5",

    "Content-Type": "application/x-www-form-urlencoded"

    }
   


### POST /api/articles_by_tags
Return all articles (from all users) that contains the given tag(s) (1 or more).

- Method: POST
- URL: /api/articles_by_tags
- Headers:

    {

    "token": "5CD4ED173E1C95FE763B753A297D5",

    "Content-Type": "application/x-www-form-urlencoded"

    }

- Body:

    {
    
    "tags[0]":"book",
    
    "tags[1]":"TV",
    
    }

    
    
