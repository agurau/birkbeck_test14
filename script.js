
const subscribeNewsletter = document.querySelector("#newsletter form")

subscribeNewsletter.addEventListener("submit", (event) => {
  event.preventDefault()

  // const name = document.querySelector("#newsletter input[name='name']")
  // console.log("name",name)

  // const email = document.querySelector("#newsletter input[name='email']")
  // console.log("email",email)

  const name = subscribeNewsletter.elements.name.value
  console.log("name",name)
  const email = subscribeNewsletter.elements.email.value
  console.log("email",email)

  alert("Subscribed sucessfully!")
})

// const form = document.getElementById('form');
// const firstname = document.getElementById('firstname');
// const email = document.getElementById('email');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	checkInputs();
// });

// function checkInputs() {
	
// 	if(firstnameValue === '') {
// 		setErrorFor(firstname, 'First name cannot be blank');
// 	} else {
// 		setSuccessFor(firstname);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}
    
//   function isEmail(email) {
//     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
//   }
// }