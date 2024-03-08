import { URLS } from "@/Domain/Constants";
import { RootState } from "@/Store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

type ReturnProps = {
  navItems: Array<NavItem>;
};

export const NavItemsController = (): ReturnProps => {
  const [navItems, setNavItems] = useState<Array<NavItem>>([]);
  const categories = useSelector(
    (state: RootState) => state.filmReducer.categories
  );

  useEffect(() => {
    if (categories.length === 0) return;
    setNavItems((prev) => {
      // * avoid duplications
      if (prev.some((item) => item.label === "Categorías")) return prev;
      return [
        ...prev,
        {
          label: "Categorías",
          children: categories.map((category) => ({
            label: category.name,
            href: URLS.CATEGORY.replace(":id", category.id),
          })),
        },
      ];
    });
  }, [categories]);

  return { navItems };
};
