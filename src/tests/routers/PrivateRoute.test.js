import React from "react";
import { mount } from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <PrivateRoute />", () => {
  const props = {
    location: {
      pathname: "/marvel",
      search: "",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("debe de mostrar el componente si está autenticado y guardad localStorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={true}
          component={() => <span>hola</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("span").exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel");
  });
  test("debe de bloquear el componente si no está autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={false}
          component={() => <span>hola</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find("span").exists()).toBe(false);
  });
});
