export const Validation = (type, value) => {
  let text = new RegExp("^[ñíóáéú a-zA-Z ]+$");
  let numeric = new RegExp("[0-9]+$");
  let textNumeric = new RegExp("^[a-zA-Z0-9 ]+$");
  let phoneLength = new RegExp("[0-9]+$");
  let alphaNumeric = new RegExp("^[a-zA-Z0-9 ñÑáéíóúÁÉÍÓÚ@.,]*$");

  if (type === "required")
    if (value === "" || value === undefined) return false;
  if (type === "text") if (!text.test(value)) return false;
  if (type === "numeric") if (!numeric.test(value)) return false;
  if (type === "textNumeric") if (!textNumeric.test(value)) return false;
  if (type === "phoneLength")
    if (!phoneLength.test(value) || value.length < 5) return false;
  if (type === "alphaNumeric") if (!alphaNumeric.test(value)) return false;
  return true;
};
