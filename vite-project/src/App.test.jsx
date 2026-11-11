import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders every portfolio section", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /krithik maran/i })).toBeInTheDocument();
    for (const title of [
      "Experience",
      "Education",
      "Enterprise Systems",
      "Engineering & Intelligence",
      "Cloud Infrastructure Project",
      "Website Architecture & CI/CD",
    ]) {
      expect(screen.getByRole("heading", { level: 2, name: title })).toBeInTheDocument();
    }
    expect(document.querySelectorAll("section")).toHaveLength(7);
  });

  it("links to the resume at a stable URL and to social profiles", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute("href", "/resume.pdf");
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/krithikmaran");
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "https://linkedin.com/in/krithikmaran");
    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    }
  });

  it("starts from the theme the pre-paint script set", () => {
    document.documentElement.setAttribute("data-theme", "light");
    render(<App />);
    expect(screen.getByRole("button", { name: /switch to dark theme/i })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
  });

  it("toggles the theme and remembers the choice", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");

    await user.click(screen.getByRole("button", { name: /switch to light theme/i }));
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(localStorage.getItem("theme")).toBe("light");

    await user.click(screen.getByRole("button", { name: /switch to dark theme/i }));
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("section navigation works from the keyboard", async () => {
    const user = userEvent.setup();
    render(<App />);
    const nextButtons = screen.getAllByRole("button", { name: "Next Section" });
    expect(nextButtons).toHaveLength(6);
    const backButton = screen.getByRole("button", { name: "Back to Top" });

    nextButtons[0].focus();
    await user.keyboard("{Enter}");
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
    expect(Element.prototype.scrollIntoView.mock.contexts[0].id).toBe("section-1");

    backButton.focus();
    await user.keyboard(" ");
    expect(Element.prototype.scrollIntoView.mock.contexts[1].id).toBe("section-0");
  });

  it("logo is a keyboard-accessible Home button", async () => {
    const user = userEvent.setup();
    render(<App />);
    const logo = screen.getByRole("button", { name: "Home" });
    expect(logo).toContainElement(screen.getByAltText("Krithik Maran logo"));
    logo.focus();
    await user.keyboard("{Enter}");
    expect(Element.prototype.scrollIntoView.mock.contexts[0].id).toBe("section-0");
  });

  it("does not crash when localStorage is unavailable", async () => {
    const user = userEvent.setup();
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = () => {
      throw new Error("blocked");
    };
    try {
      render(<App />);
      await user.click(screen.getByRole("button", { name: /switch to light theme/i }));
      expect(document.documentElement).toHaveAttribute("data-theme", "light");
    } finally {
      Storage.prototype.setItem = original;
    }
  });
});

describe("Website Architecture section", () => {
  it("only claims what the project actually uses", () => {
    render(<App />);
    expect(screen.queryByText("React 19")).not.toBeInTheDocument();
    expect(screen.getByText("React 18")).toBeInTheDocument();
  });
});
