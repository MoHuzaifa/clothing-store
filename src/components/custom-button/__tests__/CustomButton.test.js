import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import CustomButton from "../CustomButton";

afterEach(() => {
  cleanup();
});

test(`should render custom button with ONLY 'google-sign-in' class`, () => {
  render(<CustomButton isGoogleSignIn>Sign in with Google</CustomButton>);
  const customButtonElement = screen.getByTestId(`customButton-1`);
  expect(customButtonElement).toBeInTheDocument();
  expect(customButtonElement).toHaveTextContent(`Sign in with Google`);
  expect(customButtonElement).toHaveClass("google-sign-in");
  expect(customButtonElement).not.toHaveClass("inverted");
});

test(`should render custom button with ONLY 'inverted' class`, () => {
  render(<CustomButton inverted>ADD TO CART</CustomButton>);
  const customButtonElement = screen.getByTestId(`customButton-1`);
  expect(customButtonElement).toBeInTheDocument();
  expect(customButtonElement).toHaveTextContent(`ADD TO CART`);
  expect(customButtonElement).toHaveClass("inverted");
  expect(customButtonElement).not.toHaveClass("google-sign-in");
});

test(`matches snapshot`, () => {
  const tree = renderer
    .create(<CustomButton isGoogleSignIn>Sign in with Google</CustomButton>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
