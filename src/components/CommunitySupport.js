import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 20%;
  background-color: #000;
  color: #FFF;
  h2 {
    text-transform: uppercase;
  }

  a {
    appearance: none;
    outline: 0;
    background-color: white;
    border: 0;
    padding: 10px 30px;
    color: #000;
    border-radius: 3px;
    width: 250px;
    cursor: pointer;
    font-size: 18px;
    transition-duration: 0.25s;
    margin: 20px 0;
    
    &:hover{
        background-color: rgb(245, 247, 249);
        text-decoration: none;
    }
  }
` 
const CommunitySupport = () => {
	return (
		<Wrapper id="fist-div" className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<h2>Support the Black Community!</h2>
					<p>With everything going on in the world, it is important that we take care and support one another. 
Like many of you out there, I am overwhelmed with feelings of uncertainty of the outcomes of our
protests and petitions for change. However, my hope is that no matter the outcome, when the dust settles,
our community will not forget our agenda of <b>the advancement to the black community</b>. We <b>MUST</b> Keep God first, 
and support each other on this path to change.</p>
					<br/>
					<a href="https://linktr.ee/toped">Take Action</a>
				</div>
			</div>
		</Wrapper>
	)
}

export default CommunitySupport
