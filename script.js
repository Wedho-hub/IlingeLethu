
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('humburger-btn');
  const menu = document.querySelector('.menu');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    menu.classList.toggle('show-menu');
  });
});


// const form = document.getElementById('myForm');

// form.addEventListener('submit', async function(event) {
//   event.preventDefault(); // Prevent form submission

//   // Collect form data
//   const formData = new FormData(form);
  
//   // Convert form data to an object
//   const data = {};
//   formData.forEach((value, key) => {
//     data[key] = value;
//   });

//   try {
//     // Send the form data to the server (example using fetch)
//     const response = await fetch('/submit-form', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });

//     if (response.ok) {
//       // Form data successfully sent
//       console.log('Form data submitted to server.');
//       // Optionally, perform actions based on the response
//     } else {
//       // Handle errors if the submission fails
//       console.error('Failed to submit form data.');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// });
