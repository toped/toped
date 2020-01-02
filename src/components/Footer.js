import React from 'react'
import styled from 'styled-components'
import SocialSection from './primitives/SocialSection'

const FooterWrapper = styled.div`
  font-size: .9rem;
  background: #f2f2f2;
`
function Footer() {
	return (
		<FooterWrapper className="text-left p-5">
			<div>
      © 2020 Tope Daramola
			</div>
			<SocialSection/>
		</FooterWrapper>
	)
}

export default Footer
