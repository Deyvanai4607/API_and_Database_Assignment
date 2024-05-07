let userIdAutoIncrement = 1000;
let medicineIDAutoIncrement = 10;
let orderIdAutoIncrement = 100;

let CurrentuserID: number;
let CurrentuserEmail: string;
let CurrentUserMdicineName: string;
let CurrentUserMdicineId: number;
let CurrentorderId: number;
let CurrentUserbalance: number;

let NewuserEmailStatus = false;
let NewUserpasswordStatus = true;
let NewuserPhoneNumberStatus = false;


//user class
interface User {

    userID: number;
    userEmail: string;
    password: string;
    cpassword: string;
    userPhoneNumber: string;
    balance: number;

    // constructor(paramuserEmail: string, paramUserpassword: string, paramUsercpassword: string, paramuserPhoneNumber: number, balance: number) {

    //     userIdAutoIncrement++;

    //     this.userId = "UI" + userIdAutoIncrement.toString();

    //     this.userEmail = paramuserEmail;
    //     this.password = paramUserpassword;
    //     this.cpassword = paramUsercpassword;
    //     this.userPhoneNumber = paramuserPhoneNumber;
    //     this.balance = balance;
    // }

}

//MedicineInfo
interface MedicineInfo {

    medicineID: number;
    medicineName: string;
    medicineCount: number;
    medicinePrice: number;
    expiryDate: Date;

    // constructor(parammedicineName: string, parammedicineCount: number, parammedicinePrice: number, paraexpiryDate: Date) {
    //     medicineIDAutoIncrement++;

    //     this.medicineID = "MD" + medicineIDAutoIncrement.toString();
    //     this.medicineName = parammedicineName;
    //     this.medicineCount = parammedicineCount;
    //     this.medicinePrice = parammedicinePrice;
    //     this.expiryDate = paraexpiryDate;
    // }

}

//Order
// enum orderStatus {
//     Cancelled = "Canceled",
//     Ordered = "Ordered"
// }
interface Order {
    orderId: number;
    medicineID: number;
    userID: number;

    medicineName: string;
    medicineCount: number;
    orderStatus: string;

    // constructor(parammedicineID: string, paramuserId: string, parammedicineName: string, parammedicineCount: number, orderStatus: orderStatus) {
    //     orderIdAutoIncrement++;

    //     this.orderId = "OI" + orderIdAutoIncrement.toString();
    //     this.medicineID = parammedicineID;
    //     this.userId = paramuserId;

    //     this.medicineName = parammedicineName;
    //     this.medicineCount = parammedicineCount;
    //     this.orderStatus = orderStatus;
    // }
}

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
        let newuserEmail = (document.getElementById('email') as HTMLInputElement).value;
        let newUserpass = (document.getElementById('pass') as HTMLInputElement).value;
        let newUserCpass = (document.getElementById('pass2') as HTMLInputElement).value;
        let newuserPhoneNumber = (document.getElementById('phone') as HTMLInputElement).value;
        const userList: User = {
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
        alert("Please fill out the form fully.")
    }
}
//add user
async function addUser(user: User): Promise<void> {
    const response = await fetch('http://localhost:5267/api/User', {
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

//add order
async function addOrder(order: Order): Promise<void> {
    const response = await fetch('http://localhost:5267/api/Order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error('Fail to add order')
    }
}

//add medicine
async function addMedicine(medicine: MedicineInfo): Promise<void> {
    const response = await fetch('http://localhost:5267/api/MedicineInfo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicine)
    });
    if (!response.ok) {
        throw new Error('Fail to add medicine')
    }
}

//update medicine
async function updateMedicine(id: number, medicine: MedicineInfo): Promise<void> {
    const response = await fetch(`http://localhost:5267/api/MedicineInfo/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicine)
    });
    if (!response.ok) {
        throw new Error('Failed to update contact');
    }

}

//update user
async function updateUser(id: number, user: User): Promise<void> {
    const response = await fetch(`http://localhost:5267/api/User${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) {
        throw new Error('Failed to update user');
    }

}



//update order
async function updateOrder(id: number, order: Order): Promise<void> {
    const response = await fetch(`http://localhost:5267/api/Order/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    if (!response.ok) {
        throw new Error('Failed to update order');
    }

}

//delete medicine
async function deleteMedicine(id: number): Promise<void> {
    const response = await fetch(`http://localhost:5267/api/MedicineInfo/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete medicine');
    }

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
async function fetchUser(): Promise<User[]> {
    const apiUrl = 'http://localhost:5267/api/User';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }
    return await response.json();
}

//fetch medicine
async function fetchMedicine(): Promise<MedicineInfo[]> {
    const apiUrl = 'http://localhost:5267/api/MedicineInfo';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch medicine');
    }
    return await response.json();
}

//fetch order
async function fetchOrder(): Promise<Order[]> {
    const apiUrl = 'http://localhost:5267/api/Order';
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch Order');
    }
    return await response.json();
}




