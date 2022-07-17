const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// console.log(order);
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order['order']['delivery'].deliveryPerson;
  const client = order.name;
  const clientPhoneNumber = order.phoneNumber;
  const clientAddress = order['address'];
  
  console.log(`Olá ${deliveryPerson}, entrega para: ${client}, Telefone: ${clientPhoneNumber}, ${clientAddress.street}, Nº: ${clientAddress.number}, AP: ${clientAddress.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  const copyOrder = Object.assign({},order);
  
  copyOrder.name = 'Luiz Silva';
  copyOrder.payment.total = '50';

  const client =  copyOrder.name;
  const pizzas = Object.keys(copyOrder['order'].pizza)
  const drinks = copyOrder['order']['drinks']['coke'].type
  const total = copyOrder['payment'].total

  console.log(`Olá ${client}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${total},00.`);
}

orderModifier(order);