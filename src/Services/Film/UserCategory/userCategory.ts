import axios, { AxiosResponse } from "axios";

import type { UserCategoriesT, UserCategoryT } from "@/Types";
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

  async getByUserId(): Promise<Array<string>> {
    const defaultResponse: Array<string> = [];
    const userId: string | null = LocalData.getUserId();
    if (!userId) return defaultResponse;

    try {
      const userCategories: UserCategoriesT = await this.getAll();
      if (userCategories.length === 0) return defaultResponse;

      const userCategory: UserCategoryT | undefined = userCategories.find(
        (userCategory) => userCategory.user_id === userId
      );
      if (!userCategory) return defaultResponse;

      return userCategory.category_ids;
    } catch {
      return defaultResponse;
    }
  },
};
