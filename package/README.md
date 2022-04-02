# handle-auth-logic
## description 
**The minimal and fully TypeScript coded pacakge for simplification of jwt authentication in web**
## installing pacakge

`npm i handle-auth-logic` \
OR \
`yarn add handle-auth-logic` \
**Guide for using this pacakge in web application** \
import pacakge at the root of your project like below \
`import {AuthLogic} from "handle-auth-logic"` \
then call it with some option 
 > const options  = { \
      /* **required**  call the refresh route*/ \
      url : "https://example.com/refresh"  , \
      /* optional default is post*/  \
      method : "GET"  , \
      /* optional default is  {"Content-Type": "application/json"}* / \
      headers : { "Accept": "image/jpeg" ,  "Content-Type": "application/json"} ,  \
      /* optional default is null*/ \
      body { id : 12}  ,\
      /* optional default is token this is the name of object that saved in localStorage*/ \
      key : "TOKEN", \
      /* optional  default is access this is property name which returned in response for access token*/ \
      access : "accessToken", \
      /* optional default is refresh this is property name which returned in response for refresh token and use in body as key*/  \
      refresh : "refreshToken" ,\
      /* optional default is 401 this is status code for recieved response*/ \
      errorCode : 403,
      /* optional default is native fetch , if you want to use axios import axios and pass it like below*/ \
      axios : axios // imported axios \
 }\
 >AuthLogic(options) \
**if you want to use this package for get token and set it to localStorage** \
`import {GetToken} from "handle-auth-logic"`\
 > GetToken(options) // all propery of options execpt axios and errorCode 
