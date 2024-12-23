type FormNavigation = {
  next: () => void;
  prev: () => void;
  goto: (index: number) => void;
  gotoLast: () => void;
  cancel?: () => void;
};

type SignUpFormNavigation = {
  next: () => void;
  prev: () => void;
  cancel?: () => void;
};

type SelectOption = {
  value: string | number;
  label: string;
};

type CardType = "basic" | "debit" | "prepaid";

type UserLogin = {
  usernameOrEmail: string;
  password: string;
};

type UserSignup = {
  firstname: string;
  lastname: string;
  gender: string;
  phone: string;
  face: string;
  email: string;
  password: string;
  confirm_password: string;
  facePreview: string;
};

type UploadMimeType =
  | "application/pdf"
  | "image/jpeg"
  | "image/png"
  | "image/jpg";
;

type BankEnabledRequest = {
  applicant_category: string;
  bank: string;
  account_name: string;
  account_number: string;
  delivery_type: string;
  state: string;
  lga: string;
  address: string;
  country: string;
};

type SupportDocumentType = {
  fileKey: string;
  name: string;
};