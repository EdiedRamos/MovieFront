import axios, { AxiosResponse } from "axios";

import type { CategoriesT, UserCategoriesT, UserCategoryT } from "@/Types";
import { CategoryService } from "../..";
import { LocalData } from "@/Domain/Utils";

export const UserCategoryService = {
  async getAll(): Promise<UserCategoriesT> {
    try {
      const userCategories: AxiosResponse<UserCategoriesT> =
        await axios.get<UserCategoriesT>(
          "https://react-redux-crud-75194-default-rtdb.firebaseio.com/user_category_mapping.json"
        );
      return userCategories.data;
    } catch {
      return [];
    }
  },

  async getByUserId(): Promise<CategoriesT> {
    const defualtResponse: CategoriesT = [];
    const userId: string | null = LocalData.getUserId();
    if (!userId) return defualtResponse;

    try {
      const categories: CategoriesT = await CategoryService.getAll();
      if (categories.length === 0) return defualtResponse;

      const userCategories: UserCategoriesT = await this.getAll();
      if (userCategories.length === 0) return defualtResponse;

      console.log({ userCategories });
      const userCategory: UserCategoryT | undefined = userCategories.find(
        (category) => category.user_id === userId
      );
      if (!userCategory) return defualtResponse;

      return categories.filter((category) =>
        userCategory.category_ids.includes(category.id)
      );
    } catch {
      return defualtResponse;
    }
  },
};
