var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form input elements
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    // Get values from the form
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var address = addressElement.value;
    var education = educationElement.value;
    var experience = experienceElement.value;
    var skills = skillsElement.value.split(',').map(function (skill) { return skill.trim(); }); // Convert comma-separated skills to an array
    // Generate the resume content with editable sections
    var resumeHTML = "\n        <h2><b contenteditable=\"true\">".concat(name, "</b></h2>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><strong>Address:</strong> <span contenteditable=\"true\">").concat(address, "</span></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        \n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li contenteditable=\"true\">".concat(skill, "</li>"); }).join(''), "\n        </ul>\n    ");
    // Insert the generated resume into the resumeOutput section
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeHTML;
    // Make sure contenteditable is applied dynamically to the generated content
    makeEditable();
});
// Function to enable editing for all dynamically generated content
function makeEditable() {
    var editableElements = document.querySelectorAll('#resumeOutput [contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('input', function () {
            console.log("Updated content: ".concat(element)); // You can store the updates here if needed
        });
    });
}
