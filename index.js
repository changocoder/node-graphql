const express = require("express");

const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`

            type Customer{
                    id: Int
                    name: String
                    phone: String
                        }
            
            type Query{
                    customers:[Customer]
                    customer(id: Int): Customer
                    }

            type Mutation {
                    addCustomer(name: String, phone: String): Customer
            }
               `);

let customers = [];
let counter = 1;

var root = {
  customers: () => {
    return customers;
  },

  customer: (data) => {
    for (var i = 0; i < customers.length; i++)
      if (customers[i].id == data.id) return customers[i];

    return null;
  },

  addCustomer: (data) => {
    var customer = { id: counter, name: data.name, phone: data.phone };
    customers.push(customer);
    counter++;
    return customer;
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000);
console.log("GraphQL API en http://localhost:4000/graphql");
