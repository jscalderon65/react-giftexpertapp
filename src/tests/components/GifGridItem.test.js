import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../Components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const img = {
    url: "https://sitechecker.pro/wp-content/uploads/2017/12/URL-meaning.png",
    title: "sisas",
  };
  const wrapper = shallow(<GifGridItem img={img} />);
  test("Se debe mostrar correctamente el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe tener un párrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(img.title);
  });
  test("Debe tener la url del objeto img", () => {
    const image = wrapper.find("img");
    expect(image.props().src.trim()).toBe(img.url);
    expect(image.props().alt.trim()).toBe(img.title);
  });
});
