# Venzee Account API

This NodeJS with Typescript API contains the functionality to get balance,create transactions, fetch transactions and look transactions for id for unique account.

Note: In this case node_modules is implicit due to as requirement the binary solution should be there without compilation, however here you can find step by step how to compile it and test it. To run the final build you can run:

### `run npm run start `

Runs the app in the compilated mode.\
Open [http://localhost:8000](http://localhost:8000) to hit it in the browser.

In order to get this application working you should run this project with the following arguments:

### `npm run dev`

Runs the app in the development mode with nodemon.\
Open [http://localhost:8000](http://localhost:8000) to hit it in the browser.
The page will reload if you make edits.\

### `npm run build`

Builds the api for deployment to the `dist` folder.\

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


### `npm run start`
Runs the app in the compilated mode.\
Open [http://localhost:8000](http://localhost:8000) to hit it in the browser.

### `npm run test`
Runs the unit test with jest.

# API endpoints:

You can consult Swagger documentation going to 

`http://localhost:8000/api-docs/`

Get the account balance: 
GET:

`http://localhost:8000/api/v1/account/balance`

Create a transaction:
POST:

`http://localhost:8000/api/v1/account/transactions`

`bodyRequest: {  "type": string, "amount": number }`

Fetch all transactions:
GET:

`http://localhost:8000/api/v1/account/transactions`

Find a transaction by its ID:
GET:

`http://localhost:8000/api/v1/account/transactions/{uuid}`


## TODO's

- Adding more testing to service and model modules.
- Adding security.
- Handling more than one account.
- Adding proper logger.

Any question you can send an email to erramani.velasco@gmail.com

