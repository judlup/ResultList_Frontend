import React from 'react';
import { TariffDAO } from './TariffDAO';
import styles from '../../../styles/Tariff.module.scss';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { faCaretRight, faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Tariff = (tariff: TariffDAO) => {
  return (
    <Container key={tariff.index} className={styles.container}>
      <Row xs={12} sm={12}>
        <Col xs={3} md={4} lg={3} className={styles.name}>
          {tariff.Name}
        </Col>
        <Col xs={4} md={4} lg={3}>
          <div className={styles.speed}>
            <span className={styles.title}>Download</span>
            <div className={styles.download}>
              <FontAwesomeIcon icon={faLongArrowAltDown} height={15} /> {tariff.Download} Mbits/s
            </div>
            <span className={styles.title}>Upload</span>
            <div className={styles.upload}>
              <FontAwesomeIcon icon={faLongArrowAltUp} height={15} /> {tariff.Upload} Mbits/s
            </div>
          </div>
        </Col>
        <Col lg={2} className={styles.benefits}>
          <div className={styles.speed}>
            {tariff.Benefits.map((benefit: string) => {
              return <div key={benefit}>{benefit}</div>;
            })}
          </div>
        </Col>
        <Col xs={5} md={4} lg={4} className={styles.price}>
          <strong>{tariff.Price} €</strong>
          <Button variant='outline-dark'>
            <span className={styles.tariffText}>To Tariff </span>
            <FontAwesomeIcon icon={faCaretRight} height={15} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Tariff;
