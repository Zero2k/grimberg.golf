import React from 'react';
import 'twin.macro';
import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import TimeLine from '@/components/TimeLine';
import Section from '@/components/Section';

export default function Golf() {
  return (
    <React.Fragment>
      <Layout>
        <PageTitle title="Golf" />
        <Section>
          <TimeLine />
        </Section>
      </Layout>
    </React.Fragment>
  );
}
