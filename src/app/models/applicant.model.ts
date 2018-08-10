export interface Applicant {
  firstName: string;
  lastName: string;
  birthdate: Date;
  parentsNames: string;
  phoneNumber: string;
  dateCreated: Date;
  email?: string;
  message?: string;
  recaptcha?: string;
}
