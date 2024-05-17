# Customer Service App

The is a Node.js module that provides customer services such as calculating the bill after tax, finding food and drinks that meet a price range set by the customer, categorising alcoholic and non-alcoholic drinks, the ability to send feedbacks as a customer and a randon cocktail selector for recreational activities

## Setting up

To use this module in your Node.js project, follow these steps:

1. Install Node.js from https://nodejs.org/.
2. Save the `Malcolm_CustomerService.js` file in your project directory.
3. Create a new file javascript file to use the API
4. In the created file, insert the code below to import the module using the correct file path

    ```js
    const service = require('./Malcolm_CustomerService.js');
    ```
5. To execute the module, run the command below in your terminal:

    ```js
    nodemon app.js
    ```

# Usage
There are the functions in the module:

```js
//Required to run the module
const service = require('./Malcolm_CustomerService.js');

//Calculates the bill (cost, gst, service charge, tips)
service.calculateTotalBill(100,9,10,5);

//Shows Items on the menu that meet the price range of $20-$25
service.minmaxbudget(20,25);

//Shows which drinks are alcoholic and non-alcoholic
service.NonAlcoholicList();

//Sends feedback and also show feedback(s) inputted into the list
service.GiveFeedback("Malcolm",  "221737Y@mymail.nyp.edu.sg", "The food tasted like it was made with love");
service.GiveFeedback("Malcolm", "221737Y@gmail.com", "I didn't like the food", "P@ssw0rd!");

//Chooses a random cocktail lol
service.CocktailParty();
```
# Notes

- Within the `Malcolm_CustomerService.js` file you can find and edit the menu which is a json object labeled "Menu" 
- The random cocktails can be edited on Line 2 of `Malcolm_CustomerService.js`  
- The password can be edited on Line 3 of `Malcolm_CustomerService.js`  