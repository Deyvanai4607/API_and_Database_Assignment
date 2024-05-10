
let currentUserID: number;
let currentBalance: number;
let autocartID: number = 0;


//********************************************************Interfaces and Classes***************************** */
//user interface
interface UserDetails {
    userID: any;
    userName: string;
    email: string;
    phoneNumber: string;
    password: string;
    walletBalance: number;
    userImage: string[];
}

//OrderDetails interface
interface OrderDetails {
    orderID: any;
    userID: number;
    productID: number;
    productName: string;
    productPrice: number;
    purchaseDate: Date;
    quantity: number;
    totalAmount: number;
}

//GroceryDetails interface
interface GroceryDetails {
    groceryID: any;
    groceryName: string;
    groceryQuantity: number;
    unitPrice: number;
    purchaseDate: Date;
    expiryDate: Date;
    groceryImage: string[];

}

//Cart class
class CartItem {
    CartID: any;
    CartGroceryID: number;
    CartGroceryName: string;
    CartGroceryQuantity: number;
    CartUnitPrice: number;
    CarEexpiryDate: Date;
    CartStatus: string;

    constructor(paraCartGroceryID: number, paraCartGroceryName: string, paraCartGroceryQuantity: number, paraCartUnitPrice: number, paraCarEexpiryDate: Date, paraCartStatus: string) {
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
let cartArrayList: Array<CartItem> = new Array<CartItem>();

//class
let autoDemoID=0;
class DemoOrder{
    DemoID:number;
    CartList:Array<CartItem>;
    //OrderObject:OrderDetails;

    constructor(paraCartList:Array<CartItem>){//,paraOrderObject : OrderDetails
        autoDemoID++;
        this.DemoID=autoDemoID;
        this.CartList=paraCartList;
        // this.OrderObject=paraOrderObject;
    }
}

let DemoOrderList:Array<DemoOrder>=new Array<DemoOrder>();
//***********************************API and Database integration Code ****************************************** */

//add user
async function addUserDetails(user: UserDetails): Promise<void> {
    const response = await fetch('http://localhost:5041/api/UserDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Fail to add user')
    }
}


//add order details
async function addOrderDetails(order: OrderDetails): Promise<void> {
    const response = await fetch('http://localhost:5041/api/OrderDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error('Fail to add OrderDetails')
    }
}

//add order details
async function addGroceryDetails(grocery: GroceryDetails): Promise<void> {
    const response = await fetch('http://localhost:5041/api/GroceryDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(grocery)
    });
    if (!response.ok) {
        throw new Error('Fail to add GroceryDetails')
    }
}

//update user
async function updateUserDetails(id: any, user: UserDetails): Promise<void> {
    const response = await fetch(`http://localhost:5041/api/UserDetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update UserDetails');
    }

}

//update OrderDetails
async function updateOrderDetails(id: any, order: OrderDetails): Promise<void> {
    const response = await fetch(`http://localhost:5041/api/OrderDetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error('Failed to update OrderDetails');
    }

}

//update GroceryDetails
async function updateGroceryDetails(id: any, grocery: GroceryDetails): Promise<void> {
    const response = await fetch(`http://localhost:5041/api/GroceryDetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(grocery)
    });
    if (!response.ok) {
        throw new Error('Failed to update GroceryDetails');
    }

}

//delete user
async function deleteUserDetails(id: any): Promise<void> {
    const response = await fetch(`http://localhost:5041/api/UserDetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete user');
    }

}

//delete OrderDetails
async function deleteOrderDetails(id: any): Promise<void> {
    const response = await fetch(`http://localhost:5041/api/OrderDetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete OrderDetails');
    }

}

//delete GroceryDetails
async function deleteGroceryDetails(id: any): Promise<void> {
    const response = await fetch(`http://localhost:5041/api/GroceryDetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete GroceryDetails');
    }

}

//fetch user
async function fetchUserDetails(): Promise<UserDetails[]> {
    const apiUrl = 'http://localhost:5041/api/UserDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return await response.json();
}

//fetch OrderDetails
async function fetchOrderDetails(): Promise<OrderDetails[]> {
    const apiUrl = 'http://localhost:5041/api/OrderDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch OrderDetails');
    }
    return await response.json();
}

//fetch GroceryDetails
async function fetchGroceryDetails(): Promise<GroceryDetails[]> {
    const apiUrl = 'http://localhost:5041/api/GroceryDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch GroceryDetails');
    }
    return await response.json();
}

//***********************************************Logic code************************************* */

