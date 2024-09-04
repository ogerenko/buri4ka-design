import "./BlockBg.scss";
import React from "react";

type Props = {
  title: string;
  id: string;
  children: React.ReactNode;
};

export const BlockBg: React.FC<Props> = ({ title, id, children }) => {
  return (
    <div className="block-bg" id={id}>
      <div className="block-bg__content">
      <div className="block-bg__bg"></div>
        <div className="block-bg__title">{title}</div>
        <div className="block-bg__children">{children}</div>
      </div>
    </div>
  );
};
