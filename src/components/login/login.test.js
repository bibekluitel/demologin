import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import LoginComponnet from './loginComponent';

configure({ adapter: new Adapter() });

describe("test sidebarData", () => {
    let mountedLoginComponent;

    const LoginFunc = () => {
        if (!mountedLoginComponent) {
            mountedLoginComponent = mount(<LoginComponnet />);
        }
        return mountedLoginComponent;
    }

    const LoginFuncshaloow = () => {
        if (!mountedLoginComponent) {
            mountedLoginComponent = shallow(<LoginComponnet />);
        }
        return mountedLoginComponent;
    }

    beforeEach(() => { mountedLoginComponent = undefined; });

    // All tests will go here

    it('should renders div always', () => {
        const divs = LoginFunc().find("div");
        expect(divs.length).toBeGreaterThan(0);
    });

    it('should update value after upadte in state', () => {
        // LoginFunc().setState({ userName: 'bibek' });
        LoginFunc().find('input.usernameinput').simulate('change', { value: 'bibek' });

        expect(LoginFunc().state().userName).toEqual('');
    });



    it('shaloow rendering test', () => {
        beforeEach();
        LoginFuncshaloow().setState({ userName: 'bibek' });
        expect(LoginFuncshaloow().find('input').length).toEqual(2);
    });

    // it('shaloow rendering test for inuput', () => {
    //     // beforeEach();
    //     // LoginFuncshaloow().setState({ userName: 'bibek' });
    //     // expect(LoginFuncshaloow().find('input.usernameinput').at(0).getElement().value).toEqual('');
    // });
});