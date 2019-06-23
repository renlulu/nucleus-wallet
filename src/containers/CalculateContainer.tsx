/**
 * This file is part of nucleus-wallet.
 * Copyright (c) 2018 - present Zilliqa Research Pte. Ltd.
 *
 * nucleus-wallet is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * nucleus-wallet is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * nucleus-wallet.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import { Card, Row, Col } from 'reactstrap';
import { useAsync } from 'react-async';
import { Spinner } from 'accessible-ui';
import Layout from '../components/layout';
import CalculateForm from '../components/calculate-form';

const TxCalculatorContainer = ({ zilContext }) => {
  const { getMinGasPrice } = zilContext;
  const { data, isLoading } = useAsync({ promiseFn: getMinGasPrice });
  return (
    <Layout zilContext={zilContext}>
      <div className="p-4">
        <Card>
          <div className="py-5">
            <div className="px-4 text-center">
              <h2 className="pb-2">
                <b>{'Transaction Fee Calculator'}</b>
              </h2>
              <Row>
                <Col xs={12} sm={12} md={12} lg={8} className="mr-auto ml-auto">
                  {isLoading ? (
                    <div className="align-items-center justify-content-center py-5">
                      <Spinner />
                    </div>
                  ) : (
                    <CalculateForm minGasPriceInQa={data} />
                  )}
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default TxCalculatorContainer;
