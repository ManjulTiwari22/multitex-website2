import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
`;

const Heading = styled.h2`
  color: #2C2478;
`;

const SubHeading = styled.h3`
  color: #2C2478;
`;

function Services() {
  return (
    <Container>
      <Heading>Services</Heading>
      <p>We offer design, engineering, fabrication, installation, and commissioning services worldwide.</p>

      <SubHeading>Early Production Facility</SubHeading>
      <p>Multitex offers, under a single roof, for the end-users and drilling/service companies, many surface-unit operations packages as stand-alone or in an integrated approach on short deliveries. These packages are used for successful implementation of the Field Development Plans’ targets defined by the end-users or the Government and thereby maximizing their asset value.</p>
      <p>Evaluate the performance of the well and then based on results, lead to final field development of full-scale production stages and also create Return on Investment from marginal fields or new field developments. End-users need reliable partners with a sound understanding of the process packages and an understanding of the crude assays and gas compositions and its PVT analysis.</p>
      <p>Multitex, as a reliable partner, offers not only the best technology meeting the sales specification but also meets the challenging timelines with newly built process package kits in Modular construction to end-users. Multitex’s experienced procurement, expediting, and logistics team can further enhance the value by their global reach and expertise to deliver the products on time to remote locations.</p>

      <p>As part of our solutions for Early Production Facilities, the following are included – Gas Processing, Wet Crude Treatment, and Degassing Stations from Sweet to Very Sour applications. The facilities development is approached in a way such that it should be plug and play and take minimum time for installation and production start.</p>
      <p>Typically, Oil Treatment EPF facilities will include but not limited to: Prefabricated, modular design built trains with all process equipment like manifolds, exchangers, separators, Fired Heaters, Crude Sweetening Stabilizer, compressors, Gas treatment, Storage Tanks, Truck Loading Stations, Power Generation, Nitrogen System, Chemical injection, Flare, Instrument Air System, Fire Water System, Launcher and Receivers and MCC and Electrical distribution system, Flowlines, and Trunklines.</p>

      <SubHeading>Integrated Gas Processing Units</SubHeading>
      <p>Natural Gas coming from the well contains hydrocarbons, CO2, H2S, and water along with other impurities. Treatment is needed to make it suitable for applications. Gas conditioning (Field Separation, Gas Sweetening, and Gas Dehydration) removes unwanted components to prevent corrosiveness and hydrate formation. Multitex offers an integrated solution from Gas Wells to Power Plant, beyond ISBL core process scope.</p>

      <p>ISBL scope includes:</p>
      <ul>
        <li>Slug Catcher</li>
        <li>Gas Sweetening & Acid Gas Removal System</li>
        <li>Gas Dehydration</li>
        <li>NGL & C5+ Recovery and Stabilization</li>
        <li>PSA Absorbers and Modular Skids for Hydrogen purification</li>
        <li>Gas Recovery Plus</li>
        <li>Sulphur Recovery Units</li>
        <li>Merox Skids</li>
      </ul>

      <p>OSBL scope includes:</p>
      <ul>
        <li>Utilities: LP Fuel Gas, Instrument Air, Nitrogen, Flare, Drain Systems, Fire Fighting</li>
        <li>Online Analyzers and Sample Collection</li>
        <li>Loading/Unloading Stations with Metering</li>
        <li>Chemicals and Solvents</li>
        <li>Recycle Gas Compression</li>
        <li>Modular Pipe Racks</li>
        <li>DCS/SCADA, SIS/ESD Controls</li>
        <li>Electrical Systems: Panels, Transformers, Lighting</li>
        <li>Civil & Site Construction</li>
        <li>Safety Studies</li>
        <li>Flow Lines, Manifolds, Trunklines</li>
        <li>Acid Gas Injection Packages</li>
      </ul>

      <SubHeading>Gas Sweetening Package</SubHeading>
      <p>Gas Sweetening means removing Acid Gas (H2S and CO2) from natural sour Gas streams. Multitex selects the appropriate technology based on the type and concentration of impurities, gas flow rate, temperature, and environmental economics. Solutions include liquid-desiccant absorption (MEA, DEA, MDEA, etc.) and solid-desiccant adsorption (molecular sieve, scavengers).</p>

      <SubHeading>Gas Dehydration Unit Package</SubHeading>
      <p>Natural gas needs dehydration to remove water content, which causes corrosion and hydrate formation. Multitex offers both absorption (MEG, TEG, DEG) and adsorption (molecular sieve, silica gel, alumina) systems. Our Enhanced TEG technology improves energy efficiency and water dew point control. Design prevents foaming and glycol degradation with low skin temperatures on reboilers.</p>

      <SubHeading>Hydrocarbon Dew Point</SubHeading>
      <p>For hydrocarbon removal, Multitex provides low-temperature separation via JT valve expansion or silica gel-based adsorption beds. Modern materials have revived this method for viable applications. Our dew point control systems are tailored to balance CAPEX and OPEX.</p>
    </Container>
  );
}

export default Services;
