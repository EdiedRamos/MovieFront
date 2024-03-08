import axios, { AxiosResponse } from "axios";

import type { CategoriesT } from "@/Types";

export const CategoryService = {
  async getAll(): Promise<CategoriesT> {
    try {
      const response: AxiosResponse<CategoriesT> = await axios.get(
        "https://react-redux-crud-75194-default-rtdb.firebaseio.com/categories.json"
      );
      return response.data;
    } catch {
      return [];
    }
  },
};
