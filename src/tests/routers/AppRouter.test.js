import React from "react";
import { mount } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas en <AppRouter />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };

  test("debe de mostrar el login si no está autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el componente de marvel si está autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        name: "Sam",
        logged: true,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.find('h1').text()).toBe('Heroes')
  });
});
