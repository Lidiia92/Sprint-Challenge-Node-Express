 #Mention two parts of Express that you learned about this week.

 Routing and middleware.

 #Describe Middleware?
  Web server can be described as a function that takes in a request and outputs a response. So middlewares are functions executed in the middle after the incoming request then produces an output which could be the final output passed or could be used by the next middleware, so we can have more than one middleware and they will execute in the order they are declared.

 Describe a Resource?

 #What can the API return to help clients know if a request was successful?

It can return a response with a status code 200, meaning that the request was fulfilled.

 #How can we partition our application into sub-applications?

 We can partition it into smaller files, where each file will be responsible for handling particualar part of the application. 