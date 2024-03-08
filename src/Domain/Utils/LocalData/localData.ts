export const LocalData = {
  getUserId: (): string | null => localStorage.getItem("userId"),
};
