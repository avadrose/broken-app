# Broken App Issues

1. JSON request body was not being parsed. App was trying to read:

'''js
req.body.developers 

but req.body was undefined because Express was not set up tp parse JSON.
Added before routes:
app.use(express.json());

2. Async map() returned Promises instead of finished results. To fix, created the requests first and then waited.
Added:
await Promise.all(requests);

3. The code tried to access response data before requests finished using .data. Waited for all requests to resolve before building the response. 

4. Error variable was not defined and used next(err) without defining err. 
Changed catch block:

catch (err) {
    return next(err);
}

5. Route logic was mixed directly into the route so the Github request was moved into a helper function.
async function getDeveloper(username){
    ...
}

6. Variable names were short and didn't explain what they represented. Used more descriptive names.

7. Response handling allows app to directly return JSON using express instead of manually converting response to JSON.