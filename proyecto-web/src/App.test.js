import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestRunner from 'jest-runner';
import {render,cleanup, getByTestId} from '@testing-library/react';

afterEach(cleanup);

//revisa el renderizado del app
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//revisa el resultadod de una suma
it('canAdd',()=>{
  const {getByTestId}=render(<App/>)
  getByTestId("#b1").click()
  getByTestId("#b+").click()
  getByTestId("#b5").click()
  getByTestId("#b=").click()
  expect(getByTestId("#texto").value).toEqual("6")
});
//revisa el resultadod de una resta
it('canSub',()=>{
  const {getByTestId}=render(<App/>)
  getByTestId("#b5").click()
  getByTestId("#b-").click()
  getByTestId("#b1").click()
  getByTestId("#b=").click()
  expect(getByTestId("#texto").value).toEqual("4")
});
//revisa el resultadod de una multiplicación
it('canMul',()=>{
  const {getByTestId}=render(<App/>)
  getByTestId("#b2").click()
  getByTestId("#b*").click()
  getByTestId("#b5").click()
  getByTestId("#b=").click()
  expect(getByTestId("#texto").value).toEqual("10")
});
//Test Revisa que la suma resultando mas de 999999999 de error
it('ErrorAdd',()=>{
  const {getByTestId}=render(<App/>)
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b+").click()
  getByTestId("#b5").click()
  getByTestId("#b=").click()
  expect(getByTestId("#texto").value).toEqual("ERROR")
});
//Test Revisa que la suma resultando menos de 0 de error
it('ErrorSub',()=>{
  const {getByTestId}=render(<App/>)
  getByTestId("#b5").click()
  getByTestId("#b-").click()
  getByTestId("#b8").click()
  getByTestId("#b=").click()
  expect(getByTestId("#texto").value).toEqual("ERROR")
});
//Test Revisa que la multiplicacion resultando mas de 999999999 de error
it('ErrorMul',()=>{
  const {getByTestId}=render(<App/>)
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b9").click()
  getByTestId("#b*").click()
  getByTestId("#b5").click()
  getByTestId("#b=").click()
  expect(getByTestId("#texto").value).toEqual("ERROR")
});