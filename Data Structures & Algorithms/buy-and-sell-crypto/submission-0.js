class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowestPrice = prices[0];
        let profit = 0;

        for(let i = 0; i < prices.length; i++){
            const sellingPrice = prices[i];

            if(sellingPrice < lowestPrice){
                lowestPrice = sellingPrice;
            }

            profit = Math.max(profit, sellingPrice - lowestPrice)
        }
        return profit;
    }
}
