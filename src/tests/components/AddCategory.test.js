import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../Components/AddCategory";

describe("Pruebas en <GifGridItem />", () => {
  const setCategories = () => jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test("Debe mostrarse correctamente", () => {
    
    expect(wrapper).toMatchSnapshot();
  
});
  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    
    input.simulate("change", { target: { value } });
  });
  test("Simulación de limpiar caja de texto", () => {
    const value = "hola mundo";
    
    wrapper.find("input").simulate("change", { target: { value } });
    
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(wrapper.find("input").prop("value")).toBe("");

});
});
