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
let NewUserEmailStatus = false;
//************************************DATABASE CODE********************************************** */
//add user
function addUserDetails(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5282/api/UserDetails', {
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
//add BorrowDetails
function addBorrowDetails(borrowDetails) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5282/api/BorrowDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrowDetails)
        });
        if (!response.ok) {
            throw new Error('Fail to add BorrowDetails');
        }
    });
}
//add addBookDetails
function addBookDetails(bookDetails) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5282/api/BookDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookDetails)
        });
        if (!response.ok) {
            throw new Error('Fail to add BookDetails');
        }
    });
}
//update user
function updateUserDetails(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5282/api/UserDetails/${id}`, {
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
//update BorrowDetails
function updateBorrowDetails(id, borrowDetails) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5282/api/BorrowDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrowDetails)
        });
        if (!response.ok) {
            throw new Error('Failed to update borrowDetails');
        }
    });
}
//update BookDetails
function updateBookDetails(id, bookDetails) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5282/api/BookDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookDetails)
        });
        if (!response.ok) {
            throw new Error('Failed to update bookDetails');
        }
    });
}
//delete user
function deleteUserDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5282/api/UserDetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
    });
}
//delete BorrowDetails
function deleteBorrowDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5282/api/BorrowDetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete BorrowDetails');
        }
    });
}
//delete BookDetails
function deleteBookDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5282/api/BookDetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete BookDetails');
        }
    });
}
//fetch user
function fetchUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5282/api/UserDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return yield response.json();
    });
}
//fetch BorrowDetails
function fetchBorrowDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5282/api/BorrowDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch BorrowDetails');
        }
        return yield response.json();
    });
}
//fetch BookDetails
function fetchBookDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5282/api/BookDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch BookDetails');
        }
        return yield response.json();
    });
}
//*********************************************LOGIC CODE***************************************************** */
//signup page
function signUp() {
    if (NewUserEmailStatus == true) {
        let newUserName = document.getElementById('userName').value;
        let newUsergender = document.getElementById('gender').value;
        let newUserdepartment = document.getElementById('department').value;
        let newUserphone = document.getElementById('phone').value;
        let newUseremail = document.getElementById('email').value;
        let newUserwalletBalance = document.getElementById('walletBalance').value;
        const newUser = {
            userID: undefined,
            userName: newUserName,
            gender: newUsergender,
            department: newUserdepartment,
            mobileNumber: newUserphone,
            mailID: newUseremail,
            walletBalance: parseInt(newUserwalletBalance)
        };
        addUserDetails(newUser);
        displayHomePage();
    }
    else {
        alert("Please fill out the form fully.");
    }
}
//email validation
function checkEmail(paraEmail) {
    let newuserEmail = document.getElementById(paraEmail).value;
    let newuserEmailMessage = document.getElementById(paraEmail + "Message");
    var regxemail = /^([a-z 0-9]+)@([a-z]+)\.([a-z]{2,20})$/;
    if (regxemail.test(newuserEmail) == true) {
        NewUserEmailStatus = true;
        newuserEmailMessage.style.visibility = "hidden";
    }
    else {
        NewUserEmailStatus = false;
        newuserEmailMessage.innerHTML = "Please enter valid email";
        newuserEmailMessage.style.visibility = "visible";
        newuserEmailMessage.style.color = "tomato";
        newuserEmailMessage.style.marginLeft = "10px";
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
    let borrowBook = document.getElementById('borrowBook');
    borrowBook.style.display = "none";
    let borrowedhistory = document.getElementById('borrowedhistory');
    borrowedhistory.style.display = "none";
    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory');
    returnBorrowedhistory.style.display = "none";
    let walletRecharge = document.getElementById('walletRecharge');
    walletRecharge.style.display = "none";
    let afterCount = document.getElementById("bookCountDiv");
    afterCount.style.display = "none";
}
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
    let borrowBook = document.getElementById('borrowBook');
    borrowBook.style.display = "none";
    let borrowedhistory = document.getElementById('borrowedhistory');
    borrowedhistory.style.display = "none";
    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory');
    returnBorrowedhistory.style.display = "none";
    let walletRecharge = document.getElementById('walletRecharge');
    walletRecharge.style.display = "none";
    let afterCount = document.getElementById("bookCountDiv");
    afterCount.style.display = "none";
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
            availableUser.innerHTML += `User Name : ${UserArrayList[i].userName} | User Email : ${UserArrayList[i].mailID}<br>`;
        }
        let newUserPage = document.getElementById('newUserPage');
        newUserPage.style.display = "none";
        let afterCount = document.getElementById("bookCountDiv");
        afterCount.style.display = "none";
    });
}
//sign in page
function signIn() {
    return __awaiter(this, void 0, void 0, function* () {
        let UserArrayList = yield fetchUserDetails();
        let noExistingUserIdChecker = false;
        let existingUserEmail = document.getElementById('existingUserEmail').value;
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].mailID == existingUserEmail) {
                CurrentUserId = UserArrayList[i].userID;
                CurrentUserbalance = UserArrayList[i].walletBalance;
                menupage();
                return;
            }
            else {
                noExistingUserIdChecker = true;
            }
        }
        if (noExistingUserIdChecker) {
            alert("Enter Valid User Email ID");
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
    let borrowBook = document.getElementById('borrowBook');
    borrowBook.style.display = "none";
    let borrowedhistory = document.getElementById('borrowedhistory');
    borrowedhistory.style.display = "none";
    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory');
    returnBorrowedhistory.style.display = "none";
    let walletRecharge = document.getElementById('walletRecharge');
    walletRecharge.style.display = "none";
    let afterCount = document.getElementById("bookCountDiv");
    afterCount.style.display = "none";
}
//ShowBorrowedhistory
function ShowBorrowedhistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const borrowedhistoryList = yield fetchBorrowDetails();
        const historyDisplaytable = document.querySelector("#borrowDisplay tbody");
        historyDisplaytable.innerHTML = "";
        borrowedhistoryList.forEach((item) => {
            if (item.userID == CurrentUserId) {
                let date = item.borrowedDate.toString().substring(0, 10);
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${item.bookID}</td>
                <td>${item.userID}</td>
                <td>${date}</td>
                <td>${item.borrowBookCount}</td>
                <td>${item.status}</td>
                <td>${item.paidFineAmount}</td>
         
             `;
                historyDisplaytable.appendChild(row);
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
        let borrowBook = document.getElementById('borrowBook');
        borrowBook.style.display = "none";
        let borrowedhistory = document.getElementById('borrowedhistory');
        borrowedhistory.style.display = "block";
        let returnBorrowedhistory = document.getElementById('returnBorrowedhistory');
        returnBorrowedhistory.style.display = "none";
        let walletRecharge = document.getElementById('walletRecharge');
        walletRecharge.style.display = "none";
        let afterCount = document.getElementById("bookCountDiv");
        afterCount.style.display = "none";
    });
}
//recharge
function WalletRecharge() {
    return __awaiter(this, void 0, void 0, function* () {
        const UserArrayList = yield fetchUserDetails();
        let currentAmount = document.getElementById("currentAmount");
        for (let i = 0; i < UserArrayList.length; i++) {
            if (UserArrayList[i].userID == CurrentUserId) {
                currentAmount.innerHTML = UserArrayList[i].walletBalance.toString();
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
        let borrowBook = document.getElementById('borrowBook');
        borrowBook.style.display = "none";
        let borrowedhistory = document.getElementById('borrowedhistory');
        borrowedhistory.style.display = "none";
        let returnBorrowedhistory = document.getElementById('returnBorrowedhistory');
        returnBorrowedhistory.style.display = "none";
        let walletRecharge = document.getElementById('walletRecharge');
        walletRecharge.style.display = "block";
        let afterdivelement = document.getElementById("afterTopupDiv");
        afterdivelement.style.display = "none";
        let afterCount = document.getElementById("bookCountDiv");
        afterCount.style.display = "none";
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
                CurrentUserbalance = UserArrayList[i].walletBalance + parseInt(inpuTtopup.value);
                const updateUser = {
                    userID: CurrentUserId,
                    userName: UserArrayList[i].userName,
                    gender: UserArrayList[i].gender,
                    department: UserArrayList[i].department,
                    mobileNumber: UserArrayList[i].mobileNumber,
                    mailID: UserArrayList[i].mailID,
                    walletBalance: CurrentUserbalance
                };
                updateUserDetails(CurrentUserId, updateUser);
                afterTopup.innerHTML = CurrentUserbalance.toString();
                inpuTtopup.value = " ";
            }
        }
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
    let borrowBook = document.getElementById('borrowBook');
    borrowBook.style.display = "none";
    let borrowedhistory = document.getElementById('borrowedhistory');
    borrowedhistory.style.display = "none";
    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory');
    returnBorrowedhistory.style.display = "none";
    let walletRecharge = document.getElementById('walletRecharge');
    walletRecharge.style.display = "none";
    let afterdivelement = document.getElementById("afterTopupDiv");
    afterdivelement.style.display = "none";
    let afterCount = document.getElementById("bookCountDiv");
    afterCount.style.display = "none";
}
//return book
function ReturnBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const borrowBookList = yield fetchBorrowDetails();
        const tableBody = document.querySelector("#returnBorrowDisplay tbody");
        tableBody.innerHTML = "";
        borrowBookList.forEach((item) => {
            if (item.userID == CurrentUserId && item.status == "Borrowed") {
                let date = item.borrowedDate.toString().substring(0, 10);
                const row = document.createElement("tr");
                row.innerHTML = `
            <td>${item.bookID}</td>
            <td>${item.userID}</td>
            <td>${date}</td>
            <td>${item.borrowBookCount}</td>
            <td>${item.status}</td>
            <td>${item.paidFineAmount}</td>
            <td>
            <button onclick="BookReturn('${item.borrowID}')"  >Return</button>          
            </td> 
        `;
                tableBody.appendChild(row);
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
        let borrowBook = document.getElementById('borrowBook');
        borrowBook.style.display = "none";
        let borrowedhistory = document.getElementById('borrowedhistory');
        borrowedhistory.style.display = "none";
        let returnBorrowedhistory = document.getElementById('returnBorrowedhistory');
        returnBorrowedhistory.style.display = "block";
        let walletRecharge = document.getElementById('walletRecharge');
        walletRecharge.style.display = "none";
        let afterdivelement = document.getElementById("afterTopupDiv");
        afterdivelement.style.display = "none";
        let afterCount = document.getElementById("bookCountDiv");
        afterCount.style.display = "none";
    });
}
//BookReturn
let borrowDate;
function BookReturn(returnborrowId) {
    return __awaiter(this, void 0, void 0, function* () {
        let borrowList = yield fetchBorrowDetails();
        let bookList = yield fetchBookDetails();
        let userList = yield fetchUserDetails();
        let currentDate = new Date();
        borrowList.forEach((item) => {
            if (item.borrowID == returnborrowId) {
                borrowDate = item.borrowedDate.toString().substring(0, 10);
            }
        });
        let DateDiffTime = currentDate.getTime() - new Date(borrowDate).getTime();
        let DateDiffDay = Math.round(DateDiffTime / (1000 * 3600 * 24));
        borrowList.forEach((item) => {
            if (item.borrowID == returnborrowId) {
                if (DateDiffDay <= 15) {
                    const statusUpdateBorrow = {
                        borrowID: returnborrowId,
                        bookID: item.bookID,
                        userID: item.userID,
                        borrowedDate: item.borrowedDate,
                        borrowBookCount: item.borrowBookCount,
                        status: "Returned",
                        paidFineAmount: 0
                    };
                    updateBorrowDetails(returnborrowId, statusUpdateBorrow);
                    bookList.forEach((book) => {
                        if (item.bookID == book.bookID) {
                            let newBookCount = item.borrowBookCount + book.bookCount;
                            const countUpdateBook = {
                                bookID: book.bookID,
                                bookName: book.bookName,
                                authorName: book.authorName,
                                bookCount: newBookCount
                            };
                            updateBookDetails(book.bookID, countUpdateBook);
                        }
                    });
                    alert("Book returned successfully....");
                }
                else {
                    let fineAmount = (DateDiffDay - 15) * 1;
                    userList.forEach((userDetail) => {
                        if (userDetail.userID == CurrentUserId) {
                            CurrentUserbalance = userDetail.walletBalance;
                            if (CurrentUserbalance < fineAmount) {
                                alert("You have Insufficient Wallet Balance. Please Recharge and proceed...........");
                            }
                            else {
                                CurrentUserbalance = userDetail.walletBalance - fineAmount;
                                const balanceUpdateUser = {
                                    userID: CurrentUserId,
                                    userName: userDetail.userName,
                                    gender: userDetail.gender,
                                    department: userDetail.department,
                                    mobileNumber: userDetail.mobileNumber,
                                    mailID: userDetail.mailID,
                                    walletBalance: CurrentUserbalance
                                };
                                updateUserDetails(CurrentUserId, balanceUpdateUser);
                                const statusUpdateBorrow = {
                                    borrowID: returnborrowId,
                                    bookID: item.bookID,
                                    userID: item.userID,
                                    borrowedDate: item.borrowedDate,
                                    borrowBookCount: item.borrowBookCount,
                                    status: "Returned",
                                    paidFineAmount: fineAmount
                                };
                                updateBorrowDetails(returnborrowId, statusUpdateBorrow);
                                bookList.forEach((book) => {
                                    if (item.bookID == book.bookID) {
                                        let newBookCount = item.borrowBookCount + book.bookCount;
                                        const countUpdateBook = {
                                            bookID: book.bookID,
                                            bookName: book.bookName,
                                            authorName: book.authorName,
                                            bookCount: newBookCount
                                        };
                                        updateBookDetails(book.bookID, countUpdateBook);
                                    }
                                });
                                alert("Book returned successfully....");
                            }
                        }
                    });
                }
            }
        });
        ReturnBooks();
    });
}
//Borrowbook
function Borrowbook() {
    return __awaiter(this, void 0, void 0, function* () {
        const BookList = yield fetchBookDetails();
        const tableBody = document.querySelector("#bookDisplay tbody");
        tableBody.innerHTML = "";
        BookList.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${item.bookName}</td>
            <td>${item.authorName}</td>
            <td>${item.bookCount}</td>
            <td>
            <button onclick="BuyBook('${item.bookID}')" >Buy</button>          
            </td> 
        `;
            tableBody.appendChild(row);
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
            let borrowBook = document.getElementById('borrowBook');
            borrowBook.style.display = "block";
            let borrowedhistory = document.getElementById('borrowedhistory');
            borrowedhistory.style.display = "none";
            let returnBorrowedhistory = document.getElementById('returnBorrowedhistory');
            returnBorrowedhistory.style.display = "none";
            let walletRecharge = document.getElementById('walletRecharge');
            walletRecharge.style.display = "none";
            let afterdivelement = document.getElementById("afterTopupDiv");
            afterdivelement.style.display = "none";
            let afterCount = document.getElementById("bookCountDiv");
            afterCount.style.display = "none";
        });
    });
}
//BuyBook
let selectedBookId;
function BuyBook(buyBookId) {
    let borrowBook = document.getElementById('borrowBook');
    borrowBook.style.display = "none";
    let afterCount = document.getElementById("bookCountDiv");
    afterCount.style.display = "block";
    selectedBookId = buyBookId;
}
//BuyBookWithCount
let userBorrowBokkCount = 0;
function BuyBookWithCount() {
    return __awaiter(this, void 0, void 0, function* () {
        let BookList = yield fetchBookDetails();
        let BorrowList = yield fetchBorrowDetails();
        let bookCount = document.getElementById('bookCount').value;
        if (parseInt(bookCount) <= 3) {
            BookList.forEach((item) => {
                if (item.bookID == selectedBookId) {
                    if (item.bookCount >= parseInt(bookCount)) {
                        BorrowList.forEach((borrow) => {
                            if (borrow.userID == CurrentUserId && borrow.status == "Borrowed") {
                                userBorrowBokkCount += borrow.borrowBookCount;
                            }
                        });
                        if (userBorrowBokkCount > 3) {
                            alert("You can have maximum of 3 borrowed books. Your already borrowed books count is " + userBorrowBokkCount + " and requested count is " + parseInt(bookCount) + ", which exceeds 3..... ");
                        }
                        else {
                            const newBorrowBook = {
                                borrowID: undefined,
                                bookID: item.bookID,
                                userID: CurrentUserId,
                                borrowedDate: new Date(),
                                borrowBookCount: parseInt(bookCount),
                                status: "Borrowed",
                                paidFineAmount: 0
                            };
                            addBorrowDetails(newBorrowBook);
                            let finalbookCount = item.bookCount - parseInt(bookCount);
                            const updateBookCount = {
                                bookID: selectedBookId,
                                bookName: item.bookName,
                                authorName: item.authorName,
                                bookCount: finalbookCount
                            };
                            updateBookDetails(selectedBookId, updateBookCount);
                            alert("Book Borrowed successfully...........");
                        }
                    }
                    else {
                        alert("Books are not available for the selected count....");
                    }
                }
            });
        }
        else {
            alert("You have borrowed maximum 3 books.....");
        }
        let afterCount = document.getElementById("bookCountDiv");
        afterCount.style.display = "none";
        let borrowBook = document.getElementById('borrowBook');
        borrowBook.style.display = "block";
    });
}
//ExportData
function ExportData() {
    return __awaiter(this, void 0, void 0, function* () {
        const a = document.querySelector('a');
        let data = "BookID,UserID,Borrowed Date,Borrow Book Count,Status,Paid Fine Amount";
        const borrow = yield fetchBorrowDetails();
        borrow.forEach((item) => {
            data = data + `\n` + `${item.bookID},${item.userID},${item.borrowedDate.toString().substring(0, 10)},${item.borrowBookCount},${item.status},${item.paidFineAmount}\n`;
        });
        const blob = new Blob([data], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = 'borrowDetails.csv';
    });
}
