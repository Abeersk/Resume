// Listing Element
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
  event.preventDefault();

  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLInputElement;
  const experienceElement = document.getElementById('experience') as HTMLInputElement;
  const skillsElement = document.getElementById('skills') as HTMLInputElement;

  if (
    profilePictureInput &&
    nameElement &&
    emailElement &&
    phoneElement &&
    educationElement &&
    experienceElement &&
    skillsElement
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    // Profile Picture Element
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureURL = profilePictureFile
      ? URL.createObjectURL(profilePictureFile)
      : '';

    const resumeOutput = `
      ${
        profilePictureURL
          ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
          : ''
      }
      <h1><b id="edit-name" class="editable" contenteditable="true">${name}</b></h1>
      <hr>
      <h3>Personal Information</h3>
      <hr>
      <p><strong>Email:</strong> <span id="edit-email" class="editable" contenteditable="true">${email}</span></p>
      <p><strong>Phone:</strong> <span id="edit-phone" class="editable" contenteditable="true">${phone}</span></p>
      <hr>
      <h3>Education</h3>
      <hr>
      <p id="edit-education" class="editable" contenteditable="true">${education}</p>
      <hr>
      <h3>Experience</h3>
      <hr>
      <p id="edit-experience" class="editable" contenteditable="true">${experience}</p>
      <hr>
      <h3>Skills</h3>
      <hr>
      <p id="edit-skills" class="editable" contenteditable="true">${skills}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      resumeOutputElement.style.display = 'block';

      // Add event listeners to handle changes made to editable fields
      const editableFields = document.querySelectorAll('.editable');
      editableFields.forEach((field) => {
        field.addEventListener('input', () => {
          console.log(
            `${(field as HTMLElement).id} updated to: ${(field as HTMLElement).textContent}`
          );
        });
      });
    }
  } else {
    console.error('One or more output elements are missing');
  }
});
