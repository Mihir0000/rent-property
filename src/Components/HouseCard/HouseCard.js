import React from 'react';
import { Card } from 'react-bootstrap';
import { GiKitchenTap } from 'react-icons/gi';
import { IoBedOutline } from 'react-icons/io5';
import { RxGroup } from 'react-icons/rx';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

const HouseCard = ({ house }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={house.image} />
        <Card.Body className="position-relative">
          <div className="position-absolute  end-0 fs-4">
            <BsSuitHeart /> <BsSuitHeartFill />
          </div>
          <Card.Title className="text-primary">
            ${house.price} <span className="cardSpan">/month</span>
          </Card.Title>
          <Card.Title>{house.title}</Card.Title>
          <Card.Text>{house.location}</Card.Text>
          <hr />
          <div className="d-flex flex-row justify-content-between newFont mb-2">
            <p className="m-0">
              {' '}
              <IoBedOutline className="text-primary" /> {house.beds} Beds
            </p>
            <p className="m-0">
              {' '}
              <GiKitchenTap className="text-primary" /> {house.bathrooms}{' '}
              Bathrooms
            </p>
            <p className="m-0">
              {' '}
              <RxGroup className="text-primary" /> {house.length}{' '}
              <small>x</small> {house.width} m<sup>2</sup>
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HouseCard;
