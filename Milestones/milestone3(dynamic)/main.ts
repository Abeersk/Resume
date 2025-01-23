

// Listing Element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
  event.preventDefault();

const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
  const nameElement = document.getElementById('name') as HTMLInputElement
  const emailElement = document.getElementById('email') as HTMLInputElement
  const  phoneElement = document.getElementById('phone') as HTMLInputElement
  const  educationElement = document.getElementById('education') as HTMLInputElement
  const  experienceElement = document.getElementById('experience') as HTMLInputElement
  const  skillsElement = document.getElementById('skills') as HTMLInputElement

  


   if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

   const name = nameElement.value
   const email = emailElement.value
   const phone = phoneElement.value
   const education = educationElement.value
   const experience = experienceElement.value
   const skills = skillsElement.value
   


// Profile Picture Element
    const profilePictureFile = profilePictureInput.files?.[0]
    const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): ""






  const resumeOutput = `
  <h1><b>${name}</b></h1>
  ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""}
  <hr>
  <h3>Personal Information</h3>
  <hr>
  <p><strong>Email:</strong><span id="edit-email" class="editable">${email}</span></p>
  <p><strong>Phone:</strong><span id="edit-phone" class="editable">${phone}</span></p>
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


 
 const resumeOutputElement = document.getElementById('resumeOutput')
  if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput



  resumeOutputElement.style.display='block'
  }
   }else{
    console.error('One or more output Elements are missing');
    
   }
})

