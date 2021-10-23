import React from 'react';
import 'twin.macro';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import ImageGrid from '@/components/ImageGrid';
import SplitSection from '@/components/SplitSection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = () => {
  const { t } = useTranslation('common');

  return (
    <React.Fragment>
      <Layout>
        <Header title={t('header-title', { returnObjects: true })} />
        <SplitSection />
        <ImageGrid />
      </Layout>
    </React.Fragment>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Index;
