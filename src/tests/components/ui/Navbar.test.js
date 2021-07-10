import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { Navbar } from "../../../component/ui/Navbar";
import { AuthContext } from "../../../auth/AuthContext";
import { MemoryRouter, Router } from "react-router-dom";
import { types } from "../../../types/types";

describe("Pruebas en <Navbar />", () => {
  const historyMock = {
    replace: jest.fn(),
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "sam",
      logged: true,
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );
  afterAll(() => {
    jest.clearAllMocks();
  });
  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("span").text().trim()).toBe(contextValue.user.name);
  });

  test("debe de llamar el logout y usar history", () => {
    wrapper.find("button").prop("onClick")();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });
    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
