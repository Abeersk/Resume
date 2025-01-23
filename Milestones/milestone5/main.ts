document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
  event.preventDefault();

  // Fetch form elements safely
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement | null;
  const nameElement = document.getElementById('name') as HTMLInputElement | null;
  const emailElement = document.getElementById('email') as HTMLInputElement | null;
  const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
  const educationElement = document.getElementById('education') as HTMLInputElement | null;
  const experienceElement = document.getElementById('experience') as HTMLInputElement | null;
  const skillsElement = document.getElementById('skills') as HTMLInputElement | null;
  const usernameElement = document.getElementById('username') as HTMLInputElement | null;

  // Validation: Ensure all required elements are present
  if (!profilePictureInput || !nameElement || !emailElement || !phoneElement ||
      !educationElement || !experienceElement || !skillsElement || !usernameElement) {
    console.error('One or more required input elements are missing from the DOM.');
    alert('Please fill out all fields before submitting the form.');
    return;
  }

  // Extract and validate input values
  const name = nameElement.value.trim();
  const email = emailElement.value.trim();
  const phone = phoneElement.value.trim();
  const education = educationElement.value.trim();
  const experience = experienceElement.value.trim();
  const skills = skillsElement.value.trim();
  const username = usernameElement.value.trim();

  if (!name || !email || !phone || !education || !experience || !skills || !username) {
    alert('All fields are required. Please fill out the form completely.');
    return;
  }

  // Generate unique file path
  const uniquePath = `${username.replace(/\s+/g, '_')}_cv.html`;

  // Handle profile picture
  const profilePictureFile = profilePictureInput.files?.[0];
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

  // Resume output HTML
  const resumeOutput = `
    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-pic">` : ''}
    <h2>${name}</h2>
    <hr>
    <h3>Personal Information</h3>
    <hr>
    <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
    <p><strong>Phone:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
    <hr>
    <h3>Education</h3>
    <hr>
    <p id="edit-education" class="editable">${education}</p>
    <hr>
    <h3>Experience</h3>
    <hr>
    <p id="edit-experience" class="editable">${experience}</p>
    <hr>
    <h3>Skills</h3>
    <hr>
    <p id="edit-skills" class="editable">${skills}</p>
  `;

  // Create download link
  const downloadLink = document.createElement('a');
  downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
  downloadLink.download = uniquePath;
  downloadLink.textContent = 'Download Your Resume';
  downloadLink.style.display = 'block';
  downloadLink.style.marginTop = '20px';

  // Insert resume output into DOM
  const resumeOutputElement = document.getElementById('resumeOutput');
  if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput;
    makesEditable(); // Add editing functionality
    resumeOutputElement.appendChild(downloadLink);
    resumeOutputElement.style.display = 'block';
  } else {
    console.error('The resume output element is missing from the DOM.');
    alert('An error occurred while generating the resume. Please try again.');
  }
});

// Function to make fields editable
function makesEditable(): void {
  const editableElements = document.querySelectorAll('.editable');

  editableElements.forEach((element) => {
    element.addEventListener('click', function (event: Event) {
      const currentElement = event.currentTarget as HTMLElement;
      const currentValue = currentElement.textContent?.trim() || '';

      if (currentElement.tagName === 'P' || currentElement.tagName === 'SPAN') {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentValue;
        input.classList.add('editing-input');

        // Input blur handler
        input.addEventListener('blur', function () {
          currentElement.textContent = input.value.trim() || currentValue;
          currentElement.style.display = 'inline'; // Restore original
          input.remove(); // Remove input
        });

        currentElement.style.display = 'none'; // Hide the original
        currentElement.parentNode?.insertBefore(input, currentElement); // Add input in DOM
        input.focus(); // Focus on input for editing
      }
    });
  });
}
