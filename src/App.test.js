import { render, screen } from "@testing-library/react";
import App from "./App";
import Carousel from "./Carousel";
import Card from "./Card";
import photos from "./photos.js";

test("renders learn react link", () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});

test("renders each components work properly", () => {
  render(<Card />);
  render(<Carousel photos={photos} title="" />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<Carousel photos={photos} title="" />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
