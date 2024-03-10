import { Box } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type RatingT = {
  rating: number;
};

// TODO: move this to the right folder
export const StarRating = ({ rating }: RatingT): JSX.Element => {
  return (
    <Box display="flex" alignItems="center" gap={"1"}>
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} />;
          }
          return <BsStar key={i} />;
        })}
    </Box>
  );
};
