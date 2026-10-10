const dashboardData = {
    academics: {
        title: "Your Academics",
        text: "Check Blackboard for coursework and assignment details. Midterms are almost here. Time to study."
    },
    schedule: {
        title: "Week at a Glance",
        text: "Check the USC Newsletter for on campus events. Check the Cockpit Apps for Campus Athletics."
    },
    advising: {
        title: "Academic Advising",
        text: "Advising appointments available for Spring 2027. Please schedule at your earliest convenience."
    }
};

function changeContent(category) {
    
    const contentBox = document.getElementById("dynamic-content");
    
    const selectedData = dashboardData[category];
    
    contentBox.innerHTML = `
        <h2>${selectedData.title}</h2>
        <p>${selectedData.text}</p>
    `;
}