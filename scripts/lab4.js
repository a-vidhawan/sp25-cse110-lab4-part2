/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    // Check if num1 and num2 are numbers and add is a boolean
    // If not, return false.
    if (typeof num1 !== 'number' || Number.isNaN(num1))
        return false;
    if (typeof num2 !== 'number' || Number.isNaN(num2))
        return false;
    if (typeof add !== 'boolean')
        return false;

    if (add) {
        let result = 0;

        result = num1 + num2;

        return result;
    }
    else {
        return add;
    }
}

/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied. Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {

    // Check if prices is an array and discount is a number between 0-1
    // If not, return false.
    if (!Array.isArray(prices))
        return false;
    if (typeof discount !== 'number' || discount < 0 || discount > 1)
        return false;

    const discounted = []
    const length = prices.length;
    
    if (length == 0) {
        return false;
    }

    let discountedPrice = 0
    for(let i = 0; i < length; i++) {
        discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};