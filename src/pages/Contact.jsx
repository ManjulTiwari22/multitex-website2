import React from 'react';
import styled from 'styled-components';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  text-align: center;
`;

const Info = styled.div`
  margin: 2rem 0;
  line-height: 1.8;
  font-size: 1.1rem;
  color: #333;

  a {
    color: #0077cc;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: #005fa3;
  }
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  overflow: hidden;
`;

const MarkerLabel = styled.text`
  font-size: 10px;
  text-anchor: middle;
`;

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';


function Contact() {
  return (
    <Container>
      <h2>Contact Us</h2>

      <Info>
        <p>
          <strong>Contact Email:</strong>{' '}
          <a href="mailto:multitex@multitexfilters.com">multitex@multitexfilters.com</a>
          <br />
          <strong>Sales Enquiries:</strong>{' '}
          <a href="mailto:enquiry@multitexfilters.com">enquiry@multitexfilters.com</a>
        </p>
        <p>
          <strong>Phone:</strong>{' '}
          <a href="tel:+912212345678">0120-4747-800</a>
        </p>
        <p>
          <strong>Address:</strong>
          <br />
          Multitex Filtration Engineers Ltd.
          <br />
          217, Hans Bhawan, Bahadur Shah Zafar Marg,
          <br />
          New Delhi - 110002, India
        </p>
      </Info>

      <MapContainer>
  <ComposableMap
    projection="geoMercator"
    projectionConfig={{
      scale: 130,
      center: [78.9629, 22.5937], // Centered on India
    }}
    width={800}
    height={400}
    style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} fill="#E6E6E6" stroke="#FFFFFF" />
              ))
            }
          </Geographies>

          {/* Marker for New Delhi */}
          <Marker coordinates={[77.2090, 28.6139]} data-tooltip-id="delhi-tooltip">
            <circle r={6} fill="#FF5533" stroke="#fff" strokeWidth={1} />
            <MarkerLabel y={-10}>New Delhi</MarkerLabel>
          </Marker>
        </ComposableMap>
      </MapContainer>

      <Tooltip id="delhi-tooltip" place="top" content="Head Office: New Delhi, India" />
    </Container>
  );
}

export default Contact;
