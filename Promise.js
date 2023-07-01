// let's create a promise and handle it

let cart = ["cloths", "phone", "watch"];

const promise = CreatePromise();

// for handling promise we use then catch or we can use try catch mathod to deal with promises

promise
  .then(function () {
    console.log("success");
  })
  .catch(function (error) {
    console.log(error.message);
  });

function CreatePromise(cart) {
  // here i made a promise using new Promise keyword
  // the promise takes two argument 1st resolve when the promise is fullfilled the promise is resolved
  // 2nd when the promise is reject we can throw an error using new Error keyword
  let pr = new Promise(function (resolve, reject) {
    // here we check some validation for the promise is use dummy if check
    if (cart) {
      resolve();
    }
    let error = new Error("promise Rejected");
    reject(error);
  });

  return pr;
}

// practice promise chaining

// CreateOrder,ProceedToPayment,ShowOrderSummery,UpdateWallet;

function CreateOrder(cart) {
  let pr = new Promise(function (resolve, reject) {
    let orderid = 1234;
    if (cart) resolve(orderid);
    let error = new Error("can't find cart");
    reject(error);
  });
  return pr;
}

function ProceedToPayment(orderid) {
  let pr = new Promise(function (resolve, reject) {
    let cartitem = "realme 3 Pro";
    if (orderid) resolve(cartitem);
    let error = new Error("can't get orderid");
    reject(error);
  });
  return pr;
}

function ShowOrderSummery(cartitem) {
  let pr = new Promise(function (resolve, reject) {
    let summery = "4gb ram , 64 rom";
    if (cartitem) resolve(summery);
    let error = new Error("can't get cartitem");
    reject(error);
  });
  return pr;
}

function UpdateWallet(summery) {
  let pr = new Promise(function (resolve, reject) {
    if (summery) resolve("successfully buy item");
    let error = new Error("can't buy sorry for inconvience");
    reject(error);
  });
  return pr;
}

// here i can handled all promises

CreateOrder(cart)
  .then(function (orderid) {
    console.log(orderid);
    return ProceedToPayment(orderid);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function (cartitem) {
    console.log(cartitem);
    return ShowOrderSummery(cartitem);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function (summery) {
    console.log(summery);
    return UpdateWallet(summery);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error.message);
  });
