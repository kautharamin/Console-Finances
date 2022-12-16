// Pseudocode 

// Define the dataset
// Iniatialise variables for total number of months, net total, average change, 
    // greatest increase in profits and greatest decrease in profits
// Create a loop to access the second index of each array
// Calculate the total number of months in the dataset
// Calculate the net total amount of profit/losses over the period
    // Calculate profit/losses for every month except Month 1 and store in an array


// From the dataset, profit per month needs to be calculated to find greatest increase or decrease
    // access the second index of the array
// Find the greatest increase in profits (date and amount) over the whole period
// Find the greatest decrease in profits (date and amount) over the whole periof
// Print the results





// START HERE
// Define a function that performs the financial analysis

function financialAnalysis(finances) {
    var totalMonths = 0;
    var netTotal = 0;
    var averageChange = 0;
    var increaseMonth = 0;
    var increaseValue = 0;
    var decreaseMonth = 0;
    var decreaseValue = 0;

    // Use a loop to calculate all analysis
    for (var i = 0; i < finances.length; i++) {
        totalMonths++; // 
        netTotal += finances [i][1]; // +=  ---> netTotal = netTotal + finances[i][1]
        
    }

    // Build the financial analysis string
    let analysis = 'Financial Analysis \n----------------------------\n';
    analysis += '\nTotal Months: ' + totalMonths;
    analysis += `\nTotal: ${netTotal}`;
    
    
    return analysis;

}
// Define the financial data

var finances = [
    ['Jan-2010', 100],
    ['Feb-2010', -200],
    ['Mar-2010', 300],
  ];
  
  // Perform the financial analysis and print the results
  console.log(financialAnalysis(finances));