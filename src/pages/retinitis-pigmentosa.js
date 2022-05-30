import React from 'react';
import tw from 'twin.macro';
import Image from 'next/image';
import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import SplitSection from '@/components/SplitSection';

const Heading = tw.h2`font-bold text-4xl leading-normal mb-4`;

export default function Rp() {
  return (
    <React.Fragment>
      <Layout>
        <PageTitle title="Retinitis Pigmentosa (RP)" />
        <SplitSection
          left={
            <div tw="w-full lg:w-1/2 overflow-hidden self-center text-left">
              <Heading>Min ögonsjukdom</Heading>
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
            <div tw="flex w-full lg:w-1/2 overflow-hidden mt-6 xl:mt-0 justify-center self-center">
              {/* <Image src="" layout="responsive" width={500} height={300} /> */}
              <div tw="">Image</div>
            </div>
          }
        />

        <SplitSection
          reverse
          left={
            <div tw="w-full lg:w-1/2 overflow-hidden self-center text-left">
              <Heading>Hjälpmedel</Heading>
              <p tw="text-gray-700 text-base md:text-xl w-full lg:w-5/6">
                Text
              </p>

              <div tw="mt-6 sm:flex sm:justify-center lg:justify-start">
                <div></div>
              </div>
            </div>
          }
          right={
            <div tw="flex w-full lg:w-1/2 overflow-hidden mt-6 xl:mt-0 justify-center self-center">
              {/* <Image src="" layout="responsive" width={500} height={300} /> */}
              <div tw="">
                <img
                  src="https://uca962f4a5a2eb3af7472e571b38.previews.dropboxusercontent.com/p/thumb/ABhQ-CYxvyvje8pOsPjnF5PENTgKfQ5PbGDikeme6kryTicJbS12FwkewiLPwlivs1GlJ94osQkMTtUBU8RE95Hg2shSiforrJ-TDfudL2ml0AwrwFv896z8O64CCZD_ai7xBYHpKGnXyPTqBHVUefS8_pVu7u3wLU6P5ZZCMTuJlXhWW9VJZPlYtXpswf5XAouKaQaB7oiUlOqnCS1F-RzNr2yOMqPqvlrZeHhMQ555tRHCDE1u3UAhVLyou-ENHQe-113RND-EyBtDv7b--_KAkNSK8hitpp8bzv22fL0X7iRqLxEyBnewCiwifWW2XQkcNhfXPrK8Silq7xtzjwq1qyLgBcXF6yB8OnAuA84HRDNW6ETDR5UQ-XOyU08LLS3ydx69lhpgBAsU25O8N5xvkSGboL_KQzzuwW4ZErpCBIYqx9CEziAbyAjRM7jzoBzGyMUyMZL7wP7pun_4Bq5utxBdIHm0kLZikKSfyWbgrGuwOJLhkqvln_u5a3XicV0/p.jpeg"
                  tw="object-cover object-center h-96 w-96 rounded-full mx-auto"
                />
              </div>
            </div>
          }
        />
      </Layout>
    </React.Fragment>
  );
}
