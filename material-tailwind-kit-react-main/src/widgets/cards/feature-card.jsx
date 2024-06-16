import PropTypes from "prop-types";
import { Card, CardBody, Typography, IconButton } from "@material-tailwind/react";

export function FeatureCard({ color, icon, title, description, img }) {
  return (
    <Card className="rounded-lg shadow-lg shadow-gray-500/10">
      <CardBody className="px-8 text-center">
      <div className="mb-1">
          <img src={img} alt={title} className="w-50 h-40 mx-auto item-menu" style={{marginBottom:'5dp'}}/>
        </div>
    
        <Typography variant="normal" className="mb-1 font-poppins" color="blue-gray" style={{textAlign:'center'}}>
          {title}
        </Typography>
        <Typography className="font-normal text-blue-gray-600">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  img: PropTypes.string.isRequired, // Tambahkan properti img sebagai string yang wajib
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
