"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let currentUserID;
let currentBalance;
let autocartID = 0;
//Cart class
class CartItem {
    constructor(paraCartGroceryID, paraCartGroceryName, paraCartGroceryQuantity, paraCartUnitPrice, paraCarEexpiryDate, paraCartStatus) {
        autocartID++;
        this.CartID = autocartID;
        this.CartGroceryID = paraCartGroceryID;
        this.CartGroceryName = paraCartGroceryName;
        this.CartGroceryQuantity = paraCartGroceryQuantity;
        this.CartUnitPrice = paraCartUnitPrice;
        this.CarEexpiryDate = paraCarEexpiryDate;
        this.CartStatus = paraCartStatus;
    }
}
//cart list
let cartArrayList = new Array();
//class
let autoDemoID = 0;
class DemoOrder {
    //OrderObject:OrderDetails;
    constructor(paraCartList) {
        autoDemoID++;
        this.DemoID = autoDemoID;
        this.CartList = paraCartList;
        // this.OrderObject=paraOrderObject;
    }
}
let DemoOrderList = new Array();
//***********************************API and Database integration Code ****************************************** */
//add user
function addUserDetails(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5041/api/UserDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Fail to add user');
        }
    });
}
//add order details
function addOrderDetails(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5041/api/OrderDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Fail to add OrderDetails');
        }
    });
}
//add order details
function addGroceryDetails(grocery) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5041/api/GroceryDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(grocery)
        });
        if (!response.ok) {
            throw new Error('Fail to add GroceryDetails');
        }
    });
}
//update user
function updateUserDetails(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5041/api/UserDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update UserDetails');
        }
    });
}
//update OrderDetails
function updateOrderDetails(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5041/api/OrderDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to update OrderDetails');
        }
    });
}
//update GroceryDetails
function updateGroceryDetails(id, grocery) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5041/api/GroceryDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(grocery)
        });
        if (!response.ok) {
            throw new Error('Failed to update GroceryDetails');
        }
    });
}
//delete user
function deleteUserDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5041/api/UserDetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
    });
}
//delete OrderDetails
function deleteOrderDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5041/api/OrderDetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete OrderDetails');
        }
    });
}
//delete GroceryDetails
function deleteGroceryDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5041/api/GroceryDetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete GroceryDetails');
        }
    });
}
//fetch user
function fetchUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5041/api/UserDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return yield response.json();
    });
}
//fetch OrderDetails
function fetchOrderDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5041/api/OrderDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch OrderDetails');
        }
        return yield response.json();
    });
}
//fetch GroceryDetails
function fetchGroceryDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5041/api/GroceryDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch GroceryDetails');
        }
        return yield response.json();
    });
}
//***********************************************Logic code************************************* */
//view 
function ViewPage() {
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let newuser = document.getElementById("newuser");
    newuser.style.display = "none";
    let existinguser = document.getElementById("existinguser");
    existinguser.style.display = "none";
    let menupage = document.getElementById("menupage");
    menupage.style.display = "none";
    let greet = document.getElementById("greet");
    greet.style.display = "none";
    let displaygrocery = document.getElementById("displaygrocery");
    displaygrocery.style.display = "none";
    let purchasegrocery = document.getElementById("purchasegrocery");
    purchasegrocery.style.display = "none";
    let orderhistory = document.getElementById("orderhistory");
    orderhistory.style.display = "none";
    let cartitem = document.getElementById("cartitem");
    cartitem.style.display = "none";
    let walletrecharge = document.getElementById("walletrecharge");
    walletrecharge.style.display = "none";
    let exist = document.getElementById("exist");
    exist.style.display = "none";
    let afterrecharge = document.getElementById("afterrecharge");
    afterrecharge.style.display = "none";
    let itemCount = document.getElementById("itemCount");
    itemCount.style.display = "none";
    let AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = "none";
}
//NewUser
function NewUser() {
    ViewPage();
    let newuser = document.getElementById("newuser");
    newuser.style.display = "block";
}
//new user form
let newuserform = document.getElementById("newuserform");
newuserform.addEventListener("submit", event => {
    var _a;
    event.preventDefault();
    let newuserphoto;
    let newusername = document.getElementById("newusername");
    let newuseremail = document.getElementById("newuseremail");
    let newuserphone = document.getElementById("newuserphone");
    let newuserpass = document.getElementById("newuserpass");
    let newuserbalance = document.getElementById("newuserbalance");
    newuserphoto = document.getElementById("newuserphoto");
    const file = (_a = newuserphoto.files) === null || _a === void 0 ? void 0 : _a[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        var _a;
        const base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        const newUser = {
            userID: undefined,
            userName: newusername.value,
            email: newuseremail.value,
            phoneNumber: newuserphone.value,
            password: newuserpass.value,
            walletBalance: Number(newuserbalance.value),
            userImage: [base64String]
        };
        addUserDetails(newUser);
    };
    reader.readAsDataURL(file);
    ViewPage();
    let homepage = document.getElementById("homepage");
    homepage.style.display = "block";
});
//SignUP 
// function SignUP() {
//     let newusername = document.getElementById("newusername") as HTMLInputElement;
//     let newuseremail = document.getElementById("newuseremail") as HTMLInputElement;
//     let newuserphone = document.getElementById("newuserphone") as HTMLInputElement;
//     let newuserpass = document.getElementById("newuserpass") as HTMLInputElement;
//     let newuserbalance = document.getElementById("newuserbalance") as HTMLInputElement;
//     //let newuserphoto= document.getElementById("newuserphoto") as HTMLInputElement;
//     const newUser: UserDetails = {
//         userID: undefined,
//         userName: newusername.value,
//         email: newuseremail.value,
//         phoneNumber: newuserphone.value,
//         password: newuserpass.value,
//         walletBalance: Number(newuserbalance.value),
//         userImage: [base64String]
//     }
//     addUserDetails(newUser);
//     ViewPage();
//     let homepage = document.getElementById("homepage") as HTMLDivElement;
//     homepage.style.display = "block";
// }
//ExistingUser
function ExistingUser() {
    ViewPage();
    let existinguser = document.getElementById("existinguser");
    existinguser.style.display = "block";
}
//SignIn
function SignIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let existingemail = document.getElementById("existingemail");
        let availuser = document.getElementById("availuser");
        let userList = yield fetchUserDetails();
        userList.forEach((item) => {
            availuser.innerHTML = availuser + `\n` + "User Name : " + `${item.userName}` + "User Email : " + `${item.email}\n`;
        });
        userList.forEach((item) => {
            if (item.email == existingemail.value) {
                currentUserID = item.userID;
                let userphoto = document.getElementById("userphoto");
                userphoto.src = item.userImage[0];
                let username = document.getElementById("username");
                username.innerHTML = item.userName;
                ViewPage();
                let menupage = document.getElementById("menupage");
                menupage.style.display = "block";
                let greet = document.getElementById("greet");
                greet.style.display = "block";
            }
        });
    });
}
//DisplayGroceryDetails
function DisplayGroceryDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        ViewPage();
        let menupage = document.getElementById("menupage");
        menupage.style.display = "block";
        let displaygrocery = document.getElementById("displaygrocery");
        displaygrocery.style.display = "block";
        const groceryList = yield fetchGroceryDetails();
        const Displaytable = document.querySelector("#groceryDisplay tbody");
        Displaytable.innerHTML = "";
        groceryList.forEach((item) => {
            let datepuchase = item.purchaseDate.toString().substring(0, 10);
            let dateexp = item.expiryDate.toString().substring(0, 10);
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.groceryID}</td>
                <td>${item.groceryName}</td>
                <td>${item.groceryQuantity}</td>
                <td>${item.unitPrice}</td>
                <td>${datepuchase}</td>
                <td>${dateexp}</td>
                <td><img src="${item.groceryImage[0]}" id="imgId"></td>
                <td>
                <button onclick="EditGrocery('${item.groceryID}')">Edit</button>
                </td>
                
         
             `;
            Displaytable.appendChild(row);
        });
    });
}
//DisplayOrderHistory
function DisplayOrderHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        ViewPage();
        let menupage = document.getElementById("menupage");
        menupage.style.display = "block";
        let orderhistory = document.getElementById("orderhistory");
        orderhistory.style.display = "block";
        let orderList = yield fetchOrderDetails();
        const Displaytable = document.querySelector("#orderDisplay tbody");
        Displaytable.innerHTML = "";
        orderList.forEach((item) => {
            let datepuchase = item.purchaseDate.toString().substring(0, 10);
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.orderID}</td>
                <td>${item.userID}</td>
                <td>${item.productID}</td>
                <td>${item.productName}</td>
                <td>${item.productPrice}</td>
                <td>${datepuchase}</td>
                <td>${item.quantity}</td>
                <td>${item.totalAmount}</td>
         
             `;
            Displaytable.appendChild(row);
        });
    });
}
//PurchaseGrocery
function PurchaseGrocery() {
    return __awaiter(this, void 0, void 0, function* () {
        ViewPage();
        let menupage = document.getElementById("menupage");
        menupage.style.display = "block";
        let purchasegrocery = document.getElementById("purchasegrocery");
        purchasegrocery.style.display = "block"; //cardview
        let cardview = document.getElementById("cardview");
        const groceryList = yield fetchGroceryDetails();
        cardview.innerHTML = "";
        groceryList.forEach((item) => {
            const divelement = document.createElement("div");
            divelement.innerHTML = `
                 
                
                <p><img src="${item.groceryImage[0]}" id="imgId"></p>
                <h5>${item.groceryName}</h5>
                <h4>Price : ${item.unitPrice}</h4> 
                           
               <p><button onclick="AddToCartDetails('${item.groceryID}')">Add To Cart</button></p> 
         
             `;
            cardview.appendChild(divelement);
        });
    });
}
// async function PurchaseGrocery() {
//     ViewPage();
//     let menupage = document.getElementById("menupage") as HTMLDivElement;
//     menupage.style.display = "block";
//     let purchasegrocery = document.getElementById("purchasegrocery") as HTMLDivElement;
//     purchasegrocery.style.display = "block";
//     const groceryList = await fetchGroceryDetails();
//     const Displaytable = document.querySelector("#purchasegroceryDisplay tbody") as HTMLTableSectionElement;
//     Displaytable.innerHTML = "";
//     groceryList.forEach((item) => {
//         let datepuchase = item.purchaseDate.toString().substring(0, 10);
//         let dateexp = item.expiryDate.toString().substring(0, 10);
//         const row = document.createElement("tr");
//         row.innerHTML = `
//                 <td>${item.groceryID}</td>
//                 <td>${item.groceryName}</td>
//                 <td>${item.groceryQuantity}</td>
//                 <td>${item.unitPrice}</td>
//                 <td>${datepuchase}</td>
//                 <td>${dateexp}</td>
//                 <td><img src="${item.groceryImage[0]}" id="imgId"></td>
//                 <td><button onclick="AddToCartDetails('${item.groceryID}')">Add To Cart</button></td>
//              `;
//         Displaytable.appendChild(row);
//     });
// }
//edit grocery
//edit medicine
let egroceryname = document.getElementById("groceryname");
let egrocerycount = document.getElementById("grocerycount");
let egroceryprice = document.getElementById("groceryprice");
let epurchasegrocerydate = document.getElementById("purchasegrocerydate");
let eexpgrocerydate = document.getElementById("expgrocerydate");
let egroceryImageData = document.getElementById("groceryImageData");
let currentgroceryID;
function EditGrocery(edititemid) {
    return __awaiter(this, void 0, void 0, function* () {
        currentgroceryID = edititemid;
        let AddDiv = document.getElementById("AddDiv");
        AddDiv.style.display = "block";
        const groceryList = yield fetchGroceryDetails();
        const item = groceryList.find((item) => item.groceryID == edititemid);
        if (item) {
            // currentmedicineID = item.medicineID;
            egroceryname.value = item.groceryName;
            egrocerycount.value = String(item.groceryQuantity);
            egroceryprice.value = String(item.unitPrice);
            epurchasegrocerydate.value = String(item.purchaseDate);
            eexpgrocerydate.value = String(item.expiryDate);
            egroceryImageData.value = String(item.groceryImage);
        }
    });
}
//add grocery
function Add() {
    let AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = "block";
}
let groceryname;
let grocerycount;
let groceryprice;
let purchasegrocerydate;
let expgrocerydate;
let groceryImageData;
let form = document.getElementById("groceryaddform");
form.addEventListener("submit", (event) => {
    var _a;
    event.preventDefault();
    groceryname = document.getElementById("groceryname").value;
    grocerycount = parseInt(document.getElementById("grocerycount").value);
    groceryprice = parseInt(document.getElementById("groceryprice").value);
    purchasegrocerydate = document.getElementById("purchasegrocerydate").value;
    expgrocerydate = document.getElementById("expgrocerydate").value;
    groceryImageData = document.getElementById("groceryImageData");
    //let base64String: any = "";
    const file = (_a = groceryImageData.files) === null || _a === void 0 ? void 0 : _a[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        var _a;
        const base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        if (currentgroceryID == null) {
            const newGroceryList = {
                groceryID: undefined,
                groceryName: groceryname,
                groceryQuantity: grocerycount,
                unitPrice: groceryprice,
                purchaseDate: new Date(purchasegrocerydate),
                expiryDate: new Date(expgrocerydate),
                groceryImage: [base64String]
            };
            addGroceryDetails(newGroceryList);
            DisplayGroceryDetails();
        }
        else {
            const newGroceryList = {
                groceryID: currentgroceryID,
                groceryName: groceryname,
                groceryQuantity: grocerycount,
                unitPrice: groceryprice,
                purchaseDate: new Date(purchasegrocerydate),
                expiryDate: new Date(expgrocerydate),
                groceryImage: [base64String]
            };
            updateGroceryDetails(currentgroceryID, newGroceryList);
            DisplayGroceryDetails();
        }
    };
    reader.readAsDataURL(file);
    // let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    // AddDiv.style.display = "block";
});
//AddToCartDetails
let selectedID;
function AddToCartDetails(groceryid) {
    ViewPage();
    let itemCount = document.getElementById("itemCount");
    itemCount.style.display = "block";
    selectedID = groceryid;
}
//AddToCart
function AddToCart() {
    return __awaiter(this, void 0, void 0, function* () {
        let groceryCount = document.getElementById("groceryCount");
        let groceryList = yield fetchGroceryDetails();
        groceryList.forEach((item) => {
            if (item.groceryID == selectedID) {
                cartArrayList.push(new CartItem(item.groceryID, item.groceryName, Number(groceryCount.value), item.unitPrice, item.expiryDate, "initiate"));
                alert("add to cart successfully......");
            }
        });
        PurchaseGrocery();
    });
}
//WalletRecharge
function WalletRecharge() {
    return __awaiter(this, void 0, void 0, function* () {
        ViewPage();
        let menupage = document.getElementById("menupage");
        menupage.style.display = "block";
        let walletrecharge = document.getElementById("walletrecharge");
        walletrecharge.style.display = "block";
        let userList = yield fetchUserDetails();
        userList.forEach((item) => {
            if (item.userID == currentUserID) {
                currentBalance = item.walletBalance;
            }
        });
        let currentbalance = document.getElementById("currentbalance");
        currentbalance.innerHTML = String(currentBalance);
    });
}
//TopUp
function TopUp() {
    return __awaiter(this, void 0, void 0, function* () {
        ViewPage();
        let menupage = document.getElementById("menupage");
        menupage.style.display = "block";
        let walletrecharge = document.getElementById("walletrecharge");
        walletrecharge.style.display = "block";
        let afterrecharge = document.getElementById("afterrecharge");
        afterrecharge.style.display = "block";
        let userList = yield fetchUserDetails();
        let rechargeAmount = document.getElementById("rechargeAmount");
        userList.forEach((item) => {
            if (item.userID == currentUserID) {
                currentBalance = item.walletBalance + Number(rechargeAmount.value);
                const updatenewuser = {
                    userID: currentUserID,
                    userName: item.userName,
                    email: item.email,
                    phoneNumber: item.phoneNumber,
                    password: item.password,
                    walletBalance: currentBalance,
                    userImage: item.userImage
                };
                updateUserDetails(currentUserID, updatenewuser);
            }
        });
        let afterbalance = document.getElementById("afterbalance");
        afterbalance.innerHTML = String(currentBalance);
    });
}
//DisplayCartItem
function DisplayCartItem() {
    ViewPage();
    let menupage = document.getElementById("menupage");
    menupage.style.display = "block";
    let cartitem = document.getElementById("cartitem");
    cartitem.style.display = "block";
    const Displaytable = document.querySelector("#cartitemDisplay tbody");
    Displaytable.innerHTML = "";
    cartArrayList.forEach((item) => {
        if (item.CartStatus == "initiate") {
            let dateexp = item.CarEexpiryDate.toString().substring(0, 10);
            const row = document.createElement("tr");
            row.innerHTML = `
                    <td>${item.CartID}</td>
                    <td>${item.CartGroceryID}</td>
                    <td>${item.CartGroceryName}</td>
                    <td>${item.CartGroceryQuantity}</td>
                    <td>${item.CartUnitPrice}</td>
                    <td>${dateexp}</td>
                    <td>${item.CartStatus}</td>
                     
             
                 `;
            Displaytable.appendChild(row);
        }
    });
}
//BuyCartItem
//let orderid:number=1;
function BuyCartItem() {
    return __awaiter(this, void 0, void 0, function* () {
        let groceryList = yield fetchGroceryDetails();
        let userList = yield fetchUserDetails();
        cartArrayList.forEach((item) => {
            groceryList.forEach((grocery) => {
                if (item.CartGroceryID == grocery.groceryID) {
                    if (grocery.groceryQuantity < item.CartGroceryQuantity) {
                        alert("Your enter quantity not available........");
                    }
                    else {
                        const newOrder = {
                            orderID: undefined,
                            userID: currentUserID,
                            productID: item.CartGroceryID,
                            productName: item.CartGroceryName,
                            productPrice: item.CartUnitPrice,
                            purchaseDate: new Date(),
                            quantity: item.CartGroceryQuantity,
                            totalAmount: item.CartUnitPrice
                        };
                        addOrderDetails(newOrder);
                        item.CartStatus == "ordered";
                        let groceryfinalCout;
                        groceryList.forEach((grocery) => {
                            if (grocery.groceryID == item.CartGroceryID) {
                                groceryfinalCout = grocery.groceryQuantity - item.CartGroceryQuantity;
                                const updateGrocery = {
                                    groceryID: item.CartGroceryID,
                                    groceryName: item.CartGroceryName,
                                    groceryQuantity: groceryfinalCout,
                                    unitPrice: item.CartUnitPrice,
                                    purchaseDate: grocery.purchaseDate,
                                    expiryDate: grocery.expiryDate,
                                    groceryImage: grocery.groceryImage
                                };
                                updateGroceryDetails(item.CartGroceryID, updateGrocery);
                            }
                        });
                        // let totalbillamount:number=0;
                        // cartArrayList.forEach((cart)=>{
                        //     totalbillamount+=cart.CartGroceryQuantity*cart.CartUnitPrice;
                        // })
                        let totalbillamount = item.CartGroceryQuantity * item.CartUnitPrice;
                        userList.forEach((user) => {
                            if (user.userID == currentUserID) {
                                if (user.walletBalance < totalbillamount) {
                                    alert("You don't have sufficient Balance please recharge......");
                                }
                                else {
                                    currentBalance = user.walletBalance - totalbillamount;
                                    const updateuserlist = {
                                        userID: currentUserID,
                                        userName: user.userName,
                                        email: user.email,
                                        phoneNumber: user.phoneNumber,
                                        password: user.password,
                                        walletBalance: currentBalance,
                                        userImage: user.userImage
                                    };
                                    updateUserDetails(currentUserID, updateuserlist);
                                }
                            }
                        });
                    }
                }
            });
        });
        alert("Purchse successfully done..............");
        DisplayCartItem();
        //orderid++;
    });
}
//BuyGrocery//***********8 */
// async function BuyGrocery(cartid: number) {
//     let groceryList = await fetchGroceryDetails();
//     cartArrayList.forEach((item) => {
//         if (item.CartID == cartid) {
//             groceryList.forEach((groceryinfo) => {
//                 if (groceryinfo.groceryID == cartid) {
//                     if (item.CartGroceryQuantity <= groceryinfo.groceryQuantity) {
//                         const newOrder: OrderDetails = {
//                             orderID: undefined,
//                             userID: currentUserID,
//                             productID: item.CartGroceryID,
//                             productName: item.CartGroceryName,
//                             productPrice: item.CartUnitPrice,
//                             purchaseDate: new Date(),
//                             quantity: item.CartGroceryQuantity,
//                             totalAmount: item.CartUnitPrice
//                         }
//                         addOrderDetails(newOrder);
//                         item.CartStatus = "ordered";
//                         let groceryfinalCout: number;
//                         groceryList.forEach((grocery) => {
//                             if (grocery.groceryID == item.CartGroceryID) {
//                                 groceryfinalCout = grocery.groceryQuantity - item.CartGroceryQuantity;
//                             }
//                         })
// groceryList.forEach((grocery) => {
//     if (grocery.groceryID == item.CartGroceryID) {
//         const updateGrocery: GroceryDetails = {
//             groceryID: item.CartGroceryID,
//             groceryName: item.CartGroceryName,
//             groceryQuantity: groceryfinalCout,
//             unitPrice: item.CartUnitPrice,
//             purchaseDate: grocery.purchaseDate,
//             expiryDate: grocery.expiryDate,
//             groceryImage: grocery.groceryImage
//         }
//         updateGroceryDetails(grocery.groceryID, updateGrocery);
//     }
// })
//                         alert("Purchase successfully done..........");
//                     } else {
//                         alert("your enter quantity not availabe.......");
//                     }
//                 }
//             })
//         }
//     })
//     DisplayCartItem();
// }
//Exist
function Exist() {
    ViewPage();
    let homepage = document.getElementById("homepage");
    homepage.style.display = "block";
}
//export
function ExportOrderData() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = document.querySelector('a');
        let data = "OrderID,UserID,ProductID,ProductName,ProductPrice,PurchaseDate,Quantity,TotalAmount";
        const orderdetails = yield fetchOrderDetails();
        orderdetails.forEach((item) => {
            if (currentUserID == item.userID) {
                data = data + `\n` + `${item.orderID},${item.userID},${item.productID},${item.productName},${item.productPrice},${item.purchaseDate.toString().substring(0, 10)},${item.quantity},${item.totalAmount}\n`;
            }
        });
        const blob = new Blob([data], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = 'groceryOrderDetails.csv';
    });
}
