import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  return (
    <Layout>
      <SEO keywords={[`nashville`, `freecodecamp`]} title="Home" />

      <section className="text-center">
        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          This is the About page!
        </h2>

        <p className="leading-loose">
          But how should the About page differ from the landing page?
        </p>
      </section>
    </Layout>
  );
}

export default AboutPage;
