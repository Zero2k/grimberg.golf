import React from 'react';
import 'twin.macro';
import Image from 'next/image';
import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import SplitSection from '@/components/SplitSection';

export default function Rp() {
  return (
    <React.Fragment>
      <Layout>
        <PageTitle title="Retinitis Pigmentosa (RP)" />
        <SplitSection
          left={
            <div tw="w-full xl:w-1/2 overflow-hidden self-center md:text-center lg:text-left">
              <h3 tw="font-medium text-4xl leading-normal md:leading-relaxed mb-2">
                Min ögonsjukdom
              </h3>
              <p tw="text-gray-700 text-base md:text-xl w-full lg:w-5/6">
                RP (Retinitis Pigmentosa) är ett samlingsnamn för hundratals
                olika ärftliga ögonsjukdomar. Gemensamt för dessa sjukdomar är
                att näthinnan gradvis förstörs. RP ger tunnelseende, ökad
                bländningskänslighet med svårighet för ögat att ställa om sig
                vid ljusskiftningar.
              </p>
              <p tw="text-gray-700 text-base md:text-xl w-full lg:w-5/6 pt-4">
                Sjukdomen gör också att man inte ser i mörker (nattblindhet)
                eller under dåliga ljusförhållanden. Förloppet vid RP innebär
                att man sakta men säkert ser allt sämre.
              </p>

              <div tw="mt-6 sm:flex sm:justify-center lg:justify-start">
                <div></div>
              </div>
            </div>
          }
          right={
            <div tw="flex w-full xl:w-1/2 overflow-hidden mt-6 xl:mt-0 justify-center self-center">
              {/* <Image src="" layout="responsive" width={500} height={300} /> */}
              <div tw="">Image</div>
            </div>
          }
        />
      </Layout>
    </React.Fragment>
  );
}
