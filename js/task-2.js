// Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику:

// country — перший параметр, рядок, що містить країну доставки
// price — другий параметр, число, що містить загальну вартість товару
// deliveryFee — третій параметр, число, що містить вартість доставки товару
// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де:

// <country> — це країни доставки
// <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки
//         Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// Залиш цей код для перевірки ментором.

// На що буде звертати увагу ментор при перевірці:
// Оголошена функція getShippingMessage(country, price, deliveryFee)
// Виклик getShippingMessage("Australia", 120, 50) повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingMessage("Germany", 80, 20) повертає "Shipping to Germany will cost 100 credits"
// Виклик getShippingMessage("Sweden", 100, 20) повертає "Shipping to Sweden will cost 120 credits"
// Виклик getShippingMessage з будь якими-валідними аргументами повертає правильне значення
function getShippingMessage(country, price, deliveryFee) {
  let totalPrice = price + deliveryFee;
  let shippingAlert = `Shipping to ${country} will cost ${totalPrice} credits`;
  return shippingAlert;
}
console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));
