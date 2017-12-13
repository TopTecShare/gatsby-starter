import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../starter/Layout';
import Article from '../starter/Article';
import Heading from '../starter/Heading';
import Bodytext from '../starter/Bodytext';
import Header from '../starter/Header';
import Footer from '../starter/Footer';
import Seo from '../starter/Seo';

import config from '../content/meta/config';
import menu from '../content/meta/menu';

const NotFoundPage = props => {
  const {
    data: {
      notFound: { html: notFoundHTML },
    },
  } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
    siteImage,
  } = config;

  return (
    <Layout>
      <Header title={headerTitle} subTitle={headerSubTitle} menuItems={menu} />
      <main>
        <Article>
          <Heading title="NOT FOUND" />
          <Bodytext html={notFoundHTML} />
        </Article>
      </main>
      <Footer />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
        image={siteImage}
      />
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query {
    notFound: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/notFound/" }
    ) {
      html
    }
  }
`;
