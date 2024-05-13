import React from 'react';
import { graphql, Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';
import { IconBookmark } from '@components/icons';

const StyledMainContainer = styled.main`
  & > header {
    margin-bottom: 100px;
    text-align: center;
  }

  h1 {
    color: var(--blog-text-h1);
  }

  footer {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    margin-top: 20px;
  }
`;

const StyledGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  margin-top: 30px;
  margin-bottom: 40px;
  position: relative;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const StyledPost = styled.li`
  transition: var(--transition);
  cursor: default;

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .post__inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .post__inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    transition: var(--transition);
    background-color: var(--blog-tile-background-colour);
    header,
    a {
      width: 100%;
    }
  }

  .post__icon {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 30px;
    margin-left: -5px;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  .post__title {
    margin: 0 0 10px;
    color: var(--blog-tile-text-title);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .post__desc {
    color: var(--blog-tile-text-description);
    font-size: 17px;
  }

  .post__date {
    color: var(--blog-tile-text-date);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    text-transform: uppercase;
  }

  .inline-link {
    display: inline-block;
    position: relative;
    color: blue;
    transition: var(--transition);

    &:hover,
    &:focus-visible {
      color: blue;
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: blue !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: blue;
      opacity: 0.5;
      @media (prefers-reduced-motion: no-preference) {
        transition: var(--transition);
      }
    }
  }

  ul.post__tags {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    list-style: none;
    
    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;
      
      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const PostGrid = ({ posts }) => {

  return (
    <StyledGrid>
      {posts.map(({ node }, i) => {
        const { frontmatter } = node;
        const { title, description, slug, date, tags } = frontmatter;
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
          month: 'short', day: 'numeric'}).replace(/ /g, ' ');

        return (
          <StyledPost key={i}>
            <div className="post__inner">
              <header>
                <div className="post__icon">
                  <IconBookmark />
                </div>
                <h5 className="post__title">
                  <Link to={slug}>{title}</Link>
                </h5>
                <p className="post__desc">{description}</p>
              </header>

              <footer>
                <span className="post__date">{formattedDate}</span>
                <ul className="post__tags">
                  {tags.map((tag, i) => (
                    <li key={i}>
                      <Link to={`/blog/tags/${kebabCase(tag)}/`} className="inline-link">
                        #{tag}
                      </Link>
                    </li>
                  ))}
                </ul>
              </footer>
            </div>
          </StyledPost>
        );
      })}
    </StyledGrid>
  )
};

const BlogPage = ({ location, data }) => {
  const group = data.allMarkdownRemark.group;
  var prevyear = '1998';

  return (
    <Layout location={location}>
      <Helmet title="BlogPage" />

      <StyledMainContainer>
        <header>
          <h1 className="big-heading">Blog</h1>
          <p className="subtitle">
            <a>
              a collection of my writings
            </a>
          </p>
        </header>

        {group.length > 0 &&
          group.map(({ edges }) => {

            const groupyear = edges[0].node.frontmatter.year;

            if (prevyear === groupyear) {
              prevyear = groupyear;
              return (
                <PostGrid posts={edges} />
              )
            } else {
              prevyear = groupyear;
              return (
                <div>
                  <h1>{groupyear}</h1>
                  <PostGrid posts={edges} />
                </div>
              )
            }
          })}

      </StyledMainContainer>
    </Layout>
  );
};

BlogPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default BlogPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/content/posts/"}, frontmatter: {draft: {ne: true}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      group(field: {frontmatter: {year: SELECT}}) {
        edges {
          node {
            frontmatter {
              title
              description
              slug
              date
              tags
              draft
              year
            }
            html
          }
        }
      }
    }
  }
`;