//existing page
async function existingUserPage() {
    const UserArrayList = await fetchUser();
    let homePage = document.getElementById('homePage') as HTMLDivElement;

    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    let availableUser = document.getElementById('availableUser') as HTMLLabelElement;

    homePage.style.display = "none";

    existingUserPage.style.display = "block";

    availableUser.innerHTML = "<h2>Available User</h2>";


    for (let i = 0; i < UserArrayList.length; i++) {

        availableUser.innerHTML += `User Email : ${UserArrayList[i].userEmail} | User Id : ${UserArrayList[i].userID}<br>`;
    }
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "none";

}

//sign in page
async function signIn() {
    const UserArrayList = await fetchUser();
    let noExistinguserIdChecker: boolean = false;
    let existinguserId = (document.getElementById("existingUserId") as HTMLInputElement).value;

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


}

//medicinePage page
function medicinePage() {

    let medicinePage = document.getElementById('medicinePage') as HTMLDivElement;
    medicinePage.style.display = "block";


    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    existingUserPage.style.display = "none";

    let tableDisplay = document.getElementById('medicineDiv') as HTMLDivElement;
    tableDisplay.style.display = "none";

    let purchasetableDisplay = document.getElementById('puchaseMedicine') as HTMLTableElement;
    purchasetableDisplay.style.display = "none";

    let cancelDisplay = document.getElementById('cancelDisplay') as HTMLTableElement;
    cancelDisplay.style.display = "none";

    let historyDisplay = document.getElementById('historyDisplay') as HTMLTableElement;
    historyDisplay.style.display = "none";

    let requiredCount = document.getElementById("requiredCount") as HTMLDivElement;
    requiredCount.style.display = "none";

    let topupDiv = document.getElementById("topupDiv") as HTMLDivElement;
    topupDiv.style.display = "none";

    let Showbalance = document.getElementById("Showbalance") as HTMLDivElement;
    Showbalance.style.display = "none";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.innerHTML = "Welcome";
}
//display medicine
async function DisplayMedicine() {
    const tableBody = document.querySelector("#medicineInfo tbody") as HTMLTableSectionElement;
    const MedicineList = await fetchMedicine();
    tableBody.innerHTML = "";
    MedicineList.forEach((item) => {
        const row = document.createElement("tr");
        // let date= item.expiryDate.toLocaleString().split('T');
        // let dateArr=date[0].split("-");
        let date=item.expiryDate.toString().substring(0,10);
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
    let tableDisplay = document.getElementById('medicineInfo') as HTMLDivElement;
    tableDisplay.style.display = "block";
    let medicineDiv = document.getElementById("medicineDiv") as HTMLDivElement;
    medicineDiv.style.display = "block";

    let purchasetableDisplay = document.getElementById('puchaseMedicine') as HTMLTableElement;
    purchasetableDisplay.style.display = "none";

    let cancelDisplay = document.getElementById('cancelDisplay') as HTMLTableElement;
    cancelDisplay.style.display = "none";

    let historyDisplay = document.getElementById('historyDisplay') as HTMLTableElement;
    historyDisplay.style.display = "none";

    let requiredCount = document.getElementById("requiredCount") as HTMLDivElement;
    requiredCount.style.display = "none";

    let topupDiv = document.getElementById("topupDiv") as HTMLDivElement;
    topupDiv.style.display = "none";

    let Showbalance = document.getElementById("Showbalance") as HTMLDivElement;
    Showbalance.style.display = "none";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";

}

//Medicine Delete
function MedicineDelete(item: number) {
    deleteMedicine(item);
    //MedicineList = MedicineList.filter((items) => items.medicineID !== item);
    DisplayMedicine();
}

//edit medicine
let emedname = document.getElementById("medname") as HTMLInputElement;
let emedcount = document.getElementById("medcount") as HTMLInputElement;
let emedprice = document.getElementById("medprice") as HTMLInputElement;
let emeddate = document.getElementById("meddate") as HTMLInputElement;
let currentmedicineID: number | null;
async function MedicineEdit(edititemid: number) {
    CurrentUserMdicineId = edititemid;
    currentmedicineID = edititemid;
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = "block";
    const MedicineList = await fetchMedicine();
    
    const item = MedicineList.find((item) => item.medicineID == edititemid);
    if (item) {
        // currentmedicineID = item.medicineID;
        emedname.value = item.medicineName;
        emedcount.value = String(item.medicineCount);
        emedprice.value = String(item.medicinePrice);
        emeddate.value = String(item.expiryDate);

    }

}

//add medicine
let medname: string;
let medcount: number;
let medprice: number;
let meddate: string;
function Add() {
    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = "block";


}
function addPush() {
    //const MedicineList = await fetchMedicine();
    medname = (document.getElementById("medname") as HTMLInputElement).value;
    medcount = parseInt((document.getElementById("medcount") as HTMLInputElement).value);
    medprice = parseInt((document.getElementById("medprice") as HTMLInputElement).value);
    meddate = (document.getElementById("meddate") as HTMLInputElement).value;
    if (currentmedicineID == null) {
        const newMedicineList: MedicineInfo = {
            medicineID: 0,
            medicineName: medname,
            medicineCount: medcount,
            medicinePrice: medprice,
            expiryDate: new Date(meddate)
        };
        addMedicine(newMedicineList);
        //MedicineList.push(new MedicineInfo(medname, medcount, medprice, meddate));
        DisplayMedicine();
    } else {
        const newMedicineList: MedicineInfo = {
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

    let AddDiv = document.getElementById("AddDiv") as HTMLDivElement;
    AddDiv.style.display = "none";
}
//purchase
async function Purchase() {
    const MedicineList = await fetchMedicine();
    const tableBody = document.querySelector("#puchaseMedicine tbody") as HTMLTableSectionElement;
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


    let purchasetableDisplay = document.getElementById('puchaseMedicine') as HTMLTableElement;
    purchasetableDisplay.style.display = "block";

    let medicineDiv = document.getElementById("medicineDiv") as HTMLDivElement;
    medicineDiv.style.display = "none";

    let cancelDisplay = document.getElementById('cancelDisplay') as HTMLTableElement;
    cancelDisplay.style.display = "none";

    let historyDisplay = document.getElementById('historyDisplay') as HTMLTableElement;
    historyDisplay.style.display = "none";

    let requiredCount = document.getElementById("requiredCount") as HTMLDivElement;
    requiredCount.style.display = "none";

    let topupDiv = document.getElementById("topupDiv") as HTMLDivElement;
    topupDiv.style.display = "none";

    let Showbalance = document.getElementById("ShowBalance") as HTMLDivElement;
    Showbalance.style.display = "none";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";
}
//cancel
async function Cancel() {
    const OrderList = await fetchOrder();
    const tableBody = document.querySelector("#cancelDisplay tbody") as HTMLTableSectionElement;
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


    let cancelDisplay = document.getElementById("cancelDisplay") as HTMLTableElement;
    cancelDisplay.style.display = "block";

    let purchasetableDisplay = document.getElementById('puchaseMedicine') as HTMLTableElement;
    purchasetableDisplay.style.display = "none";

    let medicineDiv = document.getElementById("medicineDiv") as HTMLDivElement;
    medicineDiv.style.display = "none";

    let historyDisplay = document.getElementById('historyDisplay') as HTMLTableElement;
    historyDisplay.style.display = "none";

    let requiredCount = document.getElementById("requiredCount") as HTMLDivElement;
    requiredCount.style.display = "none";

    let topupDiv = document.getElementById("topupDiv") as HTMLDivElement;
    topupDiv.style.display = "none";

    let Showbalance = document.getElementById("ShowBalance") as HTMLDivElement;
    Showbalance.style.display = "none";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";
}

async function Remove(orderid: number) {
    const OrderList = await fetchOrder();
    const MedicineList = await fetchMedicine();
    // orderId: number;
    // medicineID: number;
    // userId: number;

    // medicineName: string;
    // medicineCount: number;
    // orderStatus: string;

    OrderList.forEach((orderitem) => {
        if (orderitem.orderId == orderid) {
            const newOrder: Order = {
                orderId: orderid,
                medicineID: orderitem.medicineID,
                userID: orderitem.userID,
                medicineName: orderitem.medicineName,
                medicineCount: orderitem.medicineCount,
                orderStatus: "Cancelled"
            }
            updateOrder(orderid, newOrder);

            MedicineList.forEach((items) => {
                if (items.medicineID == orderitem.medicineID) {
                    const newMedicine: MedicineInfo = {
                        medicineID: items.medicineID,
                        medicineName: items.medicineName,
                        medicinePrice: items.medicinePrice,
                        expiryDate: items.expiryDate,
                        medicineCount: items.medicineCount + orderitem.medicineCount

                    }
                    updateMedicine(items.medicineID, newMedicine);
                }
            })

        }


    })



    Cancel();
}

let selectedID: number;
//BuyMedicine
function BuyMedicine(item: number) {

    let puchaseMedicine = document.getElementById("puchaseMedicine") as HTMLTableElement;
    puchaseMedicine.style.display = "none";
    let requiredCount = document.getElementById("requiredCount") as HTMLDivElement;
    requiredCount.style.display = "block";
    selectedID = item;
};


//top up
async function TopUp() {
    const UserArrayList = await fetchUser();
    let divelement = document.getElementById("topupDiv") as HTMLDivElement;
    divelement.style.display = "block";
    let currentAmount = document.getElementById("currentAmount") as HTMLElement;
    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].userID == CurrentuserID) {
            currentAmount.innerHTML = UserArrayList[i].balance.toString();
        }
    }

    let cancelDisplay = document.getElementById("cancelDisplay") as HTMLTableElement;
    cancelDisplay.style.display = "none";

    let purchasetableDisplay = document.getElementById('puchaseMedicine') as HTMLTableElement;
    purchasetableDisplay.style.display = "none";

    let medicineDiv = document.getElementById("medicineDiv") as HTMLDivElement;
    medicineDiv.style.display = "none";

    let historyDisplay = document.getElementById('historyDisplay') as HTMLTableElement;
    historyDisplay.style.display = "none";

    let requiredCount = document.getElementById("requiredCount") as HTMLDivElement;
    requiredCount.style.display = "none";


    let Showbalance = document.getElementById("ShowBalance") as HTMLDivElement;
    Showbalance.style.display = "none";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";

    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    afterdivelement.style.display = "none";

}
async function Recharge() {
    const UserArrayList = await fetchUser();
    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    let inpuTtopup = document.getElementById("inpuTtopup") as HTMLInputElement;
    let afterTopup = document.getElementById("afterTopup") as HTMLSpanElement;
    afterdivelement.style.display = "block";

    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].userID == CurrentuserID) {
            UserArrayList[i].balance += parseInt(inpuTtopup.value);
            afterTopup.innerHTML = UserArrayList[i].balance.toString();
            CurrentUserbalance = UserArrayList[i].balance;
            inpuTtopup.value = " ";
        }
    }
}
//show balance
async function ShowBalance() {
    let showBalance = document.getElementById("ShowBalance") as HTMLDivElement;
    let cbalance = document.getElementById("cbalance") as HTMLSpanElement;
    showBalance.style.display = "block";
    const UserArrayList = await fetchUser();

    for (let i = 0; i < UserArrayList.length; i++) {
        if (UserArrayList[i].userID == CurrentuserID) {

            cbalance.innerHTML = CurrentUserbalance.toString();
            //CurrentUserbalance = UserArrayList[i].balance;
        }
    }
    let divelement = document.getElementById("topupDiv") as HTMLDivElement;
    divelement.style.display = "none";

    let cancelDisplay = document.getElementById("cancelDisplay") as HTMLTableElement;
    cancelDisplay.style.display = "none";

    let purchasetableDisplay = document.getElementById('puchaseMedicine') as HTMLTableElement;
    purchasetableDisplay.style.display = "none";

    let medicineDiv = document.getElementById("medicineDiv") as HTMLDivElement;
    medicineDiv.style.display = "none";

    let historyDisplay = document.getElementById('historyDisplay') as HTMLTableElement;
    historyDisplay.style.display = "none";

    let requiredCount = document.getElementById("requiredCount") as HTMLDivElement;
    requiredCount.style.display = "none";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";

    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    afterdivelement.style.display = "none";
}
//buy medicine
async function buyMedicine() {
    const MedicineList = await fetchMedicine();
    let proceed: boolean = true;
    let finalMedicineRequiredCount: number = 0;
    let medicineRequiredCount = (document.getElementById('medicineRequiredCount') as HTMLInputElement).value;
    let medicineRequiredCountFeild = (document.getElementById('medicineRequiredCount') as HTMLInputElement);
    let medicineRequiredCountRegex = /^\d{1,3}$/;

    if (medicineRequiredCountRegex.test(medicineRequiredCount) && +medicineRequiredCount > 0) {
        for (let i = 0; i < MedicineList.length; i++) {

            if (MedicineList[i].medicineID == selectedID) {


                if (MedicineList[i].medicineCount > 0) {

                    if ((MedicineList[i].medicineCount - +medicineRequiredCount) < 0) {
                        proceed = confirm(`We only have ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName}. Do you want to buy ${MedicineList[i].medicineCount} ${MedicineList[i].medicineName}?`)

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

                        } else {
                            const newMedicine: MedicineInfo = {
                                medicineID: MedicineList[i].medicineID,
                                medicineName: MedicineList[i].medicineName,
                                medicinePrice: MedicineList[i].medicinePrice,
                                medicineCount: MedicineList[i].medicineCount - finalMedicineRequiredCount,
                                expiryDate: MedicineList[i].expiryDate
                            }
                            updateMedicine(MedicineList[i].medicineID, newMedicine);
                            //MedicineList[i].medicineCount = MedicineList[i].medicineCount - finalMedicineRequiredCount;
                            const newOrder: Order = {
                                orderId: 0,
                                medicineID: MedicineList[i].medicineID,
                                userID: CurrentuserID,
                                medicineName: MedicineList[i].medicineName,
                                medicineCount: finalMedicineRequiredCount,
                                orderStatus: "Ordered"
                            };
                            addOrder(newOrder);
                            //OrderList.push(new Order(MedicineList[i].medicineID, CurrentuserID, MedicineList[i].medicineName, finalMedicineRequiredCount, orderStatus.Ordered));
                            const UserArrayList = await fetchUser();
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
}

//show history
async function showHistory() {
    const OrderList = await fetchOrder();
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;
    historyDisplay.style.display = "block";

    const historyDisplaytable = document.querySelector("#historyDisplay tbody") as HTMLTableSectionElement;
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
    let divelement = document.getElementById("topupDiv") as HTMLDivElement;
    divelement.style.display = "none";

    let cancelDisplay = document.getElementById("cancelDisplay") as HTMLTableElement;
    cancelDisplay.style.display = "none";

    let purchasetableDisplay = document.getElementById('puchaseMedicine') as HTMLTableElement;
    purchasetableDisplay.style.display = "none";

    let medicineDiv = document.getElementById("medicineDiv") as HTMLDivElement;
    medicineDiv.style.display = "none";

    let Showbalance = document.getElementById("ShowBalance") as HTMLDivElement;
    Showbalance.style.display = "none";

    let requiredCount = document.getElementById("requiredCount") as HTMLDivElement;
    requiredCount.style.display = "none";

    let greet = document.getElementById('greet') as HTMLElement;
    greet.style.display = "none";

    let afterdivelement = document.getElementById("afterTopupDiv") as HTMLDivElement;
    afterdivelement.style.display = "none";
}

//email validation
function checkEmail(paraEmail: string) {
    let newuserEmail = (document.getElementById(paraEmail) as HTMLInputElement).value;
    let newuserEmailMessage = document.getElementById(paraEmail + "Message") as HTMLLabelElement;
    var regxemail = /^([a-z 0-9]+)@([a-z]+)\.([a-z]{2,20})$/;

    if (regxemail.test(newuserEmail) == true) {
        NewuserEmailStatus = true;
        newuserEmailMessage.style.visibility = "hidden";
    } else {
        NewuserEmailStatus = false;
        newuserEmailMessage.innerHTML = "Please enter valid email";
        newuserEmailMessage.style.visibility = "visible";
        newuserEmailMessage.style.color = "tomato";
        newuserEmailMessage.style.marginLeft = "10px";
    }
}

//password validate
function checkpassword(paraPass: string) {
    let newUserPass = (document.getElementById(paraPass) as HTMLInputElement).value;
    let newUserPassMessage = document.getElementById(paraPass + "Message") as HTMLLabelElement;
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
function checkPhone(paramNewuserPhoneNumber: string) {
    let newuserPhoneNumber = (document.getElementById(paramNewuserPhoneNumber) as HTMLInputElement).value;
    let newuserPhoneNumberMessage = document.getElementById(paramNewuserPhoneNumber + "Message") as HTMLLabelElement;
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

    let requiredCount = document.getElementById('requiredCount') as HTMLDivElement;
    let medicineInfo = document.getElementById('medicineInfo') as HTMLLabelElement;
    let historyDisplay = document.getElementById('historyDisplay') as HTMLLabelElement;

    let medicinePage = document.getElementById('medicinePage') as HTMLDivElement;
    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    let existingUserPage = document.getElementById('existingUserPage') as HTMLDivElement;
    let homePage = document.getElementById('homePage') as HTMLDivElement;

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

    let newUserPage = document.getElementById('newUserPage') as HTMLDivElement;
    newUserPage.style.display = "block";
}
