import React from "react";
import { mount } from "enzyme";
import { LoginScreen } from "../../../component/login/LoginScreen";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";

describe("Pruebas en <LoginScreen />", () => {
  const historyMock = {
    replace: jest.fn(),
  };
  const dispatch = jest.fn();

  const wrapper = mount(
    <AuthContext.Provider value={{ dispatch }}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );
  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe llamar al dispatch y history.replace", () => {
    const handleClick = wrapper.find("button").prop('onClick');
    handleClick()

    expect(dispatch).toHaveBeenCalledWith({
        payload: { name: "" },
        type: types.login,
      });

      expect(historyMock.replace).toHaveBeenCalledWith('/');
      localStorage.setItem( 'lastPath', '/awita');
      handleClick();

      expect(historyMock.replace).toHaveBeenCalledWith('/awita')
  });
});
