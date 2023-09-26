export function validateField(name, value) {
const forenameRegex = /^(?!.*\s{2})[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*(?:\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*){0,29}$/;
const surnameRegex = /^(?!.*\s{2})[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*(?:\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ý]*){0,29}$/;
const dobRegex = /^(19\d{2}|20[0-1]\d|2022)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
const nationalityRegex = /^(?!.*\s{2})[A-Z][a-z]*(?:\s[A-Z][a-z]*){0,29}$/;
const teamsRegex = /^(?!.*,,)[A-Za-z]*(?:\s[A-Za-z]*){0,29}$/;
const descriptionRegex = /^(?!\s*$).{1,300}$/;

switch (name) {
    case 'forename':
        if (forenameRegex.test(value)) {
            errors = { ...errors, [name]: "" };
          } else {
            errors = { ...errors, [name]: "Forename cannot be empty or have numbers and cannot type more than 29 characters" };
          }          
        break;
    case 'surname':
        if (surnameRegex.test(value)) {
            errors = { ...errors, [name]: "" };
          } else {
            errors = { ...errors, [name]: "surname cannot be empty or have numbers and cannot type more than 29 characters" };
          }
        break;
    case 'dob':
        if (dobRegex.test(value)) {
            errors = { ...errors, [name]: "" };
        } else {
            errors = { ...errors, [name]: "Date of Birthday cannot be empty and the format is YYYY-MM-DD" };
        }
        break;
    case 'nationality':
        if (nationalityRegex.test(value)) {
            errors = { ...errors, [name]: "" };
        } else {
            errors = { ...errors, [name]: "Nationality cannot be empty or have numbers and cannot type more than 29 characters" };
        }
    break;
    case 'teams':
        if (teamsRegex.test(value)) {
            errors = { ...errors, [name]: "" };
        } else {
            errors = { ...errors, [name]: "Teams cannot be empty or have numbers and cannot type more than 29 characters" };
        }
    break;
    case 'description':
        if (descriptionRegex.test(value)) {
            errors = { ...errors, [name]: "" };
        } else {
            errors = { ...errors, [name]: "Last name cannot be empty or have more than 300 characters" };
        }
    break;
    }
    return errors;
}


export function validation(errors) {
    let numberErrors = 0;
    for (const key in errors) {
      if (errors[key].length > 0) numberErrors++;
    }
    return numberErrors;
  }

