function validation(formValues) {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!formValues.ictkid) {
    errors.ictkid = "ICTAK ID  is required";
  }

  if (!formValues.name) {
    errors.name = "Associate Name  is required";
  }
  if (!formValues.hall) {
    errors.hall = "Hall Name  is required";
  }

  if (!formValues.date) {
    errors.date = "Date is required";
  }
  if (!formValues.start) {
    errors.start = "Starting Time is required";
  }
  if (!formValues.end) {
    errors.end = "Ending Time is required";
  }
  if (!formValues.event) {
    errors.event = "Event is required";
  }

  return errors;
}

export default validation;
