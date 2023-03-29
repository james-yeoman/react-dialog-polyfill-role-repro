import { render, cleanup, screen } from "@testing-library/react";
import App from "./App";

describe("Modal Aria Compliance", () => {
  beforeEach(() => {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) document.removeChild(modalRoot);

    document.body.innerHTML = '<div id="modal-root" />';
  });

  afterEach(() => {
    cleanup();
  });

  test("Modal has the dialog role", () => {
    render(<App />);
    const button = screen.getByTestId("modal-button");

    // Open the modal
    button.click();

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
