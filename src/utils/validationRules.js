export const isRequired = (val) => ({
  hasPassed: !!val,
  message: 'Please, fill in the field',
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: 'You have exceeded the limit',
});

export const emailValidation = (val) => ({
	hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
	message: 'Invalid email'
});

export const passwordValidation = (val) => ({
	hasPassed: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(val),
	message: 'The password must include uppercase and lowercase Latin letters, numbers, special characters (min 8 characters)'
});