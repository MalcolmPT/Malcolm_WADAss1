module.exports = {
    // Takes in the total cost and adds GST, Service charge, and tips chronologically
    calculateTotalBill(amount, GSTrate, ServiceCharge, tips) {
        const AfterServiceCharge = amount * ((ServiceCharge + 100 )/ 100);
        const AfterGST = AfterServiceCharge * ((GSTrate + 100)/ 100);
        const Total = tips + AfterGST;
        console.log(Total);
},
    //this is food menu
    FoodItems: [
        { "Name": "Truffle Fries", "Price": 4 },
        { "Name": "Fettuccine Alfredo", "Price": 12 },
        { "Name": "Wagyu Steak with Potato Wedges", "Price": 22 },
        { "Name": "Cheeseburger", "Price": 16 },
        { "Name": "Caesar salad", "Price": 9 },
        { "Name": "Grilled Salmon with Mashed Potatoes", "Price": 20 }
    ],
    // Takes account users minimum and maximum budget and finds food items that meet the budget range
    minmaxbudget(MinimumBudget, Maximumbudget) {
        const result = this.FoodItems.filter(item => item.Price >= MinimumBudget && item.Price <= Maximumbudget);
        console.log(result);   
    },

    DrinkItems: [
        { "Name": "Iced Lemon Tea", "Price": 3, "alocoholic": "No" },
        { "Name": "Coca Cola", "Price": 2, "alocoholic": "No" },
        { "Name": "Vanilla Milkshake", "Price": 6, "alocoholic": "No" },
        { "Name": "Chocolate Milkshake", "Price": 6, "alocoholic": "No" },
        { "Name": "Blueberry Soda", "Price": 2, "alocoholic": "No" },
        { "Name": "Mojito", "Price": 25, "alocoholic": "Yes" },
        { "Name": "Bloody Mary", "Price": 20, "alocoholic": "Yes" },
        { "Name": "Piña Colada", "Price": 21, "alocoholic": "Yes" },
        { "Name": "Martini", "Price": 24, "alocoholic": "Yes" },
        { "Name": "Wine", "Price": 23, "alocoholic": "Yes" }
    ],

    NonAlcoholicList(){
        const nonAlcoholicDrinks = [];
        const AlcoholicDrinks = [];
        for (const item of this.DrinkItems){
            if (item.alocoholic === "No"){
                nonAlcoholicDrinks.push(" " + item.Name );
            }
            else if (item.alocoholic === "Yes"){
                AlcoholicDrinks.push(" " + item.Name);
            }
        }
        return console.log("These are the non-Alcoholic drinks\n" + nonAlcoholicDrinks + "\n\nThese are the Alcoholic drinks\n" + AlcoholicDrinks);
        
    }
}

module.exports.calculateTotalBill(100,9,10,40);
module.exports.minmaxbudget(10,15);
module.exports.NonAlcoholicList();