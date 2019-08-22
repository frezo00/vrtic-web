export interface Applicant {
  firstName: string;
  lastName: string;
  birthdate: any;
  parentsNames: string;
  phoneNumber: string;
  dateCreated: any;
  id?: string;
  email?: string;
  message?: string;
  recaptcha?: string;
  isMember?: boolean;
}
