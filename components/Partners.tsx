import Layout from './Layout';
import H2 from './H2';
import Partner from './Partner';
import Content from './Content';

import { partners } from '../data';

const Partners = () => ((
  <Layout bgColor="#222633" color="#fff">
    <Content>
      <H2 id="partners" center>Partners</H2>
      <div>
        {
          partners.map(({ alt, logoUri, link }, index) => ((
            <Partner key={`${index}`} alt={alt} logoUri={logoUri} link={link} />
          )))
        }
      </div>

      <style jsx>{`
        div {
          margin-top: 37px;
          display: flex;
          flex-wrap: wrap;
          max-width: 400px;
        }
      `}</style>
    </Content>
  </Layout>
));

export default Partners;
