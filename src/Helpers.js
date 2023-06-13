export function ConfirmationPersonalInfo(infoSteps, errorSteps) {
  let error = false;
  if (!infoSteps.name.trim().length) {
    error = true;
    errorSteps.setErrorName("This field is required");
  } else if (/\d/.test(infoSteps.name)) {
    error = true;
    errorSteps.setErrorName("Only characters");
  }

  if (!infoSteps.email.trim().length) {
    error = true;
    errorSteps.setErrorEmail("This field is required");
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi.test(
      infoSteps.email
    )
  ) {
    error = true;
    errorSteps.setErrorEmail("Invalid email format");
  }
  if (!infoSteps.phone.trim().length) {
    error = true;
    errorSteps.setErrorPhone("This field is required");
  } else if (!/^[0-9]+$/.test(infoSteps.phone)) {
    error = true;
    errorSteps.setErrorPhone("Only Digit");
  }

  return error;
}

export function ConfirmSelectPlan(infoStep, errorsStep) {
  return false;
}

export function ConfirmAddOns(infoStep, errorsStep) {
  return false;
}
