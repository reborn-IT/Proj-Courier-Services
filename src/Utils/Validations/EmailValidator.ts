/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
export default function isEmailValid(email: string) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email || regex.test(email) === false) {
    return false;
  }
  return true;
}
