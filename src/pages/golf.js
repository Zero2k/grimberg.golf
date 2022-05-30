import React from 'react';
import tw from 'twin.macro';
import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import TimeLine from '@/components/TimeLine';
import Section from '@/components/Section';
import Results from '@/components/Results';

const Heading = tw.h2`font-bold text-4xl leading-normal mb-4`;

export default function Golf() {
  return (
    <React.Fragment>
      <Layout>
        <PageTitle title="Golf" />
        {/* Introduction */}
        <Section>
          <Heading>Att spela paragolf med en synskada</Heading>
          <p tw="text-base text-gray-700 md:text-lg">
            Allt spel sker med caddie tillika ledsagare. Caddieuppdrag:
            tillsammans med mig välja klubba och därigenom spelstrategi, ställa
            in mig och klubba i slagriktning grovriktning sker (om möjligt)
            genom siktlinje som tas ut som kontrastmål mot bakgrunden,
            finriktning sker genom klockmetoden, caddien korrigerar min position
            genom att säga tex. vrid dig 1 minut till vänster. Vid/under slaget
            hjälper även caddien mig att hålla reda på vart bollen tar vägen,
            därefter ledsaga mig fram till bollen och nästa slag.
          </p>
        </Section>
        {/* Timeline */}
        <Section>
          <TimeLine />
        </Section>
        {/* Gear */}
        <Section>
          <div tw="flex flex-col lg:flex-row space-x-4">
            <div tw="w-full lg:w-1/2">
              <Heading>Utrustning</Heading>
              <dl>
                <div tw="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt tw="text-base font-medium text-gray-700">Bollar</dt>
                  <dd tw="mt-1 text-base xl:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                    Titleist Velocity (Grön eller orange). Bollarna markeras
                    även med svart kontrastriktlinjer för linjering mot
                    riktpunkt vid puttning.
                  </dd>
                </div>
                <div tw="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt tw="text-base font-medium text-gray-700">Träklubbor</dt>
                  <dd tw="mt-1 text-base xl:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                    Driver, Trä5 och Trä7 med markering var klubbans centrum är.
                  </dd>
                </div>
                <div tw="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt tw="text-base font-medium text-gray-700">Järnklubbor</dt>
                  <dd tw="mt-1 text-base xl:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                    Standardklubbor
                  </dd>
                </div>
                <div tw="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt tw="text-base font-medium text-gray-700">Putter</dt>
                  <dd tw="mt-1 text-base xl:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                    Speciell putter med sikte och linjeingstekning (Fabrikat
                    SeeMoore)
                  </dd>
                </div>
              </dl>
            </div>
            <div tw="flex w-full lg:w-1/2 items-center">
              <img
                tw="object-cover h-96 w-96 rounded-full mx-auto"
                src="https://uc78e144ac24655a6e0219f67eb6.previews.dropboxusercontent.com/p/thumb/ABjLdpccmGCXqTbRclqKHc9UW7bJBefnU1j46QACpA9kJLrfBcGGaNc-TuvaIFywABNtS2nrv9x5W8xSaKQCEREMk_Kc3FuLb0Nen2816P1nwdmMl3vnrInpN5C4BsnCgUekIezaJQ9tAp-__PsRF3iWGoinEOssVIfm3Bz5Du-SCBZrqsgdaAY8Ws0Vf5tkgYuGqEtRrxlUH3UJ6V7-xrOajyoPBqXJXPLGsr6s9qqpnQu3Lr1CrVf-xqDru4LOMSeDctakjWo0KJAiDPxqxlEYsA7IQC-u0d_8GAiy56Vqq5QA6leJMscHg9ZWDRLcx0YZIQgr-_bFPN43sn19Na2kXmL70kNyEdJkDCJD6dEYwdI4MX1vAGlG5anaTix_ya2NPjeW_-I8uSPCnn-AuTEx6XIC02duT2TOnAknhz99978PyHj1QpUx1rWDHO1s_d4CObJCiDNZVe7ZJ6Ks80BCqh-ERNuxIdzsSbaYKEZLhSozglrFbqhxcwa2sAIsoRU/p.jpeg"
              />
            </div>
          </div>
        </Section>
        {/* Achievements */}
        <Section>
          <Heading>Prestationer</Heading>
          <Results />
        </Section>
      </Layout>
    </React.Fragment>
  );
}
