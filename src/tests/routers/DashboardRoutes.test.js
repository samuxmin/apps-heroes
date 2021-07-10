import React from "react";
import { mount } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter as Router } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";

describe("Pruebas en <DashboarRoutes />", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      name: "sam",
      logged: true,
    },
  };

  test("debe mostrarse correctamente", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <Router>
          <DashboardRoutes />
        </Router>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("span").text()).toBe("sam");
  });
});
