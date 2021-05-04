import React from "react";
import { shallow } from "enzyme";
import ResetProgressModal from "./ResetProgressModal";

describe("ResetProgressModal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ResetProgressModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
