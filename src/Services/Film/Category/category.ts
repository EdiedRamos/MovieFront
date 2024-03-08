import axios, { AxiosResponse } from "axios";

import type { CategoriesT } from "@/Types";
import { LocalData } from "@/Domain/Utils";
import { UserCategoryService } from "../UserCategory/userCategory";

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
  async getByUserId(): Promise<CategoriesT> {
    const defualtResponse: CategoriesT = [];
    const userId: string | null = LocalData.getUserId();
    if (!userId) return defualtResponse;

    try {
      const categories: CategoriesT = await this.getAll();
      if (categories.length === 0) return defualtResponse;

      const userCategories: Array<string> =
        await UserCategoryService.getByUserId();
      if (userCategories.length === 0) return defualtResponse;

      return categories.filter((category) =>
        userCategories.includes(category.id)
      );
    } catch {
      return defualtResponse;
    }
  },
};
