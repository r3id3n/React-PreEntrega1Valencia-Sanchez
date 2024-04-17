import { render, waitFor } from "@testing-library/react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api"; // Assuming you have an API function to fetch product by ID
import ItemDetailContainer from "./ItemDetailContainer";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));

jest.mock("../../api", () => ({
  getProductById: jest.fn(),
}));

describe("ItemDetailContainer", () => {
  beforeEach(() => {
    useParams.mockReturnValue({ itemId: "123" });
    getProductById.mockResolvedValue({ id: "123", name: "Product 1" });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the item detail component with the fetched product", async () => {
    render(<ItemDetailContainer />);

    await waitFor(() => {
      expect(getProductById).toHaveBeenCalledWith("123");
      expect(screen.getByText("Product 1")).toBeInTheDocument();
    });
  });

  it("should handle error when fetching the product", async () => {
    getProductById.mockRejectedValue(new Error("Failed to fetch product"));

    render(<ItemDetailContainer />);

    await waitFor(() => {
      expect(getProductById).toHaveBeenCalledWith("123");
      expect(screen.getByText("Error: Failed to fetch product")).toBeInTheDocument();
    });
  });
});