//view 
function ViewPage() {
    let homepage = document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display = "none";

    let newuser = document.getElementById("newuser") as HTMLDivElement;
    newuser.style.display = "none";

    let existinguser = document.getElementById("existinguser") as HTMLDivElement;
    existinguser.style.display = "none";

    let menupage = document.getElementById("menupage") as HTMLDivElement;
    menupage.style.display = "none";

    let greet = document.getElementById("greet") as HTMLDivElement;
    greet.style.display = "none";

    let displaygrocery = document.getElementById("displaygrocery") as HTMLDivElement;
    displaygrocery.style.display = "none";

    let purchasegrocery = document.getElementById("purchasegrocery") as HTMLDivElement;
    purchasegrocery.style.display = "none";

    let orderhistory = document.getElementById("orderhistory") as HTMLDivElement;
    orderhistory.style.display = "none";

    let cartitem = document.getElementById("cartitem") as HTMLDivElement;
    cartitem.style.display = "none";

    let walletrecharge = document.getElementById("walletrecharge") as HTMLDivElement;
    walletrecharge.style.display = "none";

    let exist = document.getElementById("exist") as HTMLDivElement;
    exist.style.display = "none";

    let afterrecharge = document.getElementById("afterrecharge") as HTMLDivElement;
    afterrecharge.style.display = "none";

    let itemCount = document.getElementById("itemCount") as HTMLDivElement;
    itemCount.style.display = "none";

    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = "none";
}

//NewUser
function NewUser() {
    ViewPage();
    let newuser = document.getElementById("newuser") as HTMLDivElement;
    newuser.style.display = "block";
}

//new user form
let newuserform = document.getElementById("newuserform") as HTMLFormElement;
newuserform.addEventListener("submit", event => {
    event.preventDefault();
    let newuserphoto: any;
    let newusername = document.getElementById("newusername") as HTMLInputElement;
    let newuseremail = document.getElementById("newuseremail") as HTMLInputElement;
    let newuserphone = document.getElementById("newuserphone") as HTMLInputElement;
    let newuserpass = document.getElementById("newuserpass") as HTMLInputElement;
    let newuserbalance = document.getElementById("newuserbalance") as HTMLInputElement;
    newuserphoto = document.getElementById("newuserphoto") as HTMLInputElement;

    const file = newuserphoto.files?.[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        const base64String = event.target?.result as string;
        const newUser: UserDetails = {
            userID: undefined,
            userName: newusername.value,
            email: newuseremail.value,
            phoneNumber: newuserphone.value,
            password: newuserpass.value,
            walletBalance: Number(newuserbalance.value),
            userImage: [base64String]
        }
        addUserDetails(newUser);

    }
    reader.readAsDataURL(file);

    ViewPage();
    let homepage = document.getElementById("homepage") as HTMLDListElement;
    homepage.style.display = "block";
})

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
    let existinguser = document.getElementById("existinguser") as HTMLDivElement;
    existinguser.style.display = "block";
}
//SignIn
async function SignIn() {


    let existingemail = document.getElementById("existingemail") as HTMLInputElement;
    let availuser = document.getElementById("availuser") as HTMLElement;
    let userList = await fetchUserDetails();
    userList.forEach((item) => {
        availuser.innerHTML = availuser + `\n` + "User Name : " + `${item.userName}` + "User Email : " + `${item.email}\n`
    })


    userList.forEach((item) => {
        if (item.email == existingemail.value) {
            currentUserID = item.userID;
            let userphoto = document.getElementById("userphoto") as HTMLImageElement;
            userphoto.src = item.userImage[0];

            let username = document.getElementById("username") as HTMLSpanElement;
            username.innerHTML = item.userName;
            ViewPage();
            let menupage = document.getElementById("menupage") as HTMLDivElement;
            menupage.style.display = "block";

            let greet = document.getElementById("greet") as HTMLDivElement;
            greet.style.display = "block";
        }

    })



}

//DisplayGroceryDetails
async function DisplayGroceryDetails() {
    ViewPage();
    let menupage = document.getElementById("menupage") as HTMLDivElement;
    menupage.style.display = "block";
    let displaygrocery = document.getElementById("displaygrocery") as HTMLDivElement;
    displaygrocery.style.display = "block";

    const groceryList = await fetchGroceryDetails();
    const Displaytable = document.querySelector("#groceryDisplay tbody") as HTMLTableSectionElement;
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
}

