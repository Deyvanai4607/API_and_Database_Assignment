
let CurrentUserId: any;
let CurrentUserbalance: number;

let NewUserNameStatus = false;
let NewUserBalanceStatus = false;
let NewUserPhoneNumberStatus = false;


//user class
interface UserDetails {

    userID: any;
    cardNumber: number;
    userName: string;
    userPhoneNumber: number;
    balance: number;
}
//travel class
interface TravelDetails {
    travelID: any;
    cardNumber: number;
    fromLocation: string;
    toLocation: string;
    travelDate: Date;
    travelCost: number;
}

//ticket class
interface TicketDetails {
    ticketID: any;
    fromLocation: string;
    toLocation: string;
    fair: number;
}

//************************************DATABASE CODE********************************************** */

//add user
async function addUserDetails(user: UserDetails): Promise<void> {
    const response = await fetch('http://localhost:5259/api/User', {
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

//add travel
async function addTravelDetails(travelDetails: TravelDetails): Promise<void> {
    const response = await fetch('http://localhost:5259/api/TravelDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(travelDetails)
    });
    if (!response.ok) {
        throw new Error('Fail to add user')
    }
}

//add Ticket
async function addTicketDetails(ticketDetails: TicketDetails): Promise<void> {
    const response = await fetch('http://localhost:5259/api/TicketDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticketDetails)
    });
    if (!response.ok) {
        throw new Error('Fail to add user')
    }
}

//update user
async function updateUserDetails(id: any, user: UserDetails): Promise<void> {
    const response = await fetch(`http://localhost:5259/api/User/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }

}

//update ticket
async function updateTicketDetails(id: any, ticketDetails: TicketDetails): Promise<void> {
    const response = await fetch(`http://localhost:5259/api/TicketDetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticketDetails)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }

}

//update travel
async function updateTravelDetails(id: any, travelDetails: TravelDetails): Promise<void> {
    const response = await fetch(`http://localhost:5259/api/TravelDetails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(travelDetails)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }

}

//delete user
async function deleteUserDetails(id: any): Promise<void> {
    const response = await fetch(`http://localhost:5259/api/User/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete user');
    }

}

//delete travel
async function deleteTravelDetails(id: any): Promise<void> {
    const response = await fetch(`http://localhost:5259/api/TravelDetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete user');
    }

}

//delete ticket
async function deleteTicketDetails(id: any): Promise<void> {
    const response = await fetch(`http://localhost:5259/api/TicketDetails/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete user');
    }

}

//fetch user
async function fetchUserDetails(): Promise<UserDetails[]> {
    const apiUrl = 'http://localhost:5259/api/User';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return await response.json();
}



//fetch travel
async function fetchTravelDetails(): Promise<TravelDetails[]> {
    const apiUrl = 'http://localhost:5259/api/TravelDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch travel');
    }
    return await response.json();
}

//fetch ticket
async function fetchTicketDetails(): Promise<TicketDetails[]> {
    const apiUrl = 'http://localhost:5259/api/TicketDetails';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch ticket');
    }
    return await response.json();
}

//*********************************************LOGIC CODE***************************************************** */

//signup page
function signUp() {

    if (NewUserNameStatus == true &&
        NewUserBalanceStatus == true &&
        NewUserPhoneNumberStatus == true) {
        let newUserName = (document.getElementById('username') as HTMLInputElement).value;
        let newUserPhoneNumber = (document.getElementById('phone') as HTMLInputElement).value;
        let newUserBalance = (document.getElementById('balance') as HTMLInputElement).value;
        let newUserCardNumber = (document.getElementById('cardnumber') as HTMLInputElement).value;
        const newUser: UserDetails = {
            userID: undefined,
            userName: newUserName,
            userPhoneNumber: parseInt(newUserPhoneNumber),
            balance: parseInt(newUserBalance),
            cardNumber: parseInt(newUserCardNumber)
        }
        addUserDetails(newUser);
        displayHomePage();
    }
    else {
        alert("Please fill out the form fully.")
    }
}

