// Generate Short Code Function
// Creates a number representation of the store, date and transactionId
// Converts the number representation to base 32 and whilst also shifting 24 characters
// Returns a base32 representation that will always be 9 characters long
function generateShortCode(storeId, transactionId) {
    const store = storeId.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false });

    const todayDate = new Date();
    const date = todayDate.getDate().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + todayDate.getMonth().toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + todayDate.getFullYear().toString().substring(2);

    const transaction = transactionId.toLocaleString('en-US', { minimumIntegerDigits: 4, useGrouping: false });

    const finalNumber = store + date + transaction;
    console.log(finalNumber)

    let shortCode = "";
    for (let i = 0; i < finalNumber.length; i = i + 3) {
        if (i < 12) {
            shortCode += (parseInt(finalNumber.substring(i, i + 3)) + 24).toString(32).padStart(2, "0");
        }
        else {
            shortCode += (parseInt(finalNumber.substring(i, i + 3)) + 24).toString(32);
        }
    }
    console.log(shortCode)

    return shortCode;
}

// Decode Short Code
// Reverts the short code from base32 to base10 subtracting 24 characters on the way
// Then take the representation 
function decodeShortCode(shortCode) {
    let numberCode = "";

    for (let i = 0; i < shortCode.length; i = i + 2) {
        if (i < 8) {
            numberCode += (parseInt(shortCode.substring(i, i + 2), 32) - 24).toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false });
        } else {
            numberCode += (parseInt(shortCode.substring(i, i + 2), 32) - 24).toString();
        }
    }

    console.log(numberCode)

    return {
        storeId: parseInt(numberCode.substring(0, 3)), // store id goes here,
        shopDate: new Date((20 + numberCode.substring(7, 9)), numberCode.substring(5, 7), numberCode.substring(3, 5)), // the date the customer shopped,
        transactionId: parseInt(numberCode.substring(9)), // transaction id goes here
    };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {

    var storeIds = [42, 42, 0, 9]
    var transactionIds = [9675, 23, 123, 7]

    storeIds.forEach(function (storeId) {
        transactionIds.forEach(function (transactionId) {
            var shortCode = generateShortCode(storeId, transactionId);
            var decodeResult = decodeShortCode(shortCode);
            console.log(decodeResult)
            $("#test-results").append("<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>");
            AddTestResult("Length <= 9", shortCode.length <= 9);
            AddTestResult("Is String", (typeof shortCode === 'string'));
            AddTestResult("Is Today", IsToday(decodeResult.shopDate));
            AddTestResult("StoreId", storeId === decodeResult.storeId);
            AddTestResult("TransId", transactionId === decodeResult.transactionId);
        })
    })
}

function IsToday(inputDate) {
    // Get today's date
    var todaysDate = new Date();
    // call setHours to take the time out of the comparison
    return (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0));
}

function AddTestResult(testName, testResult) {
    var div = $("#test-results").append("<div class='" + (testResult ? "pass" : "fail") + "'><span class='tname'>- " + testName + "</span><span class='tresult'>" + testResult + "</span></div>");
}