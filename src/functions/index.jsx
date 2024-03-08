export function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function validate(
  usernameRef,
  passwordRef,
  loginRef = "test@gmail.com",
  repasswordRef = passwordRef
) {
  if (!usernameRef.current.value.trim().length) {
    alert("username kiritilishi shart !!!");
    usernameRef.current.focus();
    usernameRef.current.value = "";
    return false;
  }
  if (!loginRef.current.value.trim().length) {
    alert("Email kiritilishi shart !!!");
    loginRef.current.focus();
    loginRef.current.value = "";
    return false;
  }
  const email = loginRef.current.value;
  if (!validateEmail(email)) {
    alert("Emailning to'g'ri formatda kiritilishi shart!!!");
    loginRef.current.focus();
    loginRef.current.value = "";
    return false;
  }
  if (!passwordRef.current.value.trim().length) {
    alert("password kiritilishi shart !!!");
    passwordRef.current.focus();
    passwordRef.current.value = "";
    return false;
  }
  if (!repasswordRef.current.value.trim().length) {
    alert("password kiritilishi shart !!!");
    repasswordRef.current.focus();
    repasswordRef.current.value = "";
    return false;
  }
  if (passwordRef.current.value !== repasswordRef.current.value) {
    alert("Parollar bir biriga mos emas!!");
    passwordRef.current.focus();
    repasswordRef.current.value = "";
    return false;
  }
  return true;
}
export function validateLogin(
  usernameRef,
  passwordRef,
) {
  if (!usernameRef.current.value.trim().length) {
    alert("username kiritilishi shart !!!");
    usernameRef.current.focus();
    usernameRef.current.value = "";
    return false;
  }
  if (!passwordRef.current.value.trim().length) {
    alert("password kiritilishi shart !!!");
    passwordRef.current.focus();
    passwordRef.current.value = "";
    return false;
  }

  return true;
}
