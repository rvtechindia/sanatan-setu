export const validateLoginDetails = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.email) {
    errors.email = "Cannot be blank";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.password) {
    errors.password = "Cannot be blank";
  } else if (values.password.length < 8) {
    errors.password = "Password must be more than 8 characters";
  }
  if (!values.businessName) {
  }
  return errors;
};

export const validateBusinessDetails = (values) => {
  let errors = {};
  // const regex = https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*);
  if (!values.businessName) {
    errors.businessName = "Cannot be blank";
  } else if (values.businessName.length < 2) {
    errors.businessName = "Cannot be blank";
  }
  if (!values.website) {
    errors.website = "Cannot be blank";
  }
  if (!values.description) {
    errors.description = "Cannot be blank";
  } else if (values.description.length < 50) {
    errors.description = "Description must be greater than 50";
  }
  if (!values.tagline) {
    errors.tagline = "Cannot be blank";
  }
  if (!values.category) {
    errors.category = "Cannot be blank";
  }
  return errors;
};

export const validateRegisterDetails = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!values.email) {
    errors.email = "Cannot be blank";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.password) {
    errors.password = "Cannot be blank";
  } else if (values.password.length < 8) {
    errors.password = "Password must be more than 8 characters";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Cannot be blank";
  } else if (values.confirmPassword != values.password) {
    errors.confirmPassword = "Password do not match";
  }
  if (!values.name) {
    errors.name = "Cannot be blank";
  }
  if (!values.phone) {
    errors.phone = "Cannot be blank";
  } else if (!regexPhone.test(values.phone)) {
    errors.phone = "Invalid Mobile Number !";
  }
  if(values.checked === false){
    errors.checked = "Accept Privacy Policy"
  }
  return errors;
};
