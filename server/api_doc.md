# TITLE:

```
Kanban Application
```

# URL

```
http://localhost:3001
```

# HTTP Method:

> 1. Users

```
POST /users/register | POST /users/login | POST /users/googleLogin
```

> 2. Tasks

```
POST /tasks | GET /tasks | GET /tasks/:id | PUT /tasks/:id | PATCH /tasks/:id |DELETE /tasks/:id
```

# Endpoints

### USERS

> 1. Register

```
Create or register new user
URL: /users/register
Method: POST
Required Authentication: No
Required Authorization: No
```

- Request body:

```
{
  full_name: "<user full_name >",
  email:"<user email>",
  password: "<user password>",
}
```

- Success Response

```
- Status: 201 Created
- Response Body:

{
  "message": "create new user success",
  "id": "<user id from system",
  "email": "<user email >",
}
```

> 2. Login

```
Login with account that already register in database system
URL: /users/login
Method: POST
Required Authentication: No
Required Authorization: No
```

- Request body:

```
{
  email:"<user email>",
  password: "<user password>",
}
```

- Success Response

```
- Status: 200 OK
- Response Body:

{
  "email": "<user email>",
  "access_token": "<user access_token>"
}
```

> 3. Login Google Account

```
Login with account google
URL: /users/googleLogin
Method: POST
Required Authentication: No
Required Authorization: No
```

- Success Response

```
Status: 200 OK
Response Body:

{
  email: "<user email>",
  access_token: "<google access_token>"
}
```

### TASKS

> 1. POST /tasks

```
Create new task
URL: /tasks
Method: POST
Required Authentication: Yes
Required Authorization: No
```

- Request Headers:

```
{
  access_token: "<user access_token>"
}
```

- Request Body:

```
{
  title: "<task title>",
  category: "<task category>",
}
```

- Success Response:

```
-Status: 201 Created
- Response Body
{
  message: "created new task success",
  
}
```

> 2. GET /tasks

```
Get/find all tasks users from database
URL: /tasks
Method: GET
Required Authentication: Yes
Required Authorization: No
```

- Request Headers:

```
{
  access_token: "access_token"
}
```

- Success Response:

```
-Status: 200 OK
- Response Body
[
  {
    id: "<task id from system>",
    title: "<task title from system>",
    category: "<task category from system>",
    UserId: "<UserId from system>",
    createdAt: "<created date from system>",
    updatedAt: "<last updated date category from system>",
  }
]
```

> 3. GET /tasks/:id

```
Get/find task with specific id
URL: /tasks/:id
Method: GET
Required Authentication: Yes
Required Authorization: No
```

- Params

```
id: integer
```

- Request Headers:

```
{
  access_token: "access_token"
}
```

- Success Response:

```
-Status: 200 OK
- Response Body
{
    id: "<task id from system>",
    title: "<task title from system>",
    category: "<task category from system>",
    UserId: "<UserId from system>",
    createdAt: "<created date from system>",
    updatedAt: "<last updated date category from system>",
}

```

> 4. Update Task

```
Update task with specific id
URL: /tasks/:id
Method: PUT
Required Authentication: Yes
Required Authorization: Yes (only if the task belongs to logged in user)
```

- Params

```
id: integer
```

- Request Headers:

```
{
  access_token: "access_token"
}
```

- Success Response:

```
-Status: 200 OK
- Response Body
{
    id: "<task id from system>",
    title: "<task title>",
    category: "<task category>",
    UserId: "<id from loggin user>",
    createdAt: "<created date from system>",
    updatedAt: "<last updated date category from system>",
}
```

> 5. Update Category Task

```
Update task with specific id
URL: /tasks/:id
Method: PATCH
Required Authentication: Yes
Required Authorization: Yes (only if the task belongs to logged in user)
```

- Params

```
id: integer
```

- Request Headers:

```
{
  access_token: "access_token"
}
```

- Success Response: 200 OK
```
-Status: 200 OK
- Response Body
{
    id: "<task id from system>",
    title: "<task title from system>",
    category: "<new category task>",
    UserId: "<id from loggin user>",
    createdAt: "<created date from system>",
    updatedAt: "<last updated date category from system>",
}
```

> 6. Delete Task

```
Delete task with specific id
URL: /tasks/:id
Method: DELETE
Required Authentication: Yes
Required Authorization: Yes (only if the task belongs to logged in user)
```

- Params

```
id: integer
```

- Request Headers:

```
{
  access_token: "access_token"
}
```

- Success Response:

```
-Status: 200 OK
- Response Body
{
   "message": "<Delete task success>"
}
```

# RESTful Error Message

1. Response Error (400) Bad Request - SequelizeValidationError

- Response Body:

```
{
  status: 400,
  message: "<array of error message>"
}
```

2. Status 400 Bad Request - SequelizeDatabaseError

- Response Body:

```
{
  status: 400,
  message: "<array of error message>"
}
```

3. Status 400 Bad Request - SequelizeUniqueConstraintError

- Response Body:

```
{
  status: 400,
  message: "<array of error message>"
}
```

4. Response Error (400) Bad Request - Invalid email or password

- Response Body:

```
{
  status: 400,
  message: ['Invalid email or password']
}
```

5. Status 401 UnAuthenticated

- Response Body:

```
{
  status: 401,
  message: ['UnAuthenticated - You have not logged in']
}
```

6. Status 403 Forbidden UnAuthorized

- Response Body:

```
{
  status: 403,
  message: ['Forbidden - Access is denied']
}
```

7. Status 404 User Not Found

- Response Body:

```
{
  status: 404,
  message: ['User not found']
}
```

8. Status 404 Task Not Found

- Response Body:

```
{
  status: 404,
  message: ['Task not found']
}
```

9. Status 500 Internal server errors

- Response Body:

```
{
  status: 500,
  message: ['Internal server errors']
}
```
