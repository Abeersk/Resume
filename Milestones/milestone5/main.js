var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Fetch form elements safely
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById('username');
    // Validation: Ensure all required elements are present
    if (!profilePictureInput || !nameElement || !emailElement || !phoneElement ||
        !educationElement || !experienceElement || !skillsElement || !usernameElement) {
        console.error('One or more required input elements are missing from the DOM.');
        alert('Please fill out all fields before submitting the form.');
        return;
    }
    // Extract and validate input values
    var name = nameElement.value.trim();
    var email = emailElement.value.trim();
    var phone = phoneElement.value.trim();
    var education = educationElement.value.trim();
    var experience = experienceElement.value.trim();
    var skills = skillsElement.value.trim();
    var username = usernameElement.value.trim();
    if (!name || !email || !phone || !education || !experience || !skills || !username) {
        alert('All fields are required. Please fill out the form completely.');
        return;
    }
    // Generate unique file path
    var uniquePath = "".concat(username.replace(/\s+/g, '_'), "_cv.html");
    // Handle profile picture
    var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
    // Resume output HTML
    var resumeOutput = "\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-pic\">") : '', "\n    <h2>").concat(name, "</h2>\n    <hr>\n    <h3>Personal Information</h3>\n    <hr>\n    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n    <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n    <hr>\n    <h3>Education</h3>\n    <hr>\n    <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n    <hr>\n    <h3>Experience</h3>\n    <hr>\n    <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n    <hr>\n    <h3>Skills</h3>\n    <hr>\n    <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n  ");
    // Create download link
    var downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download Your Resume';
    downloadLink.style.display = 'block';
    downloadLink.style.marginTop = '20px';
    // Insert resume output into DOM
    var resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makesEditable(); // Add editing functionality
        resumeOutputElement.appendChild(downloadLink);
        resumeOutputElement.style.display = 'block';
    }
    else {
        console.error('The resume output element is missing from the DOM.');
        alert('An error occurred while generating the resume. Please try again.');
    }
});
// Function to make fields editable
function makesEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function (event) {
            var _a, _b;
            var currentElement = event.currentTarget;
            var currentValue = ((_a = currentElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
            if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                // Input blur handler
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value.trim() || currentValue;
                    currentElement.style.display = 'inline'; // Restore original
                    input_1.remove(); // Remove input
                });
                currentElement.style.display = 'none'; // Hide the original
                (_b = currentElement.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(input_1, currentElement); // Add input in DOM
                input_1.focus(); // Focus on input for editing
            }
        });
    });
}
