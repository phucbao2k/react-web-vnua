const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
  SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  //admin
  //gender
  FETCH_GENDER_START: 'FETCH_GENDER_START',
  FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
  FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',
  //position
  FETCH_POSITION_START: 'FETCH_POSITION_START',
  FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
  FETCH_POSITION_FAILED: 'FETCH_POSITION_FAILED',
  //role
  FETCH_ROLE_START: 'FETCH_ROLE_START',
  FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
  FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',
  //doctor
  FETCH_TOP_DOCTORS_SUCCESS: 'FETCH_TOP_DOCTORS_SUCCESS',
  FETCH_TOP_DOCTORS_FAILED: 'FETCH_TOP_DOCTORS_FAILED',
  FETCH_ALL_DOCTORS_SUCCESS: 'FETCH_ALL_DOCTORS_SUCCESS',
  FETCH_ALL_DOCTORS_FAILED: 'FETCH_ALL_DOCTORS_FAILED',
  SAVE_DETAIL_DOCTOR_SUCCESS: 'SAVE_DETAIL_DOCTOR_SUCCESS',
  SAVE_DETAIL_DOCTOR_FAILED: 'SAVE_DETAIL_DOCTOR_FAILED',
  FETCH_REQUIRED_DOCTOR_INFOR_START: 'FETCH_REQUIRED_DOCTOR_INFOR_START',
  FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS: 'FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS',
  FETCH_REQUIRED_DOCTOR_INFOR_FAILED: 'FETCH_REQUIRED_DOCTOR_INFOR_FAILED',
 
  //CRUD User
  CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
  CREATE_USER_FAILED: 'CREATE_USER_FAILED',
  FETCH_ALL_USER_SUCCESS: 'FETCH_ALL_USER_SUCCESS',
  FETCH_ALL_USER_FAILED: 'FETCH_ALL_USER_FAILED',
  FETCH_USER_NOTSUCCESS: 'FETCH_ALL_USER_SUCCESS',
  FETCH_ALL_USER_FAILED: 'FETCH_ALL_USER_FAILED',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILED: 'DELETE_USER_FAILED',
  EDIT_USER_FAILED: 'EDIT_USER_FAILED',
  EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
  //crud clinic
  FETCH_ALL_CLINIC_SUCCESS: 'FETCH_ALL_CLINIC_SUCCESS',
  FETCH_ALL_CLINIC_FAILED: 'FETCH_ALL_CLINIC_FAILED',
  EDIT_CLINIC_FAILED: 'EDIT_CLINIC_FAILED',
  EDIT_CLINIC_SUCCESS: 'EDIT_CLINIC_SUCCESS',
  CREATE_CLINIC_SUCCESS: 'CREATE_CLINIC_SUCCESS',
  CREATE_CLINIC_FAILED: 'CREATE_CLINIC_FAILED',
  DELETE_CLINIC_SUCCESS: 'DELETE_CLINIC_SUCCESS',
  DELETE_CLINIC_FAILED: 'DELETE_CLINIC_FAILED',
  //crud specialty
  FETCH_ALL_SPECIALTY_SUCCESS: 'FETCH_ALL_SPECIALTY_SUCCESS',
  FETCH_ALL_SPECIALTY_FAILED: 'FETCH_ALL_SPECIALTY_FAILED',
  CREATE_SPECIALTY_SUCCESS: 'CREATE_SPECIALTY_SUCCESS',
  CREATE_SPECIALTY_FAILED: 'CREATE_SPECIALTY_FAILED',
  EDIT_SPECIALTY_FAILED: 'EDIT_SPECIALTY_FAILED',
  EDIT_SPECIALTY_SUCCESS: 'EDIT_SPECIALTY_SUCCESS',
  DELETE_SPECIALTY_SUCCESS: 'DELETE_SPECIALTY_SUCCESS',
  DELETE_SPECIALTY_FAILED: 'DELETE_SPECIALTY_FAILED',
  // crud Handbook
  FETCH_ALL_HANDBOOK_SUCCESS: 'FETCH_ALL_HANDBOOK_SUCCESS',
  FETCH_ALL_HANDBOOK_FAILED: 'FETCH_ALL_HANDBOOK_FAILED',
  EDIT_HANDBOOK_FAILED: 'EDIT_HANDBOOK_FAILED',
  EDIT_HANDBOOK_SUCCESS: 'EDIT_HANDBOOK_SUCCESS',
  DELETE_HANDBOOK_SUCCESS: 'DELETE_HANDBOOK_SUCCESS',
  DELETE_HANDBOOK_FAILED: 'DELETE_HANDBOOK_FAILED',
  CREATE_HANDBOOK_SUCCESS: 'CREATE_HANDBOOK_SUCCESS',
  CREATE_HANDBOOK_FAILED: 'CREATE_HANDBOOK_FAILED',
  //schedule
  FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS: 'FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS',
  FETCH_ALLCODE_SCHEDULE_TIME_FAILED: 'FETCH_ALLCODE_SCHEDULE_TIME_FAILED',
//booking
  FETCH_ALL_BOOKING_SUCCESS: 'FETCH_ALL_BOOKING_SUCCESS',
  FETCH_ALL_BOOKING_FAILED: 'FETCH_ALL_BOOKING_FAILED',
  DELETE_BOOKING_SUCCESS: 'DELETE_BOOKING_SUCCESS',
  DELETE_BOOKING_FAILED: 'DELETE_BOOKING_FAILED',
  SAVE_SCHEDULE_DOCTOR_SUCCESS: 'SAVE_SCHEDULE_DOCTOR_SUCCESS',
  SAVE_SCHEDULE_DOCTOR_FAILED: 'SAVE_SCHEDULE_DOCTOR_FAILED',
  // FETCH_BOOKING_PATIENT_FAILED: 'FETCH_BOOKING_PATIENT_FAILED',
  // DELETE_PATIENT_BOOKING_SUCCESS: 'DELETE_PATIENT_BOOKING_SUCCESS',
  // DELETE_PATIENT_BOOKING_FAILED: 'DELETE_PATIENT_BOOKING_FAILED',
  
  //user
  ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
  PROCESS_LOGOUT: 'PROCESS_LOGOUT',
})

export default actionTypes;