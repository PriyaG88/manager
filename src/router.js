import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/login_form';
import EmployeeList from './components/employee_list';
import EmployeeCreate from './components/employee_create';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please Login'/>
        </Scene>
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle='Add'
          key='employeeList'
          component={EmployeeList}
          title='Employees' />

        <Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee' />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
