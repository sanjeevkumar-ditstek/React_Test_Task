import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Counter Testing", () => {
  test("renders increment button`", () => {
    render(<App />);
    const incrementButton = screen.getByTitle(/increment/i);
    expect(incrementButton).toBeInTheDocument();
  });

  test("increment button text should be +1`", () => {
    render(<App />);
    const incrementButton = screen.getByTitle(/increment/i);
    expect(incrementButton).toHaveTextContent("+1");
  });

  test("renders decrement button", () => {
    render(<App />);
    const incrementButton = screen.getByTitle(/decrement/i);
    expect(incrementButton).toBeInTheDocument();
  });

  test("initial count should be 0", () => {
    render(<App />);
    const incrementButton = screen.getByTitle(/count/i);
    expect(incrementButton).toHaveTextContent("0");
  });

  test("increment button text should be -1 ", () => {
    render(<App />);
    const incrementButton = screen.getByTitle(/decrement/i);
    expect(incrementButton).toHaveTextContent("-1");
  });
});

describe("Increment Testing", () => {
  test("render the click event of increment button and increment counter value", () => {
    render(<App />);
    const incrementButton = screen.getByTitle(/increment/i);
    userEvent.click(incrementButton);
    const countElement = screen.getByTitle(/count/i);
    expect(countElement).toHaveTextContent("1");
  });
});

describe("Decrement Testing", () => {
  // as click event fired on increment button count value is 1
  test("render the click event of decrement button and decrement counter value", () => {
    render(<App />);
    const decrementButton = screen.getByTitle(/decrement/i);
    userEvent.click(decrementButton);
    const countElement = screen.getByTitle(/count/i);
    expect(countElement).toHaveTextContent("0");
  });
});
