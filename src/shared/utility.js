export const validateInput = input => {
  let isValid = true;
  if (!input.validation) {
    return isValid;
  }

  // check for input length
  if (input.validation.required) {
    isValid = input.value.trim() !== "" && isValid;
  }

  // check if url is valid
  // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
  if (input.validation.validURL) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );

    isValid = !!pattern.test(input.value) && isValid;
  }

  return isValid;
};

// check if all input fields are set to valid
export const validateForm = form => {
  let isFormValid = true;
  for (let input in form) {
    isFormValid = form[input].valid && isFormValid;
  }
  return isFormValid;
};