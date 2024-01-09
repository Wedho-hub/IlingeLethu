
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.humburger-btn');
  const menu = document.querySelector('.menu');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    menu.classList.toggle('show-menu');
  });
});

function navigateToTestimonials() {
  const testimonialsSection = document.getElementById('testimonials-section');
  testimonialsSection.scrollIntoView({ behavior: 'smooth' });
}

const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
  button.addEventListener('click', function() {
    const additionalInfo = this.nextElementSibling;
    additionalInfo.classList.toggle('show');
  });
});

// let slideIndex = 0;
// const testimonials = document.querySelectorAll('.testimonial');

// function showTestimonials() {
//     testimonials.forEach(testimonial => testimonial.style.display = 'none');
//     slideIndex++;
//     if (slideIndex > testimonials.length) { slideIndex = 1; }
//     testimonials[slideIndex - 1].style.display = 'block';
//     setTimeout(showTestimonials, 3000);
// }

// showTestimonials();



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
