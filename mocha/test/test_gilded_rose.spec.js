var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');

describe("All item checks", function() {

  describe("Check Sell In", () => {
    it("Has a sell by date", () => {
      const gildedRose = new Shop([ new Item("Stuff", 1, 1)])

      const items = gildedRose.updateQuality();
      
      expect(items[0].sellIn).to.equal(0);
    });
  });

  describe("Check Quality", () => {
    it("Has a Quality value", () => {
      const gildedRose = new Shop([ new Item("Donkey Meat", 1, 1)])

      const items = gildedRose.updateQuality();

      expect(items[0].quality).to.not.be.null;
      expect(items[0].quality).to.not.be.undefined;
    });
  });

  describe("Check Item Sell by Date Updates", () => {
    it("Has deducted 1 at the end of the day", () => {
      const gildedRose = new Shop([ new Item("Decreasing Item", 1, 1)])

      const items = gildedRose.updateQuality();
      
      expect(items[0].sellIn).to.equal(0);
    });
  });

});
