import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ITariff } from './ITariff';
import Tariff from './Tariff/Tariff';
import { Row, Container, Button, ButtonGroup, Col } from 'react-bootstrap';
import { faFilter, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/Tariffs.module.scss';

const Tariffs = () => {
  const [tariffs, setTariffs] = useState<ITariff[]>([]);
  const [filterSelected, setFilterSelected] = useState<string>('Download');
  const [sortSelected, setSortSelected] = useState<boolean>(true); // True - ASC, False - DESC

  const getTariffs = async () => {
    const data = await axios({
      method: 'get',
      url: 'https://resultlistapi.azurewebsites.net/Tariff',
      responseType: 'stream',
    });

    setTariffs(data.data);
  };

  useEffect(() => {
    getTariffs();
  }, []);

  const handleFilter = (option: any) => {
    let test;
    if (!sortSelected) {
      // ASC
      test = tariffs.sort((a: any, b: any) => (a[option] > b[option] ? 1 : b[option] > a[option] ? -1 : 0));
      setSortSelected(!sortSelected);
    } else {
      // DESC
      test = tariffs.sort((a: any, b: any) => (a[option] < b[option] ? 1 : b[option] < a[option] ? -1 : 0));
      setSortSelected(!sortSelected);
    }
    setTariffs([...test]);
    setFilterSelected(option);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12} md={12} xl={12}>
            <div className='mt-3 mb-3 d-grid gap-2'>
              <ButtonGroup>
                <Button variant='dark' onClick={() => handleFilter('Download')}>
                  {filterSelected === 'Download' ? <FontAwesomeIcon icon={sortSelected === true ? faCaretUp : faCaretDown} height={15} /> : null}
                  <span>Download</span>
                </Button>
                <Button variant='dark' onClick={() => handleFilter('Upload')}>
                  {filterSelected === 'Upload' ? <FontAwesomeIcon icon={sortSelected === true ? faCaretUp : faCaretDown} height={15} /> : null}
                  <span> Upload </span>
                </Button>
                <Button variant='dark' onClick={() => handleFilter('Price')}>
                  {filterSelected === 'Price' ? <FontAwesomeIcon icon={sortSelected === true ? faCaretUp : faCaretDown} height={15} /> : null}
                  <span> Price </span>
                </Button>
                <Button variant='dark' onClick={() => handleFilter('Name')}>
                  {filterSelected === 'Name' ? <FontAwesomeIcon icon={sortSelected === true ? faCaretUp : faCaretDown} height={15} /> : null}
                  <span> Name </span>
                </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
        <Col sm={12} md={12} xl={12} className={styles.tariffContainer}>
          {tariffs.map((tariff, index) => (
            <Tariff key={index} {...tariff} index={index} />
          ))}
        </Col>
      </Container>
    </>
  );
};

export default Tariffs;
