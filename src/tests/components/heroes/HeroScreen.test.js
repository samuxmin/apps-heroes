import { HeroScreen } from "../../../component/heroes/HeroScreen";
import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
describe("Pruebas en <HeroScreen />", () => {
  const historyMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test("debe de mostrar el componente <Redirect /> si no hay argumentos", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroScreen history={historyMock} />
      </MemoryRouter>
    );
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });
  test("debe mostrar un hero si el parámetro existe y se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find(".heroscreen").exists()).toBe(true);
    expect(wrapper.find("img").prop("src")).toBe(
      `../../assets/heroes/dc-batman.jpg`
    );
  });
  test('debe regresar a la pantalla anterior con push', () => {
    const historyMock = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Route path="/hero/:heroeId" component={ () => <HeroScreen history={historyMock}/>} />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();

    expect(historyMock.push).toHaveBeenCalledWith('/');
    expect(historyMock.goBack).not.toHaveBeenCalled();
  })
  test('debe regresar a la pantalla anterior con goBack', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Route path="/hero/:heroeId" component={ () => <HeroScreen history={historyMock}/>} />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();

    expect(historyMock.push).not.toHaveBeenCalled();
    expect(historyMock.goBack).toHaveBeenCalled();
  })
  test('debe de llamar el redirect si el hero no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/dc-superyonz"]}>
        <Route path="/hero/:heroeId" component={ () => <HeroScreen history={historyMock}/>} />
      </MemoryRouter>
    );
    expect(wrapper.text()).toBe('')
  })
  
});
