// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;

  class Neighborhood {
      constructor(name) {
          this.name = name;
          this.id = ++neighborhoodId;
          store.neighborhoods.push(this);
      }
      deliveries() {
          return store.deliveries.filter(
              function(delivery) {
                  return delivery.neighborhoodId === this.id;
              }.bind(this)
          );
      }
      customers() {
          return store.customers.filter(
              function(customer) {
                  return customer.neighborhoodId === this.neighborhoodId;
              }.bind(this)
          );
      }
  }

    class Customer{
        constructor(name) {
            this.name = name;
            this.id = ++customerId;
            this.neighborhoodId = neighborhoodId;
            store.customers.push(this);
    }
    deliveries() {
        return store.deliveries.filter(
            function(delivery) {
                return delivery.customerdId === this.id;
            }.bind(this)
        );
    }

    meals() {
        return store.meals.filter(
            function(delivery) {
                return delivery.customerId === this.id;
            }.bind(this)
        );
    }

    totalSpent() {
          return this.meals().reduce((total, meal) => (total += meal.price), 0);
      }
    }

    class Meals {
      constructor(title, price){
        this.title = name;
        this.id = ++mealId;
        this.price = price;
        store.meals.push(this);
    }       

    deliveries() {
        return store.deliveries.filter(
            function(delivery) {
                return delivery.mealId === this.id;
            }.bind(this)
        );
    }

    customers() {
        return this.deliveries().map(delivery => {
          return delivery.customer()
        })
      }
    static byPrice() {
        return store.meals.sort(function (a, b) {
            return b['price'] - a['price'];
        });
    }
}
