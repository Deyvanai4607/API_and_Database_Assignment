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
let CurrentUserId;
let CurrentUserbalance;
let NewUserNameStatus = false;
let NewUserBalanceStatus = false;
let NewUserPhoneNumberStatus = false;
//************************************DATABASE CODE********************************************** */
//add user
function addUserDetails(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5259/api/User', {
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
//add travel
function addTravelDetails(travelDetails) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5259/api/TravelDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travelDetails)
        });
        if (!response.ok) {
            throw new Error('Fail to add user');
        }
    });
}
//add Ticket
function addTicketDetails(ticketDetails) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5259/api/TicketDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticketDetails)
        });
        if (!response.ok) {
            throw new Error('Fail to add user');
        }
    });
}
//update user
function updateUserDetails(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5259/api/User/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
    });
}
//update ticket
function updateTicketDetails(id, ticketDetails) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5259/api/TicketDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticketDetails)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
    });
}
//update travel
function updateTravelDetails(id, travelDetails) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5259/api/TravelDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(travelDetails)
        });
        if (!response.ok) {
            throw new Error('Failed to update contact');
        }
    });
}
//delete user
function deleteUserDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5259/api/User/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
    });
}
//delete travel
function deleteTravelDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5259/api/TravelDetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
    });
}
//delete ticket
function deleteTicketDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5259/api/TicketDetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
    });
}
//fetch user
function fetchUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5259/api/User';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return yield response.json();
    });
}
//fetch travel
function fetchTravelDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5259/api/TravelDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch travel');
        }
        return yield response.json();
    });
}
//fetch ticket
function fetchTicketDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5259/api/TicketDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch ticket');
        }
        return yield response.json();
    });
}
//*********************************************LOGIC CODE***************************************************** */
//signup page
function signUp() {
    if (NewUserNameStatus == true &&
        NewUserBalanceStatus == true &&
        NewUserPhoneNumberStatus == true) {
        let newUserName = document.getElementById('username').value;
        let newUserPhoneNumber = document.getElementById('phone').value;
        let newUserBalance = document.getElementById('balance').value;
        let newUserCardNumber = document.getElementById('cardnumber').value;
        const newUser = {
            userID: undefined,
            userName: newUserName,
            userPhoneNumber: parseInt(newUserPhoneNumber),
            balance: parseInt(newUserBalance),
            cardNumber: parseInt(newUserCardNumber)
        };
        addUserDetails(newUser);
        displayHomePage();
    }
    else {
        alert("Please fill out the form fully.");
    }
}
//username validate
function checkUserName(paraName) {
    let newUserName = document.getElementById(paraName).value;
    let newUserNameMessage = document.getElementById(paraName + "Message");
    let newUserNameRegex = /^\w+$/;
    if (newUserNameRegex.test(newUserName)) {
        NewUserNameStatus = true;
        newUserNameMessage.style.visibility = "hidden";
    }
    else {
        NewUserNameStatus = false;
        newUserNameMessage.innerHTML = "Please enter valid User name";
        newUserNameMessage.style.visibility = "visible";
        newUserNameMessage.style.color = "tomato";
        newUserNameMessage.style.marginLeft = "10px";
    }
}
//balance validation
function checkBalace(paraBalance) {
    let newUserBalance = document.getElementById(paraBalance).value;
    let newUserBalanceMessage = document.getElementById(paraBalance + "Message");
    let newUserBalanceRegex = /^\d+$/;
    if (newUserBalanceRegex.test(newUserBalance)) {
        NewUserBalanceStatus = true;
        newUserBalanceMessage.style.visibility = "hidden";
    }
    else {
        NewUserBalanceStatus = false;
        newUserBalanceMessage.innerHTML = "Please enter valid Balance";
        newUserBalanceMessage.style.visibility = "visible";
        newUserBalanceMessage.style.color = "tomato";
        newUserBalanceMessage.style.marginLeft = "10px";
    }
}
//validate phone number
function checkPhone(paramNewUserPhoneNumber) {
    let newUserPhoneNumber = document.getElementById(paramNewUserPhoneNumber).value;
    let newUserPhoneNumberMessage = document.getElementById(paramNewUserPhoneNumber + "Message");
    let newUserPhoneNumberRegex = /^\d{10}$/;
    if (newUserPhoneNumberRegex.test(newUserPhoneNumber)) {
        NewUserPhoneNumberStatus = true;
        newUserPhoneNumberMessage.style.visibility = "hidden";
    }
    else {
        NewUserPhoneNumberStatus = false;
        newUserPhoneNumberMessage.innerHTML = "Please enter valid phone number";
        newUserPhoneNumberMessage.style.visibility = "visible";
        newUserPhoneNumberMessage.style.color = "tomato";
        newUserPhoneNumberMessage.style.marginLeft = "10px";
    }
}
//display method
function displayHomePage() {
    CurrentUserId = "";
    let homePage = document.getElementById('homePage');
    homePage.style.display = "block";
    let newUserPage = document.getElementById('newUserPage');
    newUserPage.style.display = "none";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let menupage = document.getElementById('menupage');
    menupage.style.display = "none";
    let greet = document.getElementById('greet');
    greet.style.display = "none";
    let ShowBalance = document.getElementById('ShowBalance');
    ShowBalance.style.display = "none";
    let topupDiv = document.getElementById('topupDiv');
    topupDiv.style.display = "none";
    let travelHistory = document.getElementById('travelHistory');
    travelHistory.style.display = "none";
    let travel = document.getElementById('travel');
    travel.style.display = "none";
}
//new user page
function newUserPage() {
    let newUserPage = document.getElementById('newUserPage');
    newUserPage.style.display = "block";
    let homePage = document.getElementById('homePage');
    homePage.style.display = "block";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let menupage = document.getElementById('menupage');
    menupage.style.display = "none";
    let greet = document.getElementById('greet');
    greet.style.display = "none";
    let ShowBalance = document.getElementById('ShowBalance');
    ShowBalance.style.display = "none";
    let topupDiv = document.getElementById('topupDiv');
    topupDiv.style.display = "none";
    let travelHistory = document.getElementById('travelHistory');
    travelHistory.style.display = "none";
    let travel = document.getElementById('travel');
    travel.style.display = "none";
}
//existing page
function existingUserPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let UserArrayList = yield fetchUserDetails();
        let homePage = document.getElementById('homePage');
        homePage.style.display = "none";
        let existingUserPage = document.getElementById('existingUserPage');
        existingUserPage.style.display = "block";
        let availableUser = document.getElementById('availableUser');
        availableUser.innerHTML = "<h2>Available User</h2>";
        for (let i = 0; i < UserArrayList.length; i++) {
            availableUser.innerHTML += `User Name : ${UserArrayList[i].userName} | User Id : ${UserArrayList[i].userID}<br>`;
        }
        let newUserPage = document.getElementById('newUserPage');
        newUserPage.style.display = "none";
    });
}
//sign in page
function signIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let UserArrayList = yield fetchUserDetails();
        let noExistingUserIdChecker = false;
        let existingUserId = document.getElementById('existingUserId').value;
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].userID == existingUserId) {
                CurrentUserId = UserArrayList[i].userID;
                CurrentUserbalance = UserArrayList[i].balance;
                menupage();
                return;
            }
            else {
                noExistingUserIdChecker = true;
            }
        }
        if (noExistingUserIdChecker) {
            alert("Enter Valid User Id");
        }
    });
}
//menupage
function menupage() {
    let newUserPage = document.getElementById('newUserPage');
    newUserPage.style.display = "none";
    let homePage = document.getElementById('homePage');
    homePage.style.display = "none";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let menupage = document.getElementById('menupage');
    menupage.style.display = "block";
    let greet = document.getElementById('greet');
    greet.style.display = "block";
    let ShowBalance = document.getElementById('ShowBalance');
    ShowBalance.style.display = "none";
    let topupDiv = document.getElementById('topupDiv');
    topupDiv.style.display = "none";
    let travelHistory = document.getElementById('travelHistory');
    travelHistory.style.display = "none";
    let travel = document.getElementById('travel');
    travel.style.display = "none";
}
//show balance
function BalanceCheck() {
    return __awaiter(this, void 0, void 0, function* () {
        let showBalance = document.getElementById("ShowBalance");
        let cbalance = document.getElementById("cbalance");
        showBalance.style.display = "block";
        const UserArrayList = yield fetchUserDetails();
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].userID == CurrentUserId) {
                cbalance.innerHTML = UserArrayList[i].balance.toString();
                //CurrentUserbalance = UserArrayList[i].balance;
            }
        }
        let newUserPage = document.getElementById('newUserPage');
        newUserPage.style.display = "none";
        let homePage = document.getElementById('homePage');
        homePage.style.display = "none";
        let existingUserPage = document.getElementById('existingUserPage');
        existingUserPage.style.display = "none";
        let menupage = document.getElementById('menupage');
        menupage.style.display = "block";
        let greet = document.getElementById('greet');
        greet.style.display = "none";
        let ShowBalance = document.getElementById('ShowBalance');
        ShowBalance.style.display = "block";
        let topupDiv = document.getElementById('topupDiv');
        topupDiv.style.display = "none";
        let travelHistory = document.getElementById('travelHistory');
        travelHistory.style.display = "none";
        let travel = document.getElementById('travel');
        travel.style.display = "none";
    });
}
//recharge
function Recharge() {
    return __awaiter(this, void 0, void 0, function* () {
        const UserArrayList = yield fetchUserDetails();
        // let divelement = document.getElementById("topupDiv") as HTMLDivElement;
        // divelement.style.display = "block";
        let currentAmount = document.getElementById("currentAmount");
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].userID == CurrentUserId) {
                currentAmount.innerHTML = UserArrayList[i].balance.toString();
            }
        }
        let newUserPage = document.getElementById('newUserPage');
        newUserPage.style.display = "none";
        let homePage = document.getElementById('homePage');
        homePage.style.display = "none";
        let existingUserPage = document.getElementById('existingUserPage');
        existingUserPage.style.display = "none";
        let menupage = document.getElementById('menupage');
        menupage.style.display = "block";
        let greet = document.getElementById('greet');
        greet.style.display = "none";
        let ShowBalance = document.getElementById('ShowBalance');
        ShowBalance.style.display = "none";
        let topupDiv = document.getElementById('topupDiv');
        topupDiv.style.display = "block";
        let travelHistory = document.getElementById('travelHistory');
        travelHistory.style.display = "none";
        let travel = document.getElementById('travel');
        travel.style.display = "none";
        let afterdivelement = document.getElementById("afterTopupDiv");
        afterdivelement.style.display = "none";
    });
}
function TopUp() {
    return __awaiter(this, void 0, void 0, function* () {
        const UserArrayList = yield fetchUserDetails();
        let afterdivelement = document.getElementById("afterTopupDiv");
        let inpuTtopup = document.getElementById("inpuTtopup");
        let afterTopup = document.getElementById("afterTopup");
        afterdivelement.style.display = "block";
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].userID == CurrentUserId) {
                // UserArrayList[i].balance += parseInt(inpuTtopup.value);
                // afterTopup.innerHTML = UserArrayList[i].balance.toString();
                CurrentUserbalance = UserArrayList[i].balance + parseInt(inpuTtopup.value);
                const updateUser = {
                    userID: CurrentUserId,
                    userName: UserArrayList[i].userName,
                    userPhoneNumber: UserArrayList[i].userPhoneNumber,
                    cardNumber: UserArrayList[i].cardNumber,
                    balance: CurrentUserbalance
                };
                updateUserDetails(CurrentUserId, updateUser);
                afterTopup.innerHTML = CurrentUserbalance.toString();
                inpuTtopup.value = " ";
            }
        }
    });
}
//show travel history
function TravelHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const travelDetails = yield fetchTravelDetails();
        // let historyDisplay = document.getElementById('travelHistory') as HTMLDivElement;
        // historyDisplay.style.display = "block";
        const historyDisplaytable = document.querySelector("#historyDisplay tbody");
        historyDisplaytable.innerHTML = "";
        travelDetails.forEach((item) => {
            let date = item.travelDate.toString().substring(0, 10);
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.travelID}</td>
        <td>${item.cardNumber}</td>
        <td>${item.fromLocation}</td>
        <td>${item.toLocation}</td>
        <td>${date}</td>
        <td>${item.travelCost}</td>
         
      `;
            historyDisplaytable.appendChild(row);
        });
        let newUserPage = document.getElementById('newUserPage');
        newUserPage.style.display = "none";
        let homePage = document.getElementById('homePage');
        homePage.style.display = "none";
        let existingUserPage = document.getElementById('existingUserPage');
        existingUserPage.style.display = "none";
        let menupage = document.getElementById('menupage');
        menupage.style.display = "block";
        let greet = document.getElementById('greet');
        greet.style.display = "none";
        let ShowBalance = document.getElementById('ShowBalance');
        ShowBalance.style.display = "none";
        let topupDiv = document.getElementById('topupDiv');
        topupDiv.style.display = "none";
        let travelHistory = document.getElementById('travelHistory');
        travelHistory.style.display = "block";
        let travel = document.getElementById('travel');
        travel.style.display = "none";
        let afterdivelement = document.getElementById("afterTopupDiv");
        afterdivelement.style.display = "none";
    });
}
//travel
function Travel() {
    return __awaiter(this, void 0, void 0, function* () {
        const ticketList = yield fetchTicketDetails();
        const tableBody = document.querySelector("#travelDisplay tbody");
        tableBody.innerHTML = "";
        ticketList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
        <td>${item.ticketID}</td>
        <td>${item.fromLocation}</td>
        <td>${item.toLocation}</td>
        <td>${item.fair}</td>
        <td>
          <button onclick="BookTravel('${item.ticketID}')"  >Book</button>          
        </td> 
      `;
            tableBody.appendChild(row);
        });
        ticketList.forEach((item) => {
            if (item.ticketID == 5) {
                deleteTicketDetails(5);
            }
        });
        let newUserPage = document.getElementById('newUserPage');
        newUserPage.style.display = "none";
        let homePage = document.getElementById('homePage');
        homePage.style.display = "none";
        let existingUserPage = document.getElementById('existingUserPage');
        existingUserPage.style.display = "none";
        let menupage = document.getElementById('menupage');
        menupage.style.display = "block";
        let greet = document.getElementById('greet');
        greet.style.display = "none";
        let ShowBalance = document.getElementById('ShowBalance');
        ShowBalance.style.display = "none";
        let topupDiv = document.getElementById('topupDiv');
        topupDiv.style.display = "none";
        let travelHistory = document.getElementById('travelHistory');
        travelHistory.style.display = "none";
        let travel = document.getElementById('travel');
        travel.style.display = "block";
        let afterdivelement = document.getElementById("afterTopupDiv");
        afterdivelement.style.display = "none";
    });
}
//BookTravel
function BookTravel(bookTicketID) {
    return __awaiter(this, void 0, void 0, function* () {
        let TicketList = yield fetchTicketDetails();
        let userList = yield fetchUserDetails();
        let proceed = true;
        for (let i = 0; i < TicketList.length; i++) {
            if (TicketList[i].ticketID == bookTicketID) {
                if (CurrentUserbalance < TicketList[i].fair) {
                    alert("You have Insufficiet balance. Please Recharge......  ");
                }
                else {
                    userList.forEach((item) => {
                        if (CurrentUserId == item.userID) {
                            const newTravelHistory = {
                                travelID: undefined,
                                travelCost: TicketList[i].fair,
                                fromLocation: TicketList[i].fromLocation,
                                toLocation: TicketList[i].toLocation,
                                travelDate: new Date(),
                                cardNumber: item.cardNumber
                            };
                            addTravelDetails(newTravelHistory);
                            CurrentUserbalance = item.balance - TicketList[i].fair;
                            const updateUserBalance = {
                                userID: CurrentUserId,
                                userName: item.userName,
                                cardNumber: item.cardNumber,
                                userPhoneNumber: item.userPhoneNumber,
                                balance: CurrentUserbalance
                            };
                            updateUserDetails(CurrentUserId, updateUserBalance);
                        }
                    });
                    alert("Travel Booking Success....");
                }
            }
        }
        Travel();
    });
}
//Exit
function Exit() {
    let newUserPage = document.getElementById('newUserPage');
    newUserPage.style.display = "none";
    let homePage = document.getElementById('homePage');
    homePage.style.display = "block";
    let existingUserPage = document.getElementById('existingUserPage');
    existingUserPage.style.display = "none";
    let menupage = document.getElementById('menupage');
    menupage.style.display = "none";
    let greet = document.getElementById('greet');
    greet.style.display = "none";
    let ShowBalance = document.getElementById('ShowBalance');
    ShowBalance.style.display = "none";
    let topupDiv = document.getElementById('topupDiv');
    topupDiv.style.display = "none";
    let travelHistory = document.getElementById('travelHistory');
    travelHistory.style.display = "none";
    let travel = document.getElementById('travel');
    travel.style.display = "none";
    let afterdivelement = document.getElementById("afterTopupDiv");
    afterdivelement.style.display = "none";
}
