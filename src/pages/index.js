import React from 'react';
import 'twin.macro';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import ImageGrid from '@/components/ImageGrid';
import SplitSection from '@/components/SplitSection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Faq from '@/components/Faq';

const Index = () => {
  const { t } = useTranslation('common');

  return (
    <React.Fragment>
      <Layout>
        <Header header={t('header', { returnObjects: true })} />
        <SplitSection
          left={
            <div tw="w-full xl:w-1/2 overflow-hidden self-center md:text-center lg:text-left">
              <h3 tw="font-bold text-4xl tracking-wide pb-4">
                {t('sponsors', { returnObjects: true }).sponsorsTitle}
              </h3>
              <p tw="text-gray-700 italic text-base md:text-xl w-full lg:w-5/6">
                {t('sponsors', { returnObjects: true }).sponsorsText}
              </p>

              <div tw="mt-6 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <Link href="/sponsorer" passHref>
                    <a tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primaryHover">
                      {t('sponsors', { returnObjects: true }).sponsorsBtn}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          }
          right={
            <div tw="w-full xl:w-1/2 overflow-hidden mt-6 xl:mt-0">
              <div tw="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map(index => (
                  <div key={index} tw="border h-auto rounded hover:bg-gray-100">
                    <img
                      tw="p-8"
                      src="https://static.wixstatic.com/media/620c21_9e02d1d38f5449b3be2d1661347bdcde~mv2.png/v1/fill/w_440,h_157,al_c,q_85,usm_0.66_1.00_0.01/Black%20logo%20-%20no%20background.webp"
                    />
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <ImageGrid />
        <Faq />
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
