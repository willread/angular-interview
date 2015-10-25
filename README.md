Tasks
=====

[BUG] Search is broken, the API throws a 404 error no matter what search term is entered

[FEATURE] The app is currently only showing the names returned by the API. Add support for showing the rest of the data returned from the API as new columns in the app

[FEATURE] Show an alert dialog with the error message returned when no results are found

API Docs
========

GET /people?term=<string:term>
------------------------------

Returns a list of people, either the entire list, or a subset
filtered by a search term.

Examples:

GET /people?term=Thompson

  ```
  HTTP/1.1 200 OK
  Content-Type: application/json

  [
    {
      "name": "Jim Thompson",
      "age": 23,
      "gender": "Male"
    },
    {
      "name": "Jane Thompson",
      "age": 45,
      "gender": "Female"
    }
  ]
  ```

GET /people?term=Adams
  
  ```
  HTTP/1.1 404 Not Found
  Content-Type: application/json

  {
    message: "No people found."
  }
  ```