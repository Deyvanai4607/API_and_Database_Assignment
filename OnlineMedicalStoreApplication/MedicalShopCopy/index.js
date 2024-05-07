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
let userIdAutoIncrement = 1000;
let medicineIDAutoIncrement = 10;
let orderIdAutoIncrement = 100;
let CurrentuserID;
let CurrentuserEmail;
let CurrentUserMdicineName;
let CurrentUserMdicineId;
let CurrentorderId;
let CurrentUserbalance;
let NewuserEmailStatus = false;
let NewUserpasswordStatus = true;
let NewuserPhoneNumberStatus = false;
// //user list
// let UserArrayList: Array<User> = new Array<User>();
// UserArrayList.push(new User("devi@gmail.com", "devi", "devi", 9789011226, 100));
// UserArrayList.push(new User("nila@gmail.com", "nila", "nila", 9789011228, 1000));
// //MedicineList
// let MedicineList: Array<MedicineInfo> = new Array<MedicineInfo>();
// MedicineList.push(new MedicineInfo("Paracetomol", 5, 50, new Date(2027, 4, 23)));
// MedicineList.push(new MedicineInfo("Colpal", 5, 60, new Date(2022, 4, 23)));
// MedicineList.push(new MedicineInfo("Stepsil", 5, 70, new Date(2024, 4, 23)));
// MedicineList.push(new MedicineInfo("Iodex", 5, 80, new Date(2025, 4, 23)));
// MedicineList.push(new MedicineInfo("Acetherol", 5, 100, new Date(2026, 4, 23)));
// //OrderList
// let OrderList: Array<Order> = new Array<Order>();
// OrderList.push(new Order("MID101", "UI1001", "Paracetomol", 3, orderStatus.Ordered));
// OrderList.push(new Order("MID102", "UI1001", "Stepsil", 2, orderStatus.Ordered));
//signup page
function signUp() {
    if (NewuserEmailStatus == true &&
        NewUserpasswordStatus == true &&
        NewuserPhoneNumberStatus == true) {
        let newuserEmail = document.getElementById('email').value;
        let newUserpass = document.getElementById('pass').value;
        let newUserCpass = document.getElementById('pass2').value;
        let newuserPhoneNumber = document.getElementById('phone').value;
        const userList = {
            userID: 0,
            userEmail: newuserEmail,
            password: newUserpass,
            cpassword: newUserCpass,
            userPhoneNumber: newuserPhoneNumber,
            balance: 0
        };
        addUser(userList);
        // UserArrayList.push(new User(newuserEmail, newUserpass, newUserCpass, +newuserPhoneNumber, 0));
        displayHomePage();
    }
    else {
        alert("Please fill out the form fully.");
    }
}
//add user
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5267/api/User', {
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
//add order
function addOrder(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5267/api/Order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Fail to add order');
        }
    });
}
//add medicine
function addMedicine(medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5267/api/MedicineInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Fail to add medicine');
        }
    });
}
//update medicine
function updateMedicine(id, medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5267/api/MedicineInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
    });
}
//update user
function updateUser(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5267/api/User${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
    });
}
//update order
function updateOrder(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5267/api/Order/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to update order');
        }
    });
}
//delete medicine
function deleteMedicine(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5267/api/MedicineInfo/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete medicine');
        }
    });
}
//delete order
// async function deleteOrder(id: number): Promise<void> {
//     const response = await fetch(`http://localhost:5267/api/Order/${id}`, {
//         method: 'DELETE'
//     });
//     if (!response.ok) {
//         throw new Error('Failed to delete order');
//     }
// }
//fetch user
function fetchUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5267/api/User';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return yield response.json();
    });
}
//fetch medicine
function fetchMedicine() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5267/api/MedicineInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch medicine');
        }
        return yield response.json();
    });
}
//fetch order
function fetchOrder() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5267/api/Order';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Order');
        }
        return yield response.json();
    });
}
//existing page
function existingUserPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const UserArrayList = yield fetchUser();
        let homePage = document.getElementById('homePage');
        let existingUserPage = document.getElementById('existingUserPage');
        let availableUser = document.getElementById('availableUser');
        homePage.style.display = "none";
        existingUserPage.style.display = "block";
        availableUser.innerHTML = "<h2>Available User</h2>";
        for (let i = 0; i < UserArrayList.length; i++) {
            availableUser.innerHTML += `User Email : ${UserArrayList[i].userEmail} | User Id : ${UserArrayList[i].userID}<br>`;
        }
        let newUserPage = document.getElementById('newUserPage');
        newUserPage.style.display = "none";
    });
}
//sign in page
function signIn() {
    return __awaiter(this, void 0, void 0, function* () {
        const UserArrayList = yield fetchUser();
        let noExistinguserIdChecker = false;
        let existinguserId = document.getElementById("existingUserId").value;
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].userEmail == existinguserId) {
                CurrentuserID = UserArrayList[i].userID;
                CurrentuserEmail = UserArrayList[i].userEmail;
                CurrentUserbalance = UserArrayList[i].balance;
                medicinePage();
                return;
            }
            else {
                noExistinguserIdChecker = true;
            }
        }
        if (noExistinguserIdChecker) {
            alert("Enter Valid User Id");
        }
    });
}
//medicinePage page
function medicinePage() {
    let medicinePage = document.getElementById('medicinePage');
    medicinePage.style.display = "block";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let tableDisplay = document.getElementById('medicineDiv');
    tableDisplay.style.display = "none";
    let purchasetableDisplay = document.getElementById('puchaseMedicine');
    purchasetableDisplay.style.display = "none";
    let cancelDisplay = document.getElementById('cancelDisplay');
    cancelDisplay.style.display = "none";
    let historyDisplay = document.getElementById('historyDisplay');
    historyDisplay.style.display = "none";
    let requiredCount = document.getElementById("requiredCount");
    requiredCount.style.display = "none";
    let topupDiv = document.getElementById("topupDiv");
    topupDiv.style.display = "none";
    let Showbalance = document.getElementById("Showbalance");
    Showbalance.style.display = "none";
    let greet = document.getElementById('greet');
    greet.innerHTML = "Welcome";
}
//display medicine
function DisplayMedicine() {
    return __awaiter(this, void 0, void 0, function* () {
        const tableBody = document.querySelector("#medicineInfo tbody");
        const MedicineList = yield fetchMedicine();
        tableBody.innerHTML = "";
        MedicineList.forEach((item) => {
            const row = document.createElement("tr");
            // let date= item.expiryDate.toLocaleString().split('T');
            // let dateArr=date[0].split("-");
            let date = item.expiryDate.toString().substring(0, 10);
            row.innerHTML = `
        <td>${item.medicineName}</td>
        <td>${item.medicineCount}</td>
        <td>${item.medicinePrice}</td>
        <td>${date}</td>
        <td>
            <button onClick="MedicineEdit('${item.medicineID}')">Edit</button> 
            <button onClick="MedicineDelete('${item.medicineID}')">Delete</button>  
        </td>
         
      `;
            tableBody.appendChild(row);
        });
        let tableDisplay = document.getElementById('medicineInfo');
        tableDisplay.style.display = "block";
        let medicineDiv = document.getElementById("medicineDiv");
        medicineDiv.style.display = "block";
        let purchasetableDisplay = document.getElementById('puchaseMedicine');
        purchasetableDisplay.style.display = "none";
        let cancelDisplay = document.getElementById('cancelDisplay');
        cancelDisplay.style.display = "none";
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "none";
        let requiredCount = document.getElementById("requiredCount");
        requiredCount.style.display = "none";
        let topupDiv = document.getElementById("topupDiv");
        topupDiv.style.display = "none";
        let Showbalance = document.getElementById("Showbalance");
        Showbalance.style.display = "none";
        let greet = document.getElementById('greet');
        greet.style.display = "none";
    });
}
//Medicine Delete
function MedicineDelete(item) {
    deleteMedicine(item);
    //MedicineList = MedicineList.filter((items) => items.medicineID !== item);
    DisplayMedicine();
}
//edit medicine
let emedname = document.getElementById("medname");
let emedcount = document.getElementById("medcount");
let emedprice = document.getElementById("medprice");
let emeddate = document.getElementById("meddate");
let currentmedicineID;
function MedicineEdit(edititemid) {
    return __awaiter(this, void 0, void 0, function* () {
        CurrentUserMdicineId = edititemid;
        currentmedicineID = edititemid;
        let AddDiv = document.getElementById("AddDiv");
        AddDiv.style.display = "block";
        const MedicineList = yield fetchMedicine();
        const item = MedicineList.find((item) => item.medicineID == edititemid);
        if (item) {
            // currentmedicineID = item.medicineID;
            emedname.value = item.medicineName;
            emedcount.value = String(item.medicineCount);
            emedprice.value = String(item.medicinePrice);
            emeddate.value = String(item.expiryDate);
        }
    });
}
//add medicine
let medname;
let medcount;
let medprice;
let meddate;
function Add() {
    let AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = "block";
}
function addPush() {
    //const MedicineList = await fetchMedicine();
    medname = document.getElementById("medname").value;
    medcount = parseInt(document.getElementById("medcount").value);
    medprice = parseInt(document.getElementById("medprice").value);
    meddate = document.getElementById("meddate").value;
    if (currentmedicineID == null) {
        const newMedicineList = {
            medicineID: 0,
            medicineName: medname,
            medicineCount: medcount,
            medicinePrice: medprice,
            expiryDate: new Date(meddate)
        };
        addMedicine(newMedicineList);
        //MedicineList.push(new MedicineInfo(medname, medcount, medprice, meddate));
        DisplayMedicine();
    }
    else {
        const newMedicineList = {
            medicineID: currentmedicineID,
            medicineName: medname,
            medicineCount: medcount,
            medicinePrice: medprice,
            expiryDate: new Date(meddate)
        };
        updateMedicine(currentmedicineID, newMedicineList);
        DisplayMedicine();
        // for (let i = 0; i < MedicineList.length; i++) {
        //     if (MedicineList[i].medicineID == currentmedicineID) {
        //         MedicineList[i].medicineName = medname;
        //         MedicineList[i].medicineCount = medcount;
        //         MedicineList[i].medicinePrice = medprice;
        //         MedicineList[i].expiryDate = MedicineList[i].expiryDate;
        //         DisplayMedicine();
        //     }
        // }
    }
    let AddDiv = document.getElementById("AddDiv");
    AddDiv.style.display = "none";
}
//purchase
function Purchase() {
    return __awaiter(this, void 0, void 0, function* () {
        const MedicineList = yield fetchMedicine();
        const tableBody = document.querySelector("#puchaseMedicine tbody");
        tableBody.innerHTML = "";
        MedicineList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.medicineName}</td>
        <td>${item.medicineCount}</td>
        <td>${item.medicinePrice}</td>
        <td>${item.expiryDate}</td>
        <td>
          <button onclick="BuyMedicine(${item.medicineID})"  >Buy</button>          
        </td> 
      `;
            tableBody.appendChild(row);
        });
        let purchasetableDisplay = document.getElementById('puchaseMedicine');
        purchasetableDisplay.style.display = "block";
        let medicineDiv = document.getElementById("medicineDiv");
        medicineDiv.style.display = "none";
        let cancelDisplay = document.getElementById('cancelDisplay');
        cancelDisplay.style.display = "none";
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "none";
        let requiredCount = document.getElementById("requiredCount");
        requiredCount.style.display = "none";
        let topupDiv = document.getElementById("topupDiv");
        topupDiv.style.display = "none";
        let Showbalance = document.getElementById("ShowBalance");
        Showbalance.style.display = "none";
        let greet = document.getElementById('greet');
        greet.style.display = "none";
    });
}
//cancel
function Cancel() {
    return __awaiter(this, void 0, void 0, function* () {
        const OrderList = yield fetchOrder();
        const tableBody = document.querySelector("#cancelDisplay tbody");
        tableBody.innerHTML = "";
        OrderList.forEach((item) => {
            if (item.userID == CurrentuserID && item.orderStatus == "Ordered") {
                // CurrentorderId = item.orderId;
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.userID}</td>
                <td>${item.medicineID}</td>
                <td>${item.medicineCount}</td>
                <td>${item.medicineName}</td>
                <td>${item.orderStatus}</td> 
                <td>
                   <button onClick="Remove('${item.orderId}')">Cancel</button>
                </td>
            `;
                tableBody.appendChild(row);
            }
        });
        let cancelDisplay = document.getElementById("cancelDisplay");
        cancelDisplay.style.display = "block";
        let purchasetableDisplay = document.getElementById('puchaseMedicine');
        purchasetableDisplay.style.display = "none";
        let medicineDiv = document.getElementById("medicineDiv");
        medicineDiv.style.display = "none";
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "none";
        let requiredCount = document.getElementById("requiredCount");
        requiredCount.style.display = "none";
        let topupDiv = document.getElementById("topupDiv");
        topupDiv.style.display = "none";
        let Showbalance = document.getElementById("ShowBalance");
        Showbalance.style.display = "none";
        let greet = document.getElementById('greet');
        greet.style.display = "none";
    });
}
function Remove(orderid) {
    return __awaiter(this, void 0, void 0, function* () {
        const OrderList = yield fetchOrder();
        const MedicineList = yield fetchMedicine();
        // orderId: number;
        // medicineID: number;
        // userId: number;
        // medicineName: string;
        // medicineCount: number;
        // orderStatus: string;
        OrderList.forEach((orderitem) => {
            if (orderitem.orderId == orderid) {
                const newOrder = {
                    orderId: orderid,
                    medicineID: orderitem.medicineID,
                    userID: orderitem.userID,
                    medicineName: orderitem.medicineName,
                    medicineCount: orderitem.medicineCount,
                    orderStatus: "Cancelled"
                };
                updateOrder(orderid, newOrder);
                MedicineList.forEach((items) => {
                    if (items.medicineID == orderitem.medicineID) {
                        const newMedicine = {
                            medicineID: items.medicineID,
                            medicineName: items.medicineName,
                            medicinePrice: items.medicinePrice,
                            expiryDate: items.expiryDate,
                            medicineCount: items.medicineCount + orderitem.medicineCount
                        };
                        updateMedicine(items.medicineID, newMedicine);
                    }
                });
            }
        });
        Cancel();
    });
}
let selectedID;
//BuyMedicine
function BuyMedicine(item) {
    let puchaseMedicine = document.getElementById("puchaseMedicine");
    puchaseMedicine.style.display = "none";
    let requiredCount = document.getElementById("requiredCount");
    requiredCount.style.display = "block";
    selectedID = item;
}
;
//top up
function TopUp() {
    return __awaiter(this, void 0, void 0, function* () {
        const UserArrayList = yield fetchUser();
        let divelement = document.getElementById("topupDiv");
        divelement.style.display = "block";
        let currentAmount = document.getElementById("currentAmount");
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].userID == CurrentuserID) {
                currentAmount.innerHTML = UserArrayList[i].balance.toString();
            }
        }
        let cancelDisplay = document.getElementById("cancelDisplay");
        cancelDisplay.style.display = "none";
        let purchasetableDisplay = document.getElementById('puchaseMedicine');
        purchasetableDisplay.style.display = "none";
        let medicineDiv = document.getElementById("medicineDiv");
        medicineDiv.style.display = "none";
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "none";
        let requiredCount = document.getElementById("requiredCount");
        requiredCount.style.display = "none";
        let Showbalance = document.getElementById("ShowBalance");
        Showbalance.style.display = "none";
        let greet = document.getElementById('greet');
        greet.style.display = "none";
        let afterdivelement = document.getElementById("afterTopupDiv");
        afterdivelement.style.display = "none";
    });
}
function Recharge() {
    return __awaiter(this, void 0, void 0, function* () {
        const UserArrayList = yield fetchUser();
        let afterdivelement = document.getElementById("afterTopupDiv");
        let inpuTtopup = document.getElementById("inpuTtopup");
        let afterTopup = document.getElementById("afterTopup");
        afterdivelement.style.display = "block";
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].userID == CurrentuserID) {
                UserArrayList[i].balance += parseInt(inpuTtopup.value);
                afterTopup.innerHTML = UserArrayList[i].balance.toString();
                CurrentUserbalance = UserArrayList[i].balance;
                inpuTtopup.value = " ";
            }
        }
    });
}
//show balance
function ShowBalance() {
    return __awaiter(this, void 0, void 0, function* () {
        let showBalance = document.getElementById("ShowBalance");
        let cbalance = document.getElementById("cbalance");
        showBalance.style.display = "block";
        const UserArrayList = yield fetchUser();
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].userID == CurrentuserID) {
                cbalance.innerHTML = CurrentUserbalance.toString();
                //CurrentUserbalance = UserArrayList[i].balance;
            }
        }
        let divelement = document.getElementById("topupDiv");
        divelement.style.display = "none";
        let cancelDisplay = document.getElementById("cancelDisplay");
        cancelDisplay.style.display = "none";
        let purchasetableDisplay = document.getElementById('puchaseMedicine');
        purchasetableDisplay.style.display = "none";
        let medicineDiv = document.getElementById("medicineDiv");
        medicineDiv.style.display = "none";
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "none";
        let requiredCount = document.getElementById("requiredCount");
        requiredCount.style.display = "none";
        let greet = document.getElementById('greet');
        greet.style.display = "none";
        let afterdivelement = document.getElementById("afterTopupDiv");
        afterdivelement.style.display = "none";
    });
}
//buy medicine
function buyMedicine() {
    return __awaiter(this, void 0, void 0, function* () {
        const MedicineList = yield fetchMedicine();
        let proceed = true;
        let finalMedicineRequiredCount = 0;
        let medicineRequiredCount = document.getElementById('medicineRequiredCount').value;
        let medicineRequiredCountFeild = document.getElementById('medicineRequiredCount');
        let medicineRequiredCountRegex = /^\d{1,3}$/;
        if (medicineRequiredCountRegex.test(medicineRequiredCount) && +medicineRequiredCount > 0) {
            for (let i = 0; i < MedicineList.length; i++) {
                if (MedicineList[i].medicineID == selectedID) {
                    if (MedicineList[i].medicineCount > 0) {
                        if ((MedicineList[i].medicineCount - +medicineRequiredCount) < 0) {
                            proceed = confirm(`We only have ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName}. Do you want to buy ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName}?`);
                            if (proceed) {
                                finalMedicineRequiredCount = MedicineList[i].medicineCount;
                            }
                        }
                        else {
                            finalMedicineRequiredCount = +medicineRequiredCount;
                        }
                        if (proceed) {
                            if (finalMedicineRequiredCount * MedicineList[i].medicinePrice > CurrentUserbalance) {
                                //medicineRequiredCountFeild.value = " ";
                                finalMedicineRequiredCount = 0;
                                alert("You have Insufficiet balance. Please TopUp......  ");
                            }
                            else {
                                const newMedicine = {
                                    medicineID: MedicineList[i].medicineID,
                                    medicineName: MedicineList[i].medicineName,
                                    medicinePrice: MedicineList[i].medicinePrice,
                                    medicineCount: MedicineList[i].medicineCount - finalMedicineRequiredCount,
                                    expiryDate: MedicineList[i].expiryDate
                                };
                                updateMedicine(MedicineList[i].medicineID, newMedicine);
                                //MedicineList[i].medicineCount = MedicineList[i].medicineCount - finalMedicineRequiredCount;
                                const newOrder = {
                                    orderId: 0,
                                    medicineID: MedicineList[i].medicineID,
                                    userID: CurrentuserID,
                                    medicineName: MedicineList[i].medicineName,
                                    medicineCount: finalMedicineRequiredCount,
                                    orderStatus: "Ordered"
                                };
                                addOrder(newOrder);
                                //OrderList.push(new Order(MedicineList[i].medicineID, CurrentuserID, MedicineList[i].medicineName, finalMedicineRequiredCount, orderStatus.Ordered));
                                const UserArrayList = yield fetchUser();
                                for (let i = 0; i < UserArrayList.length; i++) {
                                    if (CurrentuserID == UserArrayList[i].userID) {
                                        UserArrayList[i].balance = UserArrayList[i].balance - finalMedicineRequiredCount * MedicineList[i].medicinePrice;
                                        CurrentUserbalance = UserArrayList[i].balance;
                                    }
                                }
                                medicineRequiredCountFeild.value = " ";
                                alert("Purchase Success.");
                            }
                        }
                    }
                    else if (MedicineList[i].medicineCount <= 0) {
                        alert("Out of Stock, you can buy alternative medicine.");
                    }
                }
            }
        }
        else {
            alert("Please enter valid Required Count");
        }
        Purchase();
    });
}
//show history
function showHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const OrderList = yield fetchOrder();
        let historyDisplay = document.getElementById('historyDisplay');
        historyDisplay.style.display = "block";
        const historyDisplaytable = document.querySelector("#historyDisplay tbody");
        historyDisplaytable.innerHTML = "";
        OrderList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.medicineID}</td>
        <td>${item.userID}</td>
        <td>${item.medicineName}</td>
        <td>${item.medicineCount}</td>
        <td>${item.orderStatus}</td>
         
      `;
            historyDisplaytable.appendChild(row);
        });
        let divelement = document.getElementById("topupDiv");
        divelement.style.display = "none";
        let cancelDisplay = document.getElementById("cancelDisplay");
        cancelDisplay.style.display = "none";
        let purchasetableDisplay = document.getElementById('puchaseMedicine');
        purchasetableDisplay.style.display = "none";
        let medicineDiv = document.getElementById("medicineDiv");
        medicineDiv.style.display = "none";
        let Showbalance = document.getElementById("ShowBalance");
        Showbalance.style.display = "none";
        let requiredCount = document.getElementById("requiredCount");
        requiredCount.style.display = "none";
        let greet = document.getElementById('greet');
        greet.style.display = "none";
        let afterdivelement = document.getElementById("afterTopupDiv");
        afterdivelement.style.display = "none";
    });
}
//email validation
function checkEmail(paraEmail) {
    let newuserEmail = document.getElementById(paraEmail).value;
    let newuserEmailMessage = document.getElementById(paraEmail + "Message");
    var regxemail = /^([a-z 0-9]+)@([a-z]+)\.([a-z]{2,20})$/;
    if (regxemail.test(newuserEmail) == true) {
        NewuserEmailStatus = true;
        newuserEmailMessage.style.visibility = "hidden";
    }
    else {
        NewuserEmailStatus = false;
        newuserEmailMessage.innerHTML = "Please enter valid email";
        newuserEmailMessage.style.visibility = "visible";
        newuserEmailMessage.style.color = "tomato";
        newuserEmailMessage.style.marginLeft = "10px";
    }
}
//password validate
function checkpassword(paraPass) {
    let newUserPass = document.getElementById(paraPass).value;
    let newUserPassMessage = document.getElementById(paraPass + "Message");
    let newUserPasserRegex = /^\w{5,7}$/;
    if (newUserPasserRegex.test(newUserPass)) {
        NewUserpasswordStatus = true;
        newUserPassMessage.style.visibility = "hidden";
    }
    else {
        NewUserpasswordStatus = false;
        newUserPassMessage.innerHTML = "Please enter valid password. password should have atleast 5 letter atmost 7 letter";
        newUserPassMessage.style.visibility = "visible";
        newUserPassMessage.style.color = "tomato";
        newUserPassMessage.style.marginLeft = "10px";
    }
}
//Confirm password validate
// function checkConfirmpassword(paraCPass: string,paraPss: string){
//     let newUserPass = (document.getElementById(paraPss) as HTMLInputElement).value;
//     let newUserCPass = (document.getElementById(paraCPass) as HTMLInputElement).value;
//     let newUserCPassMessage = document.getElementById(paraCPass + "Message") as HTMLLabelElement;
//     if (newUserPass!==newUserCPass  ) {
//         NewUsercpasswordStatus = true;
//         newUserCPassMessage.style.visibility = "hidden";
//     }
//     else {
//         NewUsercpasswordStatus = false;
//         newUserCPassMessage.innerHTML = "Please enter valid password ";
//         newUserCPassMessage.style.visibility = "visible";
//         newUserCPassMessage.style.color = "tomato";
//         newUserCPassMessage.style.marginLeft = "10px";
//     } 
// }
//validate phone number
function checkPhone(paramNewuserPhoneNumber) {
    let newuserPhoneNumber = document.getElementById(paramNewuserPhoneNumber).value;
    let newuserPhoneNumberMessage = document.getElementById(paramNewuserPhoneNumber + "Message");
    let newuserPhoneNumberRegex = /^\d{10}$/;
    if (newuserPhoneNumberRegex.test(newuserPhoneNumber)) {
        NewuserPhoneNumberStatus = true;
        newuserPhoneNumberMessage.style.visibility = "hidden";
    }
    else {
        NewuserPhoneNumberStatus = false;
        newuserPhoneNumberMessage.innerHTML = "Please enter valid phone number";
        newuserPhoneNumberMessage.style.visibility = "visible";
        newuserPhoneNumberMessage.style.color = "tomato";
        newuserPhoneNumberMessage.style.marginLeft = "10px";
    }
}
//display method
function displayHomePage() {
    CurrentuserID = 0;
    CurrentuserEmail = "";
    // let medicineList = document.getElementById('medicineList') as HTMLSelectElement;
    // medicineList.selectedIndex = 0;
    let requiredCount = document.getElementById('requiredCount');
    let medicineInfo = document.getElementById('medicineInfo');
    let historyDisplay = document.getElementById('historyDisplay');
    let medicinePage = document.getElementById('medicinePage');
    let newUserPage = document.getElementById('newUserPage');
    let existingUserPage = document.getElementById('existingUserPage');
    let homePage = document.getElementById('homePage');
    //(document.getElementById('medicineRequiredCount') as HTMLInputElement).value = null;
    //(document.getElementById('existinguserId') as HTMLInputElement).value = null;
    requiredCount.style.display = "none";
    historyDisplay.style.display = "none";
    medicinePage.style.display = "none";
    medicineInfo.style.display = "none";
    newUserPage.style.display = "none";
    existingUserPage.style.display = "none";
    homePage.style.display = "block";
}
//new user page
function newUserPage() {
    let newUserPage = document.getElementById('newUserPage');
    newUserPage.style.display = "block";
}
