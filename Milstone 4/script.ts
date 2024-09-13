document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input elements
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLTextAreaElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    // Get values from the form
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const address = addressElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value.split(',').map(skill => skill.trim()); // Convert comma-separated skills to an array

    // Generate the resume content with editable sections
    const resumeHTML = `
        <h2><b contenteditable="true">${name}</b></h2>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        <p><strong>Address:</strong> <span contenteditable="true">${address}</span></p>

        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        
        <h3>Work Experience</h3>
        <p contenteditable="true">${experience}</p>

        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li contenteditable="true">${skill}</li>`).join('')}
        </ul>
    `;

    // Insert the generated resume into the resumeOutput section
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
    resumeOutput.innerHTML = resumeHTML;

    // Make sure contenteditable is applied dynamically to the generated content
    makeEditable();
});

// Function to enable editing for all dynamically generated content
function makeEditable() {
    const editableElements = document.querySelectorAll('#resumeOutput [contenteditable="true"]');
    editableElements.forEach(element => {
        element.addEventListener('input', () => {
            console.log(`Updated content: ${element}`); // You can store the updates here if needed
        });
    });
}

