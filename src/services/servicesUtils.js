export class ServiceUtil {
  constructor() {
    // constructor code goes here
  }

  applyPhoneMask(phoneNumber) {
    return phoneNumber
      .replace(/\D+/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4,5})(\d)/, "$1-$2");
  }

  isPhoneValid(phoneNumber) {
    return phoneNumber.replace(/\D+/g, "").length <= 11;
  }
}
