# GraphiQL

## Starting

```bash
node index.js
```

- Open browser http://localhost:4000/graphql

## Queries

```graphql
# GetAllCustomers
{
  customers {
    id
    name
    phone
  }
}

# AddCustomer
mutation {
  addCustomer(name: "Chango Feliz", phone: "123456") {
    id
    name
    phone
  }
}
# getCustomerById
{
  customer(id: 1) {
    id
    name
    phone
  }
}
```
