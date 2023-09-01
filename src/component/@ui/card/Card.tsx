import { PropsWithChildren } from "react";
import { cardStyle } from "./card.css";

const Card = ({ children }: PropsWithChildren) => {
  return <div className={cardStyle}>{children}</div>;
};

export default Card;
