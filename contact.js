
// const name = document.getElementById('name')
// const email = document.getElementById('email')
// const phone = document.getElementById('phone')
// const subject = document.getElementById('subject')
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//   let mesasages = []

//   if (name.value === '' || name.value == null) {
//     mesasages.push('Name is required')
//   }

//   if (mesasages.length > 0) {
//   e.preventDefault()
//   errorElement.innerText = messages.join(', ')
//   }
// })

const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});


function checkInputs() {
	// trim to remove the whitespaces
	const fullnameValue = fullname.value.trim();
	const emailValue = email.value.trim();
	const subjectValue = subject.value.trim();
	const messageValue = message.value.trim();

	
	if(fullnameValue === '') {
		setErrorFor(fullname, 'Name cannot be blank');
	} else {
		setSuccessFor(fullname);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Enter a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(subjectValue === '') {
		setErrorFor(subject, 'Subject cannot be blank');
    } else if (subject.value.length<4) {
		setErrorFor(subject, 'Subject cannot be less than 4 characters');
	} else {
		setSuccessFor(subject);
	}
	
	if(messageValue === '') {
		setErrorFor(message, 'Message cannot be blank');
	} else if (message.value.length < 20) {
		setErrorFor(message, 'Message cannot be less than 20 characters');
	} else{
		setSuccessFor(message);
	}

  //alert("Form Submitted Successfully!");//

  
}



function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//

// const form = document.getElementById('form')
// const firstname = document.getElementById('firstname')
// const email = document.getElementById('email')
// const phone = document.getElementById('phone')
// const subject = document.getElementById('subject')

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   checkInputs();

// });

// function checkInputs() {
//   // get the values from the inputs //
//   const firstnameValue = firstname.value.trim();
//   const emailValue = email.value.trim();
//   const phoneValue = phone.value.trim();
//   const subjectValue = subject.value.trim();

//   if(firstnameValue === '') {
//     setErrorFor(firstname, 'Name cannot be blank');
//   } else {
//     setSuccessFor(firstname);
//   }
// }

// function setErrorFor(input, message) {
//   const formControl = input.parentElement;
//   const small = formControl.querySelector('small');
// }
