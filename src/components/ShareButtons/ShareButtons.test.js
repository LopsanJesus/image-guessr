import React from "react";
import { shallow } from "enzyme";
import ShareButtons from "./ShareButtons";

describe("ShareButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ShareButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
