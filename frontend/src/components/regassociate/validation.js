function validation(formValues) {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!formValues.ictkid) {
    errors.ictkid = "ICTAK ID  is required";
  }

  if (!formValues.name) {
    errors.name = "Associate Name  is required";
  }
  if (!formValues.course) {
    errors.course = "Course  is required";
  }

  if (!formValues.username) {
    errors.username = "Username is required";
  }
  if (!formValues.email) {
    errors.email = "Email is required";
  } else if (!regex.test(formValues.email)) {
    errors.email = "Email is invalid";
  }
  if (!formValues.password) {
    errors.password = "Password is required";
  } else if (formValues.password.length < 5) {
    errors.password = "Password is too short";
  }
  return errors;
}

export default validation;
