
let CurrentUserId: any;
let CurrentUserbalance: number;

let NewUserEmailStatus = false;


//user class
interface UserDetails {

    userID: any;
    userName: string;
    gender: string;
    department: string;
    mobileNumber: string;
    mailID: string;
    walletBalance: number;
}
//BorrowDetails class
interface BorrowDetails {
    borrowID: any;
    bookID: number;
    userID: number;
    borrowedDate: Date;
    borrowBookCount: number;
    status: string;
    paidFineAmount: number;
    imageData:string[];

}

//BookDetails class
interface BookDetails {
    bookID: any;
    bookName: string;
    authorName: string;
    bookCount: number;

}

//************************************DATABASE CODE********************************************** */

//add user
async function addUserDetails(user: UserDetails): Promise<void> {
    const response = await fetch('http://localhost:5282/api/UserDetails', {
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

//add BorrowDetails
async function addBorrowDetails(borrowDetails: BorrowDetails): Promise<void> {
    const response = await fetch('http://localhost:5282/api/BorrowDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(borrowDetails)
    });
    if (!response.ok) {
        throw new Error('Fail to add BorrowDetails')
    }
}

//add addBookDetails
async function addBookDetails(bookDetails: BookDetails): Promise<void> {
    const response = await fetch('http://localhost:5282/api/BookDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookDetails)
    });
    if (!response.ok) {
        throw new Error('Fail to add BookDetails')
    }
}

//update user
async function updateUserDetails(id: any, user: UserDetails): Promise<void> {
    const response = await fetch(`http://localhost:5282/api/UserDetails/${id}`, {
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

//update BorrowDetails
async function updateBorrowDetails(id: any, borrowDetails: BorrowDetails): Promise<void> {
    const response = await fetch(`http://localhost:5282/api/BorrowDetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(borrowDetails)
    });
    if (!response.ok) {
        throw new Error('Failed to update borrowDetails');
    }

}

//update BookDetails
async function updateBookDetails(id: any, bookDetails: BookDetails): Promise<void> {
    const response = await fetch(`http://localhost:5282/api/BookDetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookDetails)
    });
    if (!response.ok) {
        throw new Error('Failed to update bookDetails');
    }

}

//delete user
async function deleteUserDetails(id: any): Promise<void> {
    const response = await fetch(`http://localhost:5282/api/UserDetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete user');
    }

}

//delete BorrowDetails
async function deleteBorrowDetails(id: any): Promise<void> {
    const response = await fetch(`http://localhost:5282/api/BorrowDetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete BorrowDetails');
    }

}

//delete BookDetails
async function deleteBookDetails(id: any): Promise<void> {
    const response = await fetch(`http://localhost:5282/api/BookDetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete BookDetails');
    }

}

//fetch user
async function fetchUserDetails(): Promise<UserDetails[]> {
    const apiUrl = 'http://localhost:5282/api/UserDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return await response.json();
}



//fetch BorrowDetails
async function fetchBorrowDetails(): Promise<BorrowDetails[]> {
    const apiUrl = 'http://localhost:5282/api/BorrowDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch BorrowDetails');
    }
    return await response.json();
}

//fetch BookDetails
async function fetchBookDetails(): Promise<BookDetails[]> {
    const apiUrl = 'http://localhost:5282/api/BookDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch BookDetails');
    }
    return await response.json();
}

//*********************************************LOGIC CODE***************************************************** */

//signup page
function signUp() {

    if (NewUserEmailStatus == true) {
        let newUserName = (document.getElementById('userName') as HTMLInputElement).value;
        let newUsergender = (document.getElementById('gender') as HTMLInputElement).value;
        let newUserdepartment = (document.getElementById('department') as HTMLInputElement).value;
        let newUserphone = (document.getElementById('phone') as HTMLInputElement).value;
        let newUseremail = (document.getElementById('email') as HTMLInputElement).value;
        let newUserwalletBalance = (document.getElementById('walletBalance') as HTMLInputElement).value;
        const newUser: UserDetails = {
            userID: undefined,
            userName: newUserName,
            gender: newUsergender,
            department: newUserdepartment,
            mobileNumber: newUserphone,
            mailID: newUseremail,
            walletBalance: parseInt(newUserwalletBalance)
        }
        addUserDetails(newUser);
        displayHomePage();
    }
    else {
        alert("Please fill out the form fully.")
    }
}

//email validation
function checkEmail(paraEmail: string) {
    let newuserEmail = (document.getElementById(paraEmail) as HTMLInputElement).value;
    let newuserEmailMessage = document.getElementById(paraEmail + "Message") as HTMLLabelElement;
    var regxemail = /^([a-z 0-9]+)@([a-z]+)\.([a-z]{2,20})$/;

    if (regxemail.test(newuserEmail) == true) {
        NewUserEmailStatus = true;
        newuserEmailMessage.style.visibility = "hidden";
    } else {
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
    let homePage = document.getElementById('homePage') as HTMLDivElement;
    homePage.style.display = "block";

    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let menupage = document.getElementById('menupage') as HTMLDivElement;
    menupage.style.display = "none";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";

    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    borrowBook.style.display = "none";

    let borrowedhistory = document.getElementById('borrowedhistory') as HTMLDivElement;
    borrowedhistory.style.display = "none";

    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory') as HTMLDivElement;
    returnBorrowedhistory.style.display = "none";

    let walletRecharge = document.getElementById('walletRecharge') as HTMLDivElement;
    walletRecharge.style.display = "none";

    let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
    afterCount.style.display = "none";
}

function newUserPage() {

    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "block";

    let homePage = document.getElementById('homePage') as HTMLDivElement;
    homePage.style.display = "block";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let menupage = document.getElementById('menupage') as HTMLDivElement;
    menupage.style.display = "none";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";

    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    borrowBook.style.display = "none";

    let borrowedhistory = document.getElementById('borrowedhistory') as HTMLDivElement;
    borrowedhistory.style.display = "none";

    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory') as HTMLDivElement;
    returnBorrowedhistory.style.display = "none";

    let walletRecharge = document.getElementById('walletRecharge') as HTMLDivElement;
    walletRecharge.style.display = "none";

    let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
    afterCount.style.display = "none";
}

//existing page
async function existingUserPage() {
    let UserArrayList = await fetchUserDetails();
    let homePage = document.getElementById('homePage') as HTMLDivElement;
    homePage.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "block";

    let availableUser = document.getElementById('availableUser') as HTMLLabelElement;

    availableUser.innerHTML = "<h2>Available User</h2>";


    for (let i = 0; i < UserArrayList.length; i++) {

        availableUser.innerHTML += `User Name : ${UserArrayList[i].userName} | User Email : ${UserArrayList[i].mailID}<br>`;
    }
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "none";

    let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
    afterCount.style.display = "none";

}

//sign in page
async function signIn() {
    let UserArrayList = await fetchUserDetails();
    let noExistingUserIdChecker: boolean = false;
    let existingUserEmail = (document.getElementById('existingUserEmail') as HTMLInputElement).value;


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


}

//menupage
function menupage() {
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "none";

    let homePage = document.getElementById('homePage') as HTMLDivElement;
    homePage.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let menupage = document.getElementById('menupage') as HTMLDivElement;
    menupage.style.display = "block";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "block";

    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    borrowBook.style.display = "none";

    let borrowedhistory = document.getElementById('borrowedhistory') as HTMLDivElement;
    borrowedhistory.style.display = "none";

    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory') as HTMLDivElement;
    returnBorrowedhistory.style.display = "none";

    let walletRecharge = document.getElementById('walletRecharge') as HTMLDivElement;
    walletRecharge.style.display = "none";

    let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
    afterCount.style.display = "none";
}

//ShowBorrowedhistory
async function ShowBorrowedhistory() {
    const borrowedhistoryList = await fetchBorrowDetails();
    const historyDisplaytable = document.querySelector("#borrowDisplay tbody") as HTMLTableSectionElement;
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

    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "none";

    let homePage = document.getElementById('homePage') as HTMLDivElement;
    homePage.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let menupage = document.getElementById('menupage') as HTMLDivElement;
    menupage.style.display = "block";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";

    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    borrowBook.style.display = "none";

    let borrowedhistory = document.getElementById('borrowedhistory') as HTMLDivElement;
    borrowedhistory.style.display = "block";

    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory') as HTMLDivElement;
    returnBorrowedhistory.style.display = "none";

    let walletRecharge = document.getElementById('walletRecharge') as HTMLDivElement;
    walletRecharge.style.display = "none";

    let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
    afterCount.style.display = "none";
}

//recharge
async function WalletRecharge() {
    const UserArrayList = await fetchUserDetails();
    let currentAmount = document.getElementById("currentAmount") as HTMLElement;
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].userID == CurrentUserId) {
            currentAmount.innerHTML = UserArrayList[i].walletBalance.toString();
        }
    }

    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "none";

    let homePage = document.getElementById('homePage') as HTMLDivElement;
    homePage.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let menupage = document.getElementById('menupage') as HTMLDivElement;
    menupage.style.display = "block";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";

    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    borrowBook.style.display = "none";

    let borrowedhistory = document.getElementById('borrowedhistory') as HTMLDivElement;
    borrowedhistory.style.display = "none";

    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory') as HTMLDivElement;
    returnBorrowedhistory.style.display = "none";

    let walletRecharge = document.getElementById('walletRecharge') as HTMLDivElement;
    walletRecharge.style.display = "block";

    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    afterdivelement.style.display = "none";

    let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
    afterCount.style.display = "none";
}

async function TopUp() {
    const UserArrayList = await fetchUserDetails();
    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    let inpuTtopup = document.getElementById("inpuTtopup") as HTMLInputElement;
    let afterTopup = document.getElementById("afterTopup") as HTMLSpanElement;
    afterdivelement.style.display = "block";

    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].userID == CurrentUserId) {
            CurrentUserbalance = UserArrayList[i].walletBalance + parseInt(inpuTtopup.value);
            const updateUser: UserDetails = {
                userID: CurrentUserId,
                userName: UserArrayList[i].userName,
                gender: UserArrayList[i].gender,
                department: UserArrayList[i].department,
                mobileNumber: UserArrayList[i].mobileNumber,
                mailID: UserArrayList[i].mailID,
                walletBalance: CurrentUserbalance
            }
            updateUserDetails(CurrentUserId, updateUser);
            afterTopup.innerHTML = CurrentUserbalance.toString();

            inpuTtopup.value = " ";
        }
    }
}

//Exit
function Exit() {
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "none";

    let homePage = document.getElementById('homePage') as HTMLDivElement;
    homePage.style.display = "block";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let menupage = document.getElementById('menupage') as HTMLDivElement;
    menupage.style.display = "none";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";

    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    borrowBook.style.display = "none";

    let borrowedhistory = document.getElementById('borrowedhistory') as HTMLDivElement;
    borrowedhistory.style.display = "none";

    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory') as HTMLDivElement;
    returnBorrowedhistory.style.display = "none";

    let walletRecharge = document.getElementById('walletRecharge') as HTMLDivElement;
    walletRecharge.style.display = "none";

    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    afterdivelement.style.display = "none";

    let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
    afterCount.style.display = "none";
}

//return book
async function ReturnBooks() {
    const borrowBookList = await fetchBorrowDetails();
    const tableBody = document.querySelector("#returnBorrowDisplay tbody") as HTMLTableSectionElement;
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


    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "none";

    let homePage = document.getElementById('homePage') as HTMLDivElement;
    homePage.style.display = "none";

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let menupage = document.getElementById('menupage') as HTMLDivElement;
    menupage.style.display = "block";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";

    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    borrowBook.style.display = "none";

    let borrowedhistory = document.getElementById('borrowedhistory') as HTMLDivElement;
    borrowedhistory.style.display = "none";

    let returnBorrowedhistory = document.getElementById('returnBorrowedhistory') as HTMLDivElement;
    returnBorrowedhistory.style.display = "block";

    let walletRecharge = document.getElementById('walletRecharge') as HTMLDivElement;
    walletRecharge.style.display = "none";

    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    afterdivelement.style.display = "none";

    let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
    afterCount.style.display = "none";


}
//BookReturn
let borrowDate: string;

async function BookReturn(returnborrowId: number) {
    let borrowList = await fetchBorrowDetails();
    let bookList = await fetchBookDetails();
    let userList = await fetchUserDetails();
    let currentDate = new Date();
    borrowList.forEach((item) => {
        if (item.borrowID == returnborrowId) {
            borrowDate = item.borrowedDate.toString().substring(0, 10);
        }
    })
    let DateDiffTime = currentDate.getTime() - new Date(borrowDate).getTime();
    let DateDiffDay = Math.round(DateDiffTime / (1000 * 3600 * 24));

    borrowList.forEach((item) => {
        if (item.borrowID == returnborrowId) {
            if (DateDiffDay <= 15) {
                const statusUpdateBorrow: BorrowDetails = {
                    borrowID: returnborrowId,
                    bookID: item.bookID,
                    userID: item.userID,
                    borrowedDate: item.borrowedDate,
                    borrowBookCount: item.borrowBookCount,
                    status: "Returned",
                    paidFineAmount: 0
                }
                updateBorrowDetails(returnborrowId, statusUpdateBorrow);
                bookList.forEach((book) => {
                    if (item.bookID == book.bookID) {
                        let newBookCount = item.borrowBookCount + book.bookCount;
                        const countUpdateBook: BookDetails = {
                            bookID: book.bookID,
                            bookName: book.bookName,
                            authorName: book.authorName,
                            bookCount: newBookCount
                        }
                        updateBookDetails(book.bookID, countUpdateBook);
                    }
                })
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
                            const balanceUpdateUser: UserDetails = {
                                userID: CurrentUserId,
                                userName: userDetail.userName,
                                gender: userDetail.gender,
                                department: userDetail.department,
                                mobileNumber: userDetail.mobileNumber,
                                mailID: userDetail.mailID,
                                walletBalance: CurrentUserbalance
                            }
                            updateUserDetails(CurrentUserId, balanceUpdateUser);

                            const statusUpdateBorrow: BorrowDetails = {
                                borrowID: returnborrowId,
                                bookID: item.bookID,
                                userID: item.userID,
                                borrowedDate: item.borrowedDate,
                                borrowBookCount: item.borrowBookCount,
                                status: "Returned",
                                paidFineAmount: fineAmount
                            }
                            updateBorrowDetails(returnborrowId, statusUpdateBorrow);
                            bookList.forEach((book) => {
                                if (item.bookID == book.bookID) {
                                    let newBookCount = item.borrowBookCount + book.bookCount;
                                    const countUpdateBook: BookDetails = {
                                        bookID: book.bookID,
                                        bookName: book.bookName,
                                        authorName: book.authorName,
                                        bookCount: newBookCount
                                    }
                                    updateBookDetails(book.bookID, countUpdateBook);
                                }
                            })
                            alert("Book returned successfully....");
                        }
                    }
                })

            }
        }
    })
    ReturnBooks();

}

//Borrowbook
async function Borrowbook() {
    const BookList = await fetchBookDetails();
    const tableBody = document.querySelector("#bookDisplay tbody") as HTMLTableSectionElement;
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
            <td>
                <form action="#" method="post" enctype="multipart/form-data">
                    <input type="file" id="imageUpload" name="imageUpload" accept="image/*" onchange="displayImage(this)">
                    <br>
                    <img id="uploadedImage" src="#" alt="Uploaded Image" style="display:none; max-width: 300px;">
                    
                </form>
            </td>
        `;
        tableBody.appendChild(row);


        let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
        newUserPage.style.display = "none";

        let homePage = document.getElementById('homePage') as HTMLDivElement;
        homePage.style.display = "none";

        let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
        existingUserPage.style.display = "none";

        let menupage = document.getElementById('menupage') as HTMLDivElement;
        menupage.style.display = "block";

        let greet = document.getElementById('greet') as HTMLElement;
        greet.style.display = "none";

        let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
        borrowBook.style.display = "block";

        let borrowedhistory = document.getElementById('borrowedhistory') as HTMLDivElement;
        borrowedhistory.style.display = "none";

        let returnBorrowedhistory = document.getElementById('returnBorrowedhistory') as HTMLDivElement;
        returnBorrowedhistory.style.display = "none";

        let walletRecharge = document.getElementById('walletRecharge') as HTMLDivElement;
        walletRecharge.style.display = "none";

        let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
        afterdivelement.style.display = "none";

        let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
        afterCount.style.display = "none";



    });
}

function displayImage(input: HTMLInputElement) {
    const reader = new FileReader();
    reader.onload = function(e) {
        if(e.target){
            const imgElement = document.getElementById('uploadedImage') as HTMLImageElement;
            imgElement.src = e.target.result as string;
            imgElement.style.display = 'block';
        }
        
    };
    reader.readAsDataURL(input.files![0]);
}
//BuyBook
let selectedBookId: number;
function BuyBook(buyBookId: number) {
    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    borrowBook.style.display = "none";

    let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
    afterCount.style.display = "block";

    selectedBookId = buyBookId;

}

//BuyBookWithCount
let userBorrowBokkCount: number = 0;
async function BuyBookWithCount() {
    let BookList = await fetchBookDetails();
    let BorrowList = await fetchBorrowDetails();
    let bookCount = (document.getElementById('bookCount') as HTMLInputElement).value;

    if (parseInt(bookCount) <= 3) {
        BookList.forEach((item) => {
            if (item.bookID == selectedBookId) {
                if (item.bookCount >= parseInt(bookCount)) {
                    BorrowList.forEach((borrow) => {
                        if (borrow.userID == CurrentUserId && borrow.status == "Borrowed") {
                            userBorrowBokkCount += borrow.borrowBookCount;
                        }
                    })

                    if (userBorrowBokkCount > 3) {
                        alert("You can have maximum of 3 borrowed books. Your already borrowed books count is " + userBorrowBokkCount + " and requested count is " + parseInt(bookCount) + ", which exceeds 3..... ");
                    } else {
                        const newBorrowBook: BorrowDetails = {
                            borrowID: undefined,
                            bookID: item.bookID,
                            userID: CurrentUserId,
                            borrowedDate: new Date(),
                            borrowBookCount: parseInt(bookCount),
                            status: "Borrowed",
                            paidFineAmount: 0
                        }
                        addBorrowDetails(newBorrowBook);
                        let finalbookCount = item.bookCount - parseInt(bookCount);
                        const updateBookCount: BookDetails = {
                            bookID: selectedBookId,
                            bookName: item.bookName,
                            authorName: item.authorName,
                            bookCount: finalbookCount
                        }
                        updateBookDetails(selectedBookId, updateBookCount);

                        alert("Book Borrowed successfully...........");
                    }
                } else {
                    alert("Books are not available for the selected count....");
                }
            }
        })
    } else {
        alert("You have borrowed maximum 3 books.....");
    }

    let afterCount = document.getElementById("bookCountDiv") as HTMLDivElement;
    afterCount.style.display = "none";

    let borrowBook = document.getElementById('borrowBook') as HTMLDivElement;
    borrowBook.style.display = "block";
}

//ExportData
async function ExportData() {
    const a = document.querySelector('a') as HTMLAnchorElement;
    let data: string = "BookID,UserID,Borrowed Date,Borrow Book Count,Status,Paid Fine Amount";
    const borrow = await fetchBorrowDetails();
    borrow.forEach((item) => {
        if (CurrentUserId == item.userID) {
            data = data + `\n` + `${item.bookID},${item.userID},${item.borrowedDate.toString().substring(0, 10)},${item.borrowBookCount},${item.status},${item.paidFineAmount}\n`;
        }

    })
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = 'borrowDetails.csv';
}
