/**
 *
 * @namespace faker.Food_Cuisine
 */
var Food_Cuisine = function (faker) {
    var self = this;
  
    /**
     * indian
     *
     * @method faker.Food_Cuisine.indian
     */
    self.indian = function() {
        return faker.random.arrayElement(faker.definitions.Food_Cuisine.indian);
    };
  
    /**
     * chinese
     *
     * @method faker.Food_Cuisine.chinese
     */
    self.chinese = function() {
        return faker.random.arrayElement(faker.definitions.Food_Cuisine.chinese);
    };

  /**
     * italian
     *
     * @method faker.Food_Cuisine.italian
     */
    self.italian = function() {
        return faker.random.arrayElement(faker.definitions.Food_Cuisine.italian);
    };

    /**
     * continental
     *
     * @method faker.Food_Cuisine.continental
     */
    self.continental = function() {
        return faker.random.arrayElement(faker.definitions.Food_Cuisine.continental);
    };
    
    

  
    return self;
  };
  
  module['exports'] = Food_Cuisine;
  