import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { SearchScreen } from "../../../component/search/SearchScreen";
describe("Pruebas en <SearchScreen />", () => {
  test("debe de mostrarse correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".aviso").text().trim()).toBe("Search a hero");
  });
  test("debe de mostrar al heroe y el input con el valor del queryString", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find("input").prop("value")).toBe("batman");
    expect(wrapper.find("HeroCard").exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar un error si no se encuentra el hero", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=toretto"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find(".aviso").text().trim()).toBe(
      "No hero found with toretto"
    );
    expect(wrapper.find("HeroCard").exists()).toBe(false);
  });

  test("debe de llamar el push del history", () => {
    const history = { push: jest.fn() };
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        />
      </MemoryRouter>
    );
    wrapper.find("input").simulate("change", {
      target: {
        name: "search",
        value: "batman",
      },
    });
    wrapper.find("form").prop("onSubmit")({
      preventDefault() {},
    });
    expect(history.push).toHaveBeenCalledWith('?q=batman')
  });
});
