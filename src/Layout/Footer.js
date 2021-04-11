import React from 'react'
import styled from 'styled-components'
import { Typography } from '../components/primitives'
import SocialSection from '../components/primitives/SocialSection'

const FooterWrapper = styled.div`
  font-size: .9rem;
  background: ${({theme}) => theme.background}
`
function Footer() {
	return (
		<FooterWrapper className="text-left p-10">
			<div className="mb-4">
				<Typography>© 2020 Tope Daramola</Typography>
			</div>
			<SocialSection/>
		</FooterWrapper>
	)
}

export default Footer