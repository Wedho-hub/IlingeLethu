document.addEventListener('DOMContentLoaded', () => {

  // for the humburger button
  const hamburgerBtn = document.querySelector('.humburger-btn');
  const menu = document.querySelector('.menu');

  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('open');
    menu.classList.toggle('show-menu');
  });
  
  // for closing the menu when menu item is clicked
  const menuItems = document.querySelectorAll('.menu li a');

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      menu.classList.remove('show-menu');
    });
  });
  
  // for the read-more button functionality and changing its text
  const readMoreButtons = document.querySelectorAll('.read-more');
  const additionalInfos = document.querySelectorAll('.additional-info');

  readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      additionalInfos[index].classList.toggle('hide');

      if (additionalInfos[index].classList.contains('hide')) {
        button.textContent = 'details';
    } else {
        button.textContent = 'close';
    }

      additionalInfos.forEach((info, i) => {
        if (i !== index && !additionalInfos[index].classList.contains('hide')) {
          info.classList.add('hide');
        }
      });
    });
  });

// for the functionality of the more services button`
const hiddenService = document.querySelectorAll('.service.hide');
const more = document.getElementById('more-services');

more.addEventListener("click", () => {
  hiddenService.forEach(service => {
      if (service.classList.contains('hide')) {
          service.classList.remove('hide');
      } else {
          service.classList.add('hide');
      }
  });

  more.innerText = more.innerText.trim().toLowerCase() === 'more services' ? 'show less' : 'more services';
});

// testimonial slider functionality
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showTestimonial() {
    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    testimonials[index].style.display = 'block';

    index = (index + 1) % testimonials.length;
}

setInterval(showTestimonial, 5000);

const scrollToTestimonials = () => {
  const testimonialsSection = document.querySelector('.testimonial-slider');
  testimonialsSection.scrollIntoView({ behavior: 'smooth' });
};

// review buttons functionality
const reviewsButton = document.querySelector('.reviews-button');

if (reviewsButton) {
  reviewsButton.addEventListener('click', scrollToTestimonials);
}

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
