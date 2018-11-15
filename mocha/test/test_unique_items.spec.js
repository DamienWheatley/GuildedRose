var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');

describe("Unique Item Quality Tests", function() {

    describe("Aged Brie", () => {
        it("Aged Brie Quality improves up with age", () => {
            let itemQuality = 1;
            let itemSellIn = 2;
            const gildedRose = new Shop([ new Item("Aged Brie", itemSellIn, itemQuality)]);

            const items = gildedRose.updateQuality();

            expect(items[0].sellIn).to.equal(itemSellIn - 1)
            expect(items[0].quality).to.equal(itemQuality + 1)
        });  

        it("Aged Brie Quality does not go above 50", () => {
            let itemQuality = 50;
            let itemSellIn = 2;
            const gildedRose = new Shop([ new Item("Aged Brie", itemSellIn, itemQuality)]);

            const items = gildedRose.updateQuality();

            expect(items[0].sellIn).to.equal(itemSellIn - 1)
            expect(items[0].quality).to.equal(itemQuality)
        });   
    })


    describe("Sulfuras", () => {
        it("Quality and Sell by date do not decrease", () => {
            let itemQuality = 80;
            let itemSellIn = 10;
            const gildedRose = new Shop([ new Item('Sulfuras, Hand of Ragnaros', itemSellIn, itemQuality)]);
    
            const items = gildedRose.updateQuality();

            expect(items[0].sellIn).to.equal(itemSellIn);
            expect(items[0].quality).to.equal(80);
        })
    })

    describe("Backstage Passes", () => {
        it("Backstage Passes improve by 2 within 10 days", () => {
            let itemQuality = 20;
            let itemSellIn = 10;
            let increase = 2;
            const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', itemSellIn, itemQuality)]);

            const items = gildedRose.updateQuality();

            expect(items[0].sellIn).to.equal(itemSellIn - 1)
            expect(items[0].quality).to.equal(itemQuality + increase)
        });

        it("Backstage Passes improves by 3 within 5 days", () => {
            let itemQuality = 20;
            let itemSellIn = 5;
            let increase = 3;
            const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', itemSellIn, itemQuality)]);

            const items = gildedRose.updateQuality();

            expect(items[0].sellIn).to.equal(itemSellIn - 1)
            expect(items[0].quality).to.equal(itemQuality + increase)
        });

        it("Backstage Passes has no value when out of date", () => {
            let itemQuality = 20;
            let itemSellIn = 0;
            const gildedRose = new Shop([ new Item('Backstage passes to a TAFKAL80ETC concert', itemSellIn, itemQuality)]);

            const items = gildedRose.updateQuality();

            expect(items[0].sellIn).to.equal(itemSellIn - 1)
            expect(items[0].quality).to.equal(itemQuality - itemQuality)
        });
    })
        
});
