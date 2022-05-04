const ErrorCode = {
  InternalServerError: 'INTERNAL_SERVER_ERROR',
  Unauthorized: 'UNAUTHORIZED',
  UnknownError: 'UNKNOWN_ERROR',
  InvalidPasscode: 'INVALID_PASSCODE',
  InvalidOTP: 'INVALID_OTP',
  IdentityUpdateRequired: 'IDENTITY_UPDATE_REQUIRED',
  DuplicateUser: 'DUPLICATE_USER',
  Forbidden: 'FORBIDDEN',
  RegisteredUser: 'REGISTERED_USER',
  MismatchIdentity: 'MISMATCH_IDENTITY',
  BadRequest: 'BAD_REQUEST',
  BadUserInput: 'BAD_USER_INPUT',
  NotFound: 'NOT_FOUND',
  InvalidEmail: 'INVALID_EMAIL',
  UserBlocked: 'USER_BLOCKED',
  DeviceNotFound: 'DEVICE_NOT_FOUND',
  TokenExpired: 'TOKEN_EXPIRED',
  AccountClaimMissing: 'ACCOUNT_CLAIM_MISSING',
  RegistrationTokenExpired: 'REGISTRATION_TOKEN_EXPIRED',
  UnavailableCompanyId: 'UNAVAILABLE_COMPANY_ID',
  ConnectionGeneralError: 'CONNECTION_GENERAL_ERROR',
  ClientSideError: 'CLIENT_SIDE_ERROR',
  ServerSideError: 'SERVER_SIDE_ERROR',
  UserAuthenticationBlocked: 'USER_AUTHENTICATION_BLOCKED',
  DownstreamError: 'DOWNSTREAM_ERROR',
  ConnectionRefused: 'ECONNREFUSED',
  ConnectionReset: 'ECONNRESET',
  NewDeviceUnauthorized: 'NEW_DEVICE_UNAUTHORIZED'
};

const BarStyle = {
  lightContent: 'light-content',
  darkContent: 'dark-content'
};

const Language = {
  EN: {
    language: 'en',
    flag: 'GB'
  },
  ID: {
    language: 'id',
    flag: 'ID'
  }
};

const TermsAndConditions = {
  types: {
    customerRegistration: 'CUSTOMER_REGISTRATION'
  }
};

const Platforms = {
  ios: 'ios',
  android: 'android'
};

const Constants = {
  composerDisplayName: 'WithScreen',
  indochinaTimezone: '+07:00',
  pinLength: 6,
  IDLE_TIMEOUT: 120000,
  MINIMIZE_TIMEOUT: 30000,
  MAXIMUM_PIN_ATTEMPT: '3',
  MAXIMUM_PASSWORD_ATTEMPT: '3',
  MAXIMUM_EMAIL_ATTEMPT: '5',
  MAXIMUM_OTP_ATTEMPT: 5,
  MAXIMUM_REGISTRATION_ATTEMPT: '10',
  MAXIMUM_LOGIN_EMAIL_ATTEMPT: '10',
  MAXIMUM_STEP_UP_PASSWORD_ATTEMPT: 3,
  MAXIMUM_STEP_UP_PIN_ATTEMPT: 3,
  INFLIGHT_PAYMENT_WIDGET_LIMIT: 2,
  REGISTRATION_SESSION_TIMEOUT: 1200000,
  FRIDA_CHECKER_INTERVAL: 5000,
  SELF_DESTROY_COUNTDOWN: 5000,
  PULL_TO_REFRESH_COUNTDOWN: 1000,
  MAXIMUM_TRANSFER_AMOUNT: 100000000000,
  DEFAULT_POLL_INTERVAL: 10000,
  INITIAL_TRANSACTION_MONTH: 1,
  INITIAL_FILTER_TRANSACTION_MONTH: 3,
  CALL_CENTER_PHONE_NUMBER: '1500300'
};

const KeyboardType = {
  default: 'default',
  numberPad: 'number-pad'
};

const Widgets = {

};

const DefaultCurrency = 'IDR';

const DefaultPageLimit = 20;

const TextDecryptConfig = {
  DefaultCounter: 5,
  Key: [11, 16, 10, 1, 9, 7, 13, 6, 3, 2, 5, 14, 12, 15, 4, 8]
};

const KeyboardStatus = {
  HIDDEN: 0,
  VISIBLE: 1
};

export default {
  KeyboardStatus,
  ErrorCode,
  Language,
  Constants,
  TermsAndConditions,
  KeyboardType,
  Platforms,
  DefaultCurrency,
  SliderStep: 50000000,
  Widgets,
  DefaultPageLimit,
  BarStyle,
  TextDecryptConfig
};
