export enum KEYS {
    TOKEN = "dDedZwNqtOr6rtGgn/74Ug==",
    REDUX_STORE = "rApHrtC/nCTFd+2TH3YXaA==",
    IS_SIGNED_IN = "uazDLyWn/lFJOjHS78AP1Q==",
    USER_PROFILE = "user_profile_key",
  }
  
  export enum APP_NAVIGATION {
    back = "back",
    forward = "forward",
    reload = "reload",
  }

  export enum SUPPORT_DOCUMENTS {
    bank_notification = "bank_notification",
  }
  
  export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  export enum SIGNUP_FORM_STEPS {
    personal_details = 0,
    face = 1,
    login_details = 2,
  }
  
  export enum DEACTIVATION_FORM_STEPS {
    tin_validation = 0,
    account_info = 1,
    reason = 2,
  }
  
  
  export enum TIN_STATUS {
    valid = 1,
    invalid = 0,
  }


export enum ROUTES {
    home= "",
    auth= "/auth",
    login = "login",
    signUp = "sign-up",
}

export interface Login {
  email: string;
  password: string;
}

export enum CONSTANT_VALUES {
  ngCountryCode = 63,
  maxInputLength = 255,
  maxAccountNumberLength = 10,
  apiRecordListSize = 10,
  invalidateCacheTime = 1000 * 60 * 60 * 24, //24hrs
}