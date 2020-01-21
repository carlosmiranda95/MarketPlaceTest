import React from "react";
import Project from "../../components/memberships/ListProject";
import renderer from "react-test-renderer";

const dataSource = [{ id: 1, name: "Table" }, { id: 2, name: "available" }];
const direction = "http://www.facebook.com";

describe("Test Snapshot", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Project dataSource={dataSource} direction={direction}></Project>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe("Test Project", () => {
  it("toEquals return", () => {
    const component = renderer.create(
      <Project dataSource={dataSource} direction={direction}></Project>
    );
    expect(component).toReturn(Project(dataSource, direction));
  });
});
