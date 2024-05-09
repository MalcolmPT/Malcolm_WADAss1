module.exports = {
    // Takes in the total cost and adds GST, Service charge, and tips chronologically
    calculateTotalBill(amount, GSTrate, ServiceCharge, tips) {
        const AfterServiceCharge = amount * ((ServiceCharge + 100 )/ 100);
        const AfterGST = AfterServiceCharge * ((GSTrate + 100)/ 100);
        const Total = tips + AfterGST;
        let formattednum = Total.toFixed(2);
        console.log("Total Cost: $" + formattednum);
        
},
    //this is food menu
    FoodItems: [
        { "Name": "Truffle Fries", "Price": 4 },
        { "Name": "Fettuccine Alfredo", "Price": 12 },
        { "Name": "Wagyu Steak ", "Price": 22 },
        { "Name": "Cheeseburger", "Price": 16 },
        { "Name": "Caesar salad", "Price": 9 },
        { "Name": "Grilled Salmon ", "Price": 20 },
        { "Name": "Iced Lemon Tea", "Price": 3, "alocoholic": "No" },
        { "Name": "Coca Cola", "Price": 2, "alocoholic": "No" },
        { "Name": "Vanilla Milkshake", "Price": 6, "alocoholic": "No" },
        { "Name": "Chocolate Milkshake", "Price": 6, "alocoholic": "No" },
        { "Name": "Blueberry Soda", "Price": 2, "alocoholic": "No" },
        { "Name": "Mojito", "Price": 25, "alocoholic": "Yes" },
        { "Name": "Bloody Mary", "Price": 20, "alocoholic": "Yes" },
        { "Name": "Piña Colada", "Price": 21, "alocoholic": "Yes" },
        { "Name": "Martini", "Price": 24, "alocoholic": "Yes" },
        { "Name": "Margarita", "Price": 24, "alocoholic": "Yes" },
        { "Name": "Wine", "Price": 23, "alocoholic": "Yes" }
        
    ],
    // Takes account users minimum and maximum budget and finds food items that meet the budget range key: int value
    minmaxbudget(MinimumBudget, Maximumbudget) {
        
        const result = this.FoodItems.filter(item => item.Price >= MinimumBudget && item.Price <= Maximumbudget);
        for (const item of result){
            const x = [];
            const y = [];
            x.push(item.Name);
            y.push(item.Price);
            console.log("Item: " + x[x.length-1] + "/ $" + y[y.length-1]);  
        }
        
    },


    //Seperates alcohlic and non-alcoholic beverages by using key: string value 
    NonAlcoholicList(){
        const nonAlcoholicDrinks = [];
        const AlcoholicDrinks = [];
        for (const item of this.FoodItems){
            if (item.alocoholic == "No"){
                nonAlcoholicDrinks.push(" " + item.Name );
            }
            else if (item.alocoholic == "Yes"){
                AlcoholicDrinks.push(" " + item.Name);
            }
        }
        return console.log("These are the non-Alcoholic drinks\n" + nonAlcoholicDrinks + "\n\nThese are the Alcoholic drinks\n" + AlcoholicDrinks);
        
    },
    //Allows users to send Name, Email and feedback and store it within an array as json objects Feedbacks can be accessed with a password(Clearance)
    GiveFeedback(Name, Email, Feedback, password = ""){
        ListOfFeedbacks = []
        if (password != "P@ssw0rd!" || password == "")
            {
                
                let Json = {"Name" : Name, "Email": Email, "Feedback":Feedback};
                ListOfFeedbacks.push(Json);
            }
        console.log(ListOfFeedbacks);
    },
    //Chooses a random cocktail for the customer
    CocktailParty(){
        const cocktails = ["Mojito", "Bloody Mary", "Piña Colada", "Martini", "Margarita"];
        const randomIndex = Math.floor(Math.random() * cocktails.length);
        console.log(cocktails[randomIndex]);
    }

    
}

module.exports.calculateTotalBill(100,9,10,40);
module.exports.minmaxbudget(20,25);
module.exports.NonAlcoholicList();
module.exports.GiveFeedback("Malcolm", "221737Y@mymail.nyp.edu.sg", "The food tasted like it was made with love");
module.exports.GiveFeedback("Darren", "D4rren@gmail.com", "I didn't like the food");
module.exports.GiveFeedback("Russell", "Ruzzel@gmail.com", "Amazing variety of drinks!");
module.exports.GiveFeedback("Darren", "D4rren@gmail.com", "I didn't like the food", "P@ssw0rd!");
module.exports.CocktailParty();
// console.log(module.exports.ListOfFeedbacks);