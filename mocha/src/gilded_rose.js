class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = [];
    items.forEach(item => {
      if (item.name == "Brie") {
        this.items.push(new Brie())
      }
    })
    this.items = items;
  }
  
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].update();

      //lowers quality and sellIn value
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }

      } else {

      //quality no higher that 50
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;

      //Backstage Pass within 10 days + 5 days parameters
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn <= 10) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn <= 5) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }

          
        }
      }
      //reduce sellIn
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {

              //standard items lower in quality out of date
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1; 
              }
            }
          //Backstage pass runs out of date = 0
          } else { 
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        //Brie and Backstage passes increase up to 50
        } else { 
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
    // console.log(this.items)
    return this.items;    
  }
}

module.exports = {
  Item,
  Shop
}

