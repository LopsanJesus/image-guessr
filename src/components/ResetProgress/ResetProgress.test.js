import React from "react";
import { shallow } from "enzyme";
import ResetProgress from "./ResetProgress";

describe("ResetProgress", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ResetProgress />);
    expect(wrapper).toMatchSnapshot();
  });
});
