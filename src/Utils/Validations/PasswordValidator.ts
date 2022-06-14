export default function IsPasswordValid(password: string) {
  // Add other rules later
  if (password.length < 6) {
    return false;
  }
  return true;
}
