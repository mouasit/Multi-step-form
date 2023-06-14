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

export async function fillDataInfo(
  objectData,
  data,
  setData,
  order,
  setOrder,
  currentStep,
  setCurrentStep,
  currentStepTemp,
  setCurrentStepTemp
) {
  const stepName = data.stepName;
  if (objectData.stepName) {
    objectData.stepName = await data;
    setCurrentStep(currentStepTemp);
  } else {
    objectData[stepName] = data;
    setCurrentStepTemp(currentStep + 1);
    setCurrentStep(currentStep + 1);
  }
  setData(objectData);
  setOrder(order + 1);
}

export function getTotal(data) {
  const pricePlan = Number(data.selectPlan.price);
  const priceTotalServices = getTotalServices(data.addOns);

  return pricePlan + priceTotalServices;
}

function getTotalServices(services) {
  const online = Number(services.online?.price) || 0;
  const storage = Number(services.storage?.price) || 0;
  const profile = Number(services.profile?.price) || 0;

  return online + storage + profile;
}
