export class ValidationPatterns {
  // Password: min 8 chars, at least 1 uppercase, 1 lowercase, 1 digit, 1 special char
  static password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

  // Only text: alphabets and spaces allowed
  static onlyText = /^[A-Za-z\s]+$/;

  // Username: 3-16 characters, alphanumeric, dots and underscores allowed
    static username = /^[A-Za-z ]+$/;

  // Email: basic format
  static email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Update email: stricter format (optional)
  static updateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
}
