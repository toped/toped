import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import _ from 'lodash'

import { CATEGORIES } from '../../../utils/graphql/queries'
import { Loading } from './Loading'

const Wrapper = styled.div`
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`
const ActiveGame = styled.img`
  transition-duration: 0.3s;
  transition-property: transform;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  cursor: pointer !important;
	border-radius: .75rem;
	
  &:hover {
    transform: scale(1.1);
  }
`

const CategoryList = ({onGameTapped}) => {

	const { data: games } = useQuery(CATEGORIES, {
		onCompleted: (data) => {
			console.log(data)
		},
		onError: (err) => {
			console.error(err)
		}
	})

	return (
		<Wrapper className="flex flex-no-wrap p-2 overflow-hidden overflow-x-auto">
			{
				games
					? _.orderBy(games.categories, (e) => { return e.order}, ['asc']).map(game => (
						<div 
							key={game.title} 
							className="flex flex-col items-center text-center mr-6 py-4" 
							onClick={() => onGameTapped(game)}>
							<ActiveGame 
								src={game.imgSrc} 
								width="145"
								alt="mini-logo"/>
						</div>
					))
					: <Loading/>
			}
		</Wrapper>
	)
}

CategoryList.propTypes = {
	onGameTapped: PropTypes.func
}

export default CategoryList
