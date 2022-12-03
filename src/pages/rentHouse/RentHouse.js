import React from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import './RentHouse.css';
import { BiChevronDown } from 'react-icons/bi';
import HouseCard from '../../Components/HouseCard/HouseCard';
import HouseData from '../../data.json';

const RentHouse = () => {
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
                  Select Move-in Date{' '}
                  <span>
                    <BiChevronDown />
                  </span>
                </p>
              </Col>
              <Col className="p-3">
                <p className="m-0 ms-2 ps-1 border-end newFont">Price</p>
                <Dropdown className="border-end">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="bg-white text-dark border-0 m-0"
                  >
                    Dropdown Button
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Bellow $1000</Dropdown.Item>
                    <Dropdown.Item>$1001 - $2000</Dropdown.Item>
                    <Dropdown.Item>$2001 - $4000</Dropdown.Item>
                    <Dropdown.Item>Above $4001</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col className="p-3 ">
                <p className="m-0 ms-2 ps-1 border-end newFont">
                  Property Type
                </p>
                <Dropdown className="border-end">
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="bg-white text-dark border-0 m-0"
                  >
                    Dropdown Button
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
          <Col sm={2} className="text-center m-auto">
            <Button className="">Search</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {HouseData &&
            HouseData.house.map((item, index) => {
              return (
                <Col key={index} sm={4} className="mb-2">
                  <HouseCard house={item} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default RentHouse;
