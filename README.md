# REST API Sample
REST API for a single endpoint that fetches the data in the
provided MongoDB collection and return the results in the requested format.

# Run project
```
$npm run dev
```

# Test project
```
$npm run test
```

# Heroku link to Get Records API Endpoint is HTTP POST /records
https://api-case.herokuapp.com/records

# Sample Request Payload
The request payload will include a JSON with 4 fields. Date parameters should be like this format YYYY-MM-DD.

```
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```
# Sample Response Payload
Response payload should have 3 main fields.

● “code” is for status of the request. 0 means success. Other values may be used for errors that you define.

● “msg” is for description of the code. You can set it to “success” for successful requests. For unsuccessful requests, you should use explanatory messages.

● “records” will include all the filtered items according to the request. This array should include items of “key”, “createdAt” and “totalCount” which is the sum of the "counts” array in the document.

```
{
  "code":0,
  "msg":"Success",
  "records":[
    {
      "key":"TAKwGc6Jr4i8Z487",
      "createdAt":"2017-01-28T01:22:14.398Z",
      "totalCount":2800
    },
    {
      "key":"NAeQ8eX7e5TEg7oH",
      "createdAt":"2017-01-27T08:19:14.135Z",
      "totalCount":2900
    }
  ]
}
```
