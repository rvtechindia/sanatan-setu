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
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  }
  if (!values.businessName) {
  }
  return errors;
};

export const validateBusinessDetails = (values) => {

    console.log(values);
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
