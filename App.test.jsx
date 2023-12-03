import { render, screen } from "@testing-library/react";
import Header from "./src/Components/Header";

test("renders Little Lemon Header", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();
});