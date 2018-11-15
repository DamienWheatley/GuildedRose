var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');

describe("Standard Item Quality Tests", function() {  

    describe("Check Item Quality Updates", () => {
        it("Has deducted 1 Quality from common items", () => {
            let itemQuality = 1;
            const gildedRose = new Shop([ new Item("Decreasing Item", 1, itemQuality)]);
        
            const items = gildedRose.updateQuality();
            
            expect(items[0].quality).to.equal(itemQuality - 1); 
        });
    });

    describe("Out of date item", () => {
        it("Decreases twice as fast", () => {
            let itemQuality = 3;
            const gildedRose = new Shop([ new Item("Out of Date Item", 0, itemQuality)]);
    
            const items = gildedRose.updateQuality();

            expect(items[0].quality).to.equal(itemQuality - 2);
        });
    
        it("Quality doesn't go below zero", () => {
            let itemQuality = 1;
            const gildedRose = new Shop([ new Item("Out of Date Item", 0, itemQuality)]);
    
            const items = gildedRose.updateQuality();
            
            expect(items[0].quality).to.equal(0);
        });
    });
});