//username validate
function checkUserName(paraName: string) {
    let newUserName = (document.getElementById(paraName) as HTMLInputElement).value;
    let newUserNameMessage = document.getElementById(paraName + "Message") as HTMLLabelElement;
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
function checkBalace(paraBalance: string) {
    let newUserBalance = (document.getElementById(paraBalance) as HTMLInputElement).value;
    let newUserBalanceMessage = document.getElementById(paraBalance + "Message") as HTMLLabelElement;
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
function checkPhone(paramNewUserPhoneNumber: string) {
    let newUserPhoneNumber = (document.getElementById(paramNewUserPhoneNumber) as HTMLInputElement).value;
    let newUserPhoneNumberMessage = document.getElementById(paramNewUserPhoneNumber + "Message") as HTMLLabelElement;
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

    let ShowBalance = document.getElementById('ShowBalance') as HTMLDivElement;
    ShowBalance.style.display = "none";

    let topupDiv = document.getElementById('topupDiv') as HTMLDivElement;
    topupDiv.style.display = "none";

    let travelHistory = document.getElementById('travelHistory') as HTMLDivElement;
    travelHistory.style.display = "none";

    let travel = document.getElementById('travel') as HTMLDivElement;
    travel.style.display = "none";
}

//new user page
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

    let ShowBalance = document.getElementById('ShowBalance') as HTMLDivElement;
    ShowBalance.style.display = "none";

    let topupDiv = document.getElementById('topupDiv') as HTMLDivElement;
    topupDiv.style.display = "none";

    let travelHistory = document.getElementById('travelHistory') as HTMLDivElement;
    travelHistory.style.display = "none";

    let travel = document.getElementById('travel') as HTMLDivElement;
    travel.style.display = "none";
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

        availableUser.innerHTML += `User Name : ${UserArrayList[i].userName} | User Id : ${UserArrayList[i].userID}<br>`;
    }
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "none";

}

//sign in page
async function signIn() {
    let UserArrayList = await fetchUserDetails();
    let noExistingUserIdChecker: boolean = false;
    let existingUserId = (document.getElementById('existingUserId') as HTMLInputElement).value;


    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].userID == existingUserId) {

            CurrentUserId = UserArrayList[i].userID;
            CurrentUserbalance=UserArrayList[i].balance;
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

    let ShowBalance = document.getElementById('ShowBalance') as HTMLDivElement;
    ShowBalance.style.display = "none";

    let topupDiv = document.getElementById('topupDiv') as HTMLDivElement;
    topupDiv.style.display = "none";

    let travelHistory = document.getElementById('travelHistory') as HTMLDivElement;
    travelHistory.style.display = "none";

    let travel = document.getElementById('travel') as HTMLDivElement;
    travel.style.display = "none";
}

//show balance
async function BalanceCheck() {
    let showBalance = document.getElementById("ShowBalance") as HTMLDivElement;
    let cbalance = document.getElementById("cbalance") as HTMLSpanElement;
    showBalance.style.display = "block";
    const UserArrayList = await fetchUserDetails();

    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].userID == CurrentUserId) {

            cbalance.innerHTML = UserArrayList[i].balance.toString();
            //CurrentUserbalance = UserArrayList[i].balance;
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

    let ShowBalance = document.getElementById('ShowBalance') as HTMLDivElement;
    ShowBalance.style.display = "block";

    let topupDiv = document.getElementById('topupDiv') as HTMLDivElement;
    topupDiv.style.display = "none";

    let travelHistory = document.getElementById('travelHistory') as HTMLDivElement;
    travelHistory.style.display = "none";

    let travel = document.getElementById('travel') as HTMLDivElement;
    travel.style.display = "none";
}

//recharge
async function Recharge() {
    const UserArrayList = await fetchUserDetails();
    // let divelement = document.getElementById("topupDiv") as HTMLDivElement;
    // divelement.style.display = "block";
    let currentAmount = document.getElementById("currentAmount") as HTMLElement;
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].userID == CurrentUserId) {
            currentAmount.innerHTML = UserArrayList[i].balance.toString();
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

    let ShowBalance = document.getElementById('ShowBalance') as HTMLDivElement;
    ShowBalance.style.display = "none";

    let topupDiv = document.getElementById('topupDiv') as HTMLDivElement;
    topupDiv.style.display = "block";

    let travelHistory = document.getElementById('travelHistory') as HTMLDivElement;
    travelHistory.style.display = "none";

    let travel = document.getElementById('travel') as HTMLDivElement;
    travel.style.display = "none";

    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    afterdivelement.style.display = "none";
}

