var _a;
// Listing Element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Profile Picture Element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutput = "\n  <h1><b>".concat(name_1, "</b></h1>\n  ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n  <hr>\n  <h3>Personal Information</h3>\n  <hr>\n  <p><strong>Email:</strong><span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n  <p><strong>Phone:</strong><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n  <hr>\n  <h3>Education</h3>\n  <hr>\n  <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n  <hr>\n  <h3>Experience</h3>\n  <hr>\n  <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n  <hr>\n  <h3>Skills</h3>\n  <hr>\n  <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = 'block';
        }
    }
    else {
        console.error('One or more output Elements are missing');
    }
});
