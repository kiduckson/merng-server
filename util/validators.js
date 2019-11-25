module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};

  if (username.trim() === "") {
    errors.username = "사용자 이름을 입력해 주세요";
  }

  if (email.trim() === "") {
    errors.email = "이메일을 입력해 주세요";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "사용 가능한 이메일을 입력해주세요";
    }
  }
  if (password.trim() === "") {
    errors.password = "비밀번호를 입력해주세요";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "비밀번호를 다시 확인해 주세요";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "사용자 이름을 입력해 주세요";
  }
  if (password.trim() === "") {
    errors.password = "비밀번호를 입력해주세요";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1
  };
};
