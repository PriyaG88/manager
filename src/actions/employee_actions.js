import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS }
  from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value}
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const  { currentUser } = firebase.auth();
  // type reset will reset the view stack
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.employeeList({ type: 'reset' });
    });
  };
};

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();
  //snapshot is an object that describes the data - is not the data itself
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
