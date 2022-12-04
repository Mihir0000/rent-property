import React, { useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import './RentHouse.css';
import { BiChevronDown } from 'react-icons/bi';
import { CgCalendarDates } from 'react-icons/cg';
import HouseCard from '../../Components/HouseCard/HouseCard';
import HouseData from '../../data.json';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RentHouse = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [price, setPrice] = useState('');
  const [property, setProperty] = useState('');
  const [cardData, setCardData] = useState(HouseData.house);

  const priceItem = [
    {
      rate: 'Bellow $1000',
      lowValue: 0,
      highValue: 1000,
    },
    {
      rate: '$1001 - $2000',
      lowValue: 1001,
      highValue: 2000,
    },
    {
      rate: '$2001 - $4000',
      lowValue: 2001,
      highValue: 4000,
    },
    {
      rate: 'Above $4000',
      lowValue: 4000,
      highValue: 9999999999,
    },
  ];
  const propertyItem = [{ type: 'house' }, { type: 'room' }, { type: 'hotel' }];

  const searchClick = () => {
    let data = HouseData.house;
    let maxval = 0,
      minval = 0;
    if (price.length > 0) {
      const priceData = priceItem.filter((i) => i.rate === price);
      maxval = priceData[0].highValue;
      minval = priceData[0].lowValue;
    }
    if (property.length > 0 && price.length > 0) {
      let rr = data.filter((i) => i.type === property);
      const newData = [];
      for (let i = 0; i < rr.length; i++) {
        if (rr[i].price >= minval && rr[i].price <= maxval) {
          newData.push(rr[i]);
        }
      }
      setCardData(newData);
    } else if (property.length > 0) {
      let rr = data.filter((i) => i.type === property);
      setCardData(rr);
    } else if (price.length > 0) {
      const newData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].price >= minval && data[i].price <= maxval) {
          newData.push(data[i]);
        }
      }
      setCardData(newData);
    }
  };
  return (
    <>
      <Header />
      <Container>
        <Row className="mt-3">
          <Col sm={7}>
            <h3>Search Properties to Rent</h3>
          </Col>
          <Col sm={5} className="d-flex justify-content-end">
            <div className="border rounded px-4 align-self-center py-2">
              Search With SearchBar{' '}
              <span>
                <BiChevronDown />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className=" my-3 border bg-white rounded">
          <Col sm={10}>
            <Row>
              <Col className="p-3 ">
                <p className="m-0 border-end newFont">Location</p>
                <p className="m-0 border-end">New York, USA</p>
              </Col>
              <Col className="p-3">
                <p className="m-0 border-end newFont">When</p>
                <p className="m-0 border-end">
                  {/* Select Move-in Date{' '} */}
                  <span className="d-flex">
                    <DatePicker
                      className="datePicker"
                      selected={startDate}
                      showTimeSelect
                      dateFormat="Pp"
                      onChange={(date) => setStartDate(date)}
                    />
                    <CgCalendarDates className="fs-5 align-self-center me-1" />
                  </span>
                </p>
              </Col>
              <Col className="p-3">
                <p className="m-0 ms-2 ps-1 border-end newFont">Price</p>
                <Dropdown className="border-end">
                  {price.length > 0 ? (
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="bg-white text-dark border-0 m-0"
                    >
                      {price}
                    </Dropdown.Toggle>
                  ) : (
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="bg-white text-dark border-0 m-0"
                    >
                      Select Price
                    </Dropdown.Toggle>
                  )}

                  <Dropdown.Menu>
                    {priceItem.map((item, index) => {
                      return (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setPrice(item.rate)}
                        >
                          {item.rate}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col className="p-3 ">
                <p className="m-0 ms-2 ps-1 border-end newFont">
                  Property Type
                </p>
                <Dropdown className="border-end">
                  {property.length > 0 ? (
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="bg-white text-dark border-0 m-0 text-capitalize"
                    >
                      {property}
                    </Dropdown.Toggle>
                  ) : (
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="bg-white text-dark border-0 m-0"
                    >
                      Select Property
                    </Dropdown.Toggle>
                  )}
                  <Dropdown.Menu>
                    {propertyItem.map((item, index) => {
                      return (
                        <Dropdown.Item
                          className="text-capitalize"
                          key={index}
                          onClick={() => setProperty(item.type)}
                        >
                          {item.type}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col sm={2} className="text-center m-auto">
            <Button className="" onClick={searchClick}>
              Search
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="lastCont">
        <Row>
          {cardData.length > 0 ? (
            cardData.map((item, index) => {
              return (
                <Col key={index} sm={4} className="mb-2">
                  <HouseCard house={item} />
                </Col>
              );
            })
          ) : (
            <div>
              <h3 className="text-center text-warning">Data Not Found</h3>
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default RentHouse;
