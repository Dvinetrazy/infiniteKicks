import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { StarIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

export function FeatureCards({ title, description, img, rating, category }) {
  const navigate = useNavigate();
  const isHidden = true;

  const formattedDescription = typeof description === 'number' ? description.toLocaleString('id-ID') : description;

  const handleCardClick = () => {
    navigate(`/product-detail/${category}/${encodeURIComponent(title)}`);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i} className="w-5 h-5 text-black-500" />);
    }
    return stars;
  };

  return (
    <Card className="rounded-lg shadow-lg shadow-gray-500/10" onClick={handleCardClick}>
      <CardBody className="px-1 text-center">
        <div className="mb-2" style={{ background: '#D9D9D9', maxWidth: '500px', height: '40vh' }}>
          <img src={img} alt={title} className="w-50 h-50 mx-auto item-menu" style={{ marginBottom: '5px' }} />
        </div>
        <Typography className="mb-1 font-poppins" color="blue-gray" style={{ textAlign: 'center', fontSize: '15px' }}>
          {title}
        </Typography>
        {rating > 0 && (
          <div className="flex justify-center mt-1">{renderStars()}</div>
        )}
        <Typography variant="paragraph" className="font-normal text-blue-gray-600" style={{ marginTop: '5px' }}>
          {`Rp. ${formattedDescription}`}
        </Typography>
        <Typography variant="paragraph" className="font-normal text-blue-gray-600" style={{ display: isHidden ? 'none' : 'block' }} hidden>
          {category}
        </Typography>
      </CardBody>
    </Card>
  );
}

FeatureCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default FeatureCards;
