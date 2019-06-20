import React from 'react';

import Layout from '../../components/Layout';
import PortfolioRoll from '../../components/PortfolioRoll';

export default class PortfolioIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <PortfolioRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