async function TopUp() {
    const UserArrayList = await fetchUserDetails();
    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    let inpuTtopup = document.getElementById("inpuTtopup") as HTMLInputElement;
    let afterTopup = document.getElementById("afterTopup") as HTMLSpanElement;
    afterdivelement.style.display = "block";

    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].userID == CurrentUserId) {
            // UserArrayList[i].balance += parseInt(inpuTtopup.value);
            // afterTopup.innerHTML = UserArrayList[i].balance.toString();
            CurrentUserbalance = UserArrayList[i].balance + parseInt(inpuTtopup.value);
            const updateUser: UserDetails = {
                userID: CurrentUserId,
                userName: UserArrayList[i].userName,
                userPhoneNumber: UserArrayList[i].userPhoneNumber,
                cardNumber: UserArrayList[i].cardNumber,
                balance: CurrentUserbalance
            }
            updateUserDetails(CurrentUserId, updateUser);
            afterTopup.innerHTML = CurrentUserbalance.toString();

            inpuTtopup.value = " ";
        }
    }
}

//show travel history
async function TravelHistory() {
    const travelDetails = await fetchTravelDetails();
    // let historyDisplay = document.getElementById('travelHistory') as HTMLDivElement;
    // historyDisplay.style.display = "block";

    const historyDisplaytable = document.querySelector("#historyDisplay tbody") as HTMLTableSectionElement;
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

    let ShowBalance = document.getElementById('ShowBalance') as HTMLDivElement;
    ShowBalance.style.display = "none";

    let topupDiv = document.getElementById('topupDiv') as HTMLDivElement;
    topupDiv.style.display = "none";

    let travelHistory = document.getElementById('travelHistory') as HTMLDivElement;
    travelHistory.style.display = "block";

    let travel = document.getElementById('travel') as HTMLDivElement;
    travel.style.display = "none";

    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    afterdivelement.style.display = "none";
}

//travel
async function Travel() {
    const ticketList = await fetchTicketDetails();
    const tableBody = document.querySelector("#travelDisplay tbody") as HTMLTableSectionElement;
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
        if(item.ticketID==5){
            deleteTicketDetails(5);
        }
    })

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

    let ShowBalance = document.getElementById('ShowBalance') as HTMLDivElement;
    ShowBalance.style.display = "none";

    let topupDiv = document.getElementById('topupDiv') as HTMLDivElement;
    topupDiv.style.display = "none";

    let travelHistory = document.getElementById('travelHistory') as HTMLDivElement;
    travelHistory.style.display = "none";

    let travel = document.getElementById('travel') as HTMLDivElement;
    travel.style.display = "block";

    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    afterdivelement.style.display = "none";
}

//BookTravel
async function BookTravel(bookTicketID: number) {
    let TicketList = await fetchTicketDetails();
    let userList=await fetchUserDetails();    
    let proceed: boolean = true;

    for (let i = 0; i < TicketList.length; i++) {
        if (TicketList[i].ticketID == bookTicketID) {
            if(CurrentUserbalance<TicketList[i].fair){
                alert("You have Insufficiet balance. Please Recharge......  ");
            }
            else{
                userList.forEach((item)=>{
                    if(CurrentUserId==item.userID){
                        const newTravelHistory:TravelDetails={
                            travelID:undefined,
                            travelCost:TicketList[i].fair,
                            fromLocation:TicketList[i].fromLocation,
                            toLocation:TicketList[i].toLocation,
                            travelDate: new Date(),
                            cardNumber:item.cardNumber
                        }
                        addTravelDetails(newTravelHistory);
                        CurrentUserbalance=item.balance-TicketList[i].fair;
                        const updateUserBalance:UserDetails={
                            userID:CurrentUserId,
                            userName:item.userName,
                            cardNumber:item.cardNumber,
                            userPhoneNumber:item.userPhoneNumber,
                            balance: CurrentUserbalance
                        }
                        updateUserDetails(CurrentUserId,updateUserBalance);
                    }
                })
                alert("Travel Booking Success....");
                
            }
        }
    }
    Travel();

}
//Exit
function Exit(){
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

    let ShowBalance = document.getElementById('ShowBalance') as HTMLDivElement;
    ShowBalance.style.display = "none";

    let topupDiv = document.getElementById('topupDiv') as HTMLDivElement;
    topupDiv.style.display = "none";

    let travelHistory = document.getElementById('travelHistory') as HTMLDivElement;
    travelHistory.style.display = "none";

    let travel = document.getElementById('travel') as HTMLDivElement;
    travel.style.display = "none";

    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    afterdivelement.style.display = "none";
}
