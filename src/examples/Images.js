import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/mountains.jpg';
import Image from 'gatsby-image';

const getImages = graphql`
  {
    fixed: file(relativePath: {eq: "galaxy.jpg"}) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "mountains.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    example: file(relativePath: {eq: "mountains.jpg"}) {
      childImageSharp {
        # default maxWidth 800
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

function Images() {
	const data = useStaticQuery(getImages);
	console.log(data);
	return (
		<section className="images">
			<article className='single-image'>
				<h3>basic image</h3>
				<img src={img} width="100%"/>
			</article>
			<article className='single-image'>
				<h3>fixed image/blue</h3>
				<Image fixed={data.fixed.childImageSharp.fixed}/>
			</article>
			<article className='single-image'>
				<h3>fluid image/svg</h3>
				<Image fluid={data.fluid.childImageSharp.fluid}/>
				<div className="small">
					<Image fluid={data.fluid.childImageSharp.fluid}/>
				</div>
				<Image fluid={data.example.childImageSharp.fluid}/>
			</article>
		</section>
	);
}

export default Images;
