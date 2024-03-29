import React from "react";
import { shallow } from "enzyme";

import Backdrop from "./Backdrop";

describe("<Backdrop />", () => {
  it("should render if props.show is passed in", () => {
    const wrapper = shallow(<Backdrop show onClicked={() => {}} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("should not render if props.show is false", () => {
    const wrapper = shallow(<Backdrop show={false} onClicked={() => {}} />);
    expect(wrapper.find("div")).toHaveLength(0);
  });
});
