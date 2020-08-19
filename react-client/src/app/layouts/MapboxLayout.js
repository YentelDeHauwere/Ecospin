import { default as React } from 'react';
import { useState } from 'react';

import ReactMapGL from 'react-map-gl'
import {SVGOverlay} from 'react-map-gl';

import './MapboxLayout.scss';

const MapboxLayout = ({children}) => {

	const getCoords = (pos) => {
		setViewport({
			width: '100vw',
			height: '100vh',
			latitude: pos.coords.latitude,
			longitude: pos.coords.longitude,
			zoom: 12,
		});
	}


	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCoords)
	} else {
		alert('Geolocation not supported by your browser')
	}

	const [viewport, setViewport] = useState ({
		width: '100vw',
		height: '100vh',
		zoom: 12,
	});

	function redraw({project}) {
		const [cx, cy] = project([4.111040, 51.019270]);
		return <circle className="mapbox-user" cx={cx} cy={cy} stroke="white" strokeWidth="3" r={10} fill="#363941">
			  </circle>;
	}

	return (
		<div className="page">
			<div className="page-main">
				<div className="mapbox">
					<ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
						onViewportChange={viewport => {
							setViewport(viewport)
						}}>

						<SVGOverlay redraw={redraw} />
					</ReactMapGL>
				</div>
				{children}
			</div>
		
			
		</div>
	);
};

export default MapboxLayout;