//DisplayOrderHistory
async function DisplayOrderHistory() {
    ViewPage();
    let menupage = document.getElementById("menupage") as HTMLDivElement;
    menupage.style.display = "block";
    let orderhistory = document.getElementById("orderhistory") as HTMLDivElement;
    orderhistory.style.display = "block";

    let orderList = await fetchOrderDetails();
    const Displaytable = document.querySelector("#orderDisplay tbody") as HTMLTableSectionElement;
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
}

//PurchaseGrocery
async function PurchaseGrocery() {
    ViewPage();
    let menupage = document.getElementById("menupage") as HTMLDivElement;
    menupage.style.display = "block";
    let purchasegrocery = document.getElementById("purchasegrocery") as HTMLDivElement;
    purchasegrocery.style.display = "block";//cardview

    let cardview = document.getElementById("cardview") as HTMLDivElement;
    const groceryList = await fetchGroceryDetails();
     
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
let egroceryname = document.getElementById("groceryname") as HTMLInputElement;
let egrocerycount = document.getElementById("grocerycount") as HTMLInputElement;
let egroceryprice = document.getElementById("groceryprice") as HTMLInputElement;
let epurchasegrocerydate = document.getElementById("purchasegrocerydate") as HTMLInputElement;
let eexpgrocerydate = document.getElementById("expgrocerydate") as HTMLInputElement;
let egroceryImageData = document.getElementById("groceryImageData") as HTMLInputElement;
let currentgroceryID: number | null;
async function EditGrocery(edititemid: number) {
    currentgroceryID = edititemid;

    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = "block";
    const groceryList = await fetchGroceryDetails();

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

}

//add grocery
function Add() {
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = "block";
}
let groceryname: string;
let grocerycount: number;
let groceryprice: number;
let purchasegrocerydate: string;
let expgrocerydate: string;
let groceryImageData: any;
let form = document.getElementById("groceryaddform") as HTMLFormElement;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    groceryname = (document.getElementById("groceryname") as HTMLInputElement).value;
    grocerycount = parseInt((document.getElementById("grocerycount") as HTMLInputElement).value);
    groceryprice = parseInt((document.getElementById("groceryprice") as HTMLInputElement).value);
    purchasegrocerydate = (document.getElementById("purchasegrocerydate") as HTMLInputElement).value;
    expgrocerydate = (document.getElementById("expgrocerydate") as HTMLInputElement).value;
    groceryImageData = (document.getElementById("groceryImageData") as HTMLInputElement);
    //let base64String: any = "";
    const file = groceryImageData.files?.[0];
    const reader = new FileReader();
    reader.onload = function (event) {
        const base64String = event.target?.result as string;
        if (currentgroceryID == null) {
            const newGroceryList: GroceryDetails = {
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
        } else {
            const newGroceryList: GroceryDetails = {
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
    }

    reader.readAsDataURL(file);

    // let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    // AddDiv.style.display = "block";



})

//AddToCartDetails
let selectedID: number;
function AddToCartDetails(groceryid: number) {
    ViewPage();
    let itemCount = document.getElementById("itemCount") as HTMLDivElement;
    itemCount.style.display = "block";
    selectedID = groceryid;
}
//AddToCart
async function AddToCart() {

    let groceryCount = document.getElementById("groceryCount") as HTMLInputElement;
    let groceryList = await fetchGroceryDetails();
    groceryList.forEach((item) => {
        if (item.groceryID == selectedID) {
            cartArrayList.push(new CartItem(item.groceryID, item.groceryName, Number(groceryCount.value), item.unitPrice, item.expiryDate, "initiate"));
            alert("add to cart successfully......");
        }

    })

    PurchaseGrocery();
}

//WalletRecharge
async function WalletRecharge() {
    ViewPage();
    let menupage = document.getElementById("menupage") as HTMLDivElement;
    menupage.style.display = "block";
    let walletrecharge = document.getElementById("walletrecharge") as HTMLDivElement;
    walletrecharge.style.display = "block";
    let userList = await fetchUserDetails();
    userList.forEach((item) => {
        if (item.userID == currentUserID) {
            currentBalance = item.walletBalance;
        }
    })

    let currentbalance = document.getElementById("currentbalance") as HTMLSpanElement;
    currentbalance.innerHTML = String(currentBalance);
}

//TopUp
async function TopUp() {
    ViewPage();
    let menupage = document.getElementById("menupage") as HTMLDivElement;
    menupage.style.display = "block";
    let walletrecharge = document.getElementById("walletrecharge") as HTMLDivElement;
    walletrecharge.style.display = "block";
    let afterrecharge = document.getElementById("afterrecharge") as HTMLDivElement;
    afterrecharge.style.display = "block";

    let userList = await fetchUserDetails();
    let rechargeAmount = document.getElementById("rechargeAmount") as HTMLInputElement;
    userList.forEach((item) => {
        if (item.userID == currentUserID) {
            currentBalance = item.walletBalance + Number(rechargeAmount.value);
            const updatenewuser: UserDetails = {
                userID: currentUserID,
                userName: item.userName,
                email: item.email,
                phoneNumber: item.phoneNumber,
                password: item.password,
                walletBalance: currentBalance,
                userImage: item.userImage
            }
            updateUserDetails(currentUserID, updatenewuser);
        }
    })



    let afterbalance = document.getElementById("afterbalance") as HTMLSpanElement;
    afterbalance.innerHTML = String(currentBalance);
}

//DisplayCartItem
function DisplayCartItem() {
    ViewPage();
    let menupage = document.getElementById("menupage") as HTMLDivElement;
    menupage.style.display = "block";
    let cartitem = document.getElementById("cartitem") as HTMLDivElement;
    cartitem.style.display = "block";


    const Displaytable = document.querySelector("#cartitemDisplay tbody") as HTMLTableSectionElement;
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
async function BuyCartItem() {

    let groceryList = await fetchGroceryDetails();
    let userList = await fetchUserDetails();
    cartArrayList.forEach((item) => {
        groceryList.forEach((grocery) => {
            if (item.CartGroceryID == grocery.groceryID) {
                if (grocery.groceryQuantity < item.CartGroceryQuantity) {
                    alert("Your enter quantity not available........");
                } else {


                    const newOrder: OrderDetails = {
                        orderID: undefined,
                        userID: currentUserID,
                        productID: item.CartGroceryID,
                        productName: item.CartGroceryName,
                        productPrice: item.CartUnitPrice,
                        purchaseDate: new Date(),
                        quantity: item.CartGroceryQuantity,
                        totalAmount: item.CartUnitPrice
                    }
                    addOrderDetails(newOrder);
                    item.CartStatus == "ordered";


                    let groceryfinalCout: number;

                    groceryList.forEach((grocery) => {
                        if (grocery.groceryID == item.CartGroceryID) {
                            groceryfinalCout = grocery.groceryQuantity - item.CartGroceryQuantity;
                            const updateGrocery: GroceryDetails = {
                                groceryID: item.CartGroceryID,
                                groceryName: item.CartGroceryName,
                                groceryQuantity: groceryfinalCout,
                                unitPrice: item.CartUnitPrice,
                                purchaseDate: grocery.purchaseDate,
                                expiryDate: grocery.expiryDate,
                                groceryImage: grocery.groceryImage
                            }
                            updateGroceryDetails(item.CartGroceryID, updateGrocery);
                        }
                    })

                    // let totalbillamount:number=0;
                    // cartArrayList.forEach((cart)=>{
                    //     totalbillamount+=cart.CartGroceryQuantity*cart.CartUnitPrice;
                    // })
                    let totalbillamount = item.CartGroceryQuantity * item.CartUnitPrice;
                    userList.forEach((user) => {
                        if (user.userID == currentUserID) {
                            if (user.walletBalance < totalbillamount) {
                                alert("You don't have sufficient Balance please recharge......");
                            } else {
                                currentBalance = user.walletBalance - totalbillamount;
                                const updateuserlist: UserDetails = {
                                    userID: currentUserID,
                                    userName: user.userName,
                                    email: user.email,
                                    phoneNumber: user.phoneNumber,
                                    password: user.password,
                                    walletBalance: currentBalance,
                                    userImage: user.userImage
                                }
                                updateUserDetails(currentUserID, updateuserlist);

                            }
                        }
                    })
                }
            }
        })

    })
    alert("Purchse successfully done..............");
    DisplayCartItem();
    //orderid++;
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
    let homepage = document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display = "block";
}
//export
async function ExportOrderData(){
    const a=document.querySelector('a') as HTMLAnchorElement;
    let data: string = "OrderID,UserID,ProductID,ProductName,ProductPrice,PurchaseDate,Quantity,TotalAmount";
    const orderdetails=await fetchOrderDetails();
    orderdetails.forEach((item)=>{
        if(currentUserID==item.userID){
            data = data + `\n` + `${item.orderID},${item.userID},${item.productID},${item.productName},${item.productPrice},${item.purchaseDate.toString().substring(0, 10)},${item.quantity},${item.totalAmount}\n`;            
        }
    })
    const blob=new Blob([data],{type:'text/csv'});
    const url=URL.createObjectURL(blob);
    a.href=url;
    a.download='groceryOrderDetails.csv';
}
 