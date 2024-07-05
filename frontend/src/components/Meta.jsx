import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword } />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Proshop",
  description: "We sell the best products for cheap prices",
  keywords: "electronics, buy electronic products, cheap electronic products",
};

export default Meta;
