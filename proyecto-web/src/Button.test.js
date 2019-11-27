import React from 'react';
import ReactDOM from 'react-dom';
import ButtonLol from './Button';
import {render} from '@testing-library/react';
import {getByTestId} from '@testing-library/dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonLol />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//revisa que el boton envíe el valor correcto


it('Devuele el valor',()=>{
    var r=0;
    const a = function(a){
        r=a;
    }
    const button = render((<ButtonLol symbol="3" callClick={a}/>));
    document.getElementById("#argh").click()
    expect(r).toEqual("3");
})