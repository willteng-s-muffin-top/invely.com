import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
// import Features from '../components/Features';
// import BlogRoll from '../components/BlogRoll';

export const IndexPageTemplate = ({
  image,
  title,
  description,
}) => (
  <div className="landing-container">
    <div
      className="landing-container-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
      </div>
    </div>
    <section className="section">
      <div className="content">
        {/* <h1 className="title">{mainpitch.title}</h1>
        <h3 className="subtitle">{mainpitch.description}</h3> */}
        <div>
          <h3 className="">{title}</h3>
          <p>{description}</p>
        </div>
        <br />
        {/* <div className="landing-page-blog">
          <h3>블로그</h3>
          <BlogRoll />
        </div> */}
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        description
      }
    }
  }
`
