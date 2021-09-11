const aboutMeStats = [
    {
        name: "Projects Done",
        amount: 20
    },
    {
        name: "Cups of Coffee",
        amount: 300
    },
    {
        name: "Experience in years",
        amount: 5
    },
    {
        name: "Working Hourse",
        amount: 587
    }
]

const personalInformation = [
    {
        key: "Name",
        value: "Dilmurod Jadanov"
    },
    {
        key: "Date of birth",
        value: "04.09.2001"
    },
    {
        key: "Address",
        value: "Tashkent"
    },
    {
        key: "Email",
        value: "dilmurodjadanov0109@gmail.com"
    },
    {
        key: "Phone",
        value: "+998990124301"
    }
]

function createStatistics() {
    let target = document.getElementById("about-me-statistics");

    for (let i of aboutMeStats) {
        let boxDiv = document.createElement("div");
        let amountDiv = document.createElement("div");
        let nameDiv = document.createElement("div");

        boxDiv.setAttribute("class", "box");
        amountDiv.setAttribute("class", "amount slowNumber");
        nameDiv.setAttribute("class", "name");

        amountDiv.innerText = i.amount
        nameDiv.innerText = i.name

        boxDiv.appendChild(amountDiv);
        boxDiv.appendChild(nameDiv);
        target.appendChild(boxDiv);
    }
}

function createPersonalInformation() {
    let target = document.getElementById("personal-information");

    for (let i of personalInformation) {
        let singleInfoDiv = document.createElement("div");
        let span1 = document.createElement("span");
        let span2 = document.createElement("span");

        singleInfoDiv.setAttribute("class", "single-info");

        span1.innerText = i.key + ": ";
        span2.innerText = i.value;

        singleInfoDiv.appendChild(span1);
        singleInfoDiv.appendChild(span2);
        target.appendChild(singleInfoDiv);
    }

}
createStatistics();
createPersonalInformation();