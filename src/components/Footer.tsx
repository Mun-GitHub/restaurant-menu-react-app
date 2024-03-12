import React from "react";
import { useSelector } from "react-redux";
import { Heading } from "@contentstack/venus-components";

const Footer: React.FC = () => {
  const footerData: any = useSelector((state: any) => state.main.footerData);
  const { title } = footerData;
  return (
    <div className="footer">
      <Heading text={`© 2024 ${title}`} tagName="h2" />
    </div>
  );
};

export default Footer;
