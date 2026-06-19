let rulesDB = {};

// 1. Fetch the data from your JSON file
fetch('rules.json')
    .then(response => response.json())
    .then(data => {
        rulesDB = data;
        generateMenu();
    })
    .catch(error => console.error('Error loading rules:', error));

// 2. Generate the menu buttons based on the data
function generateMenu() {
    const container = document.getElementById('menuContainer');
    container.innerHTML = ''; // Clear existing content

    for (let standard in rulesDB) {
        // Create a header for the Standard (ASNZS or NEC)
        let header = document.createElement('h3');
        header.innerText = standard;
        container.appendChild(header);

        // Create buttons for each rule
        for (let key in rulesDB[standard]) {
            let rule = rulesDB[standard][key];
            let btn = document.createElement('button');
            btn.innerText = rule.title;
            btn.onclick = () => showRule(standard, key);
            container.appendChild(btn);
        }
    }
}

// 3. Display the rule details in the viewer
function showRule(standard, key) {
    const rule = rulesDB[standard][key];
    const viewer = document.getElementById('ruleContent');
    
    viewer.innerHTML = `
        <h3>${rule.title}</h3>
        <p><strong>Section:</strong> ${rule.section}</p>
        <p>${rule.text}</p>
        <a href="${rule.videoUrl}" target="_blank">Watch the explanation video</a>
    `;
        }
  
