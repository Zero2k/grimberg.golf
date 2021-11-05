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
          <h2 tw="font-medium text-4xl leading-normal md:leading-relaxed mb-2">
            Att spela paragolf med en synskada
          </h2>
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
        <Section>
          <TimeLine />
        </Section>
        <Section>
          <div tw="flex flex-col lg:flex-row space-x-4">
            <div tw="w-full lg:w-1/2">
              <h2 tw="font-medium text-4xl leading-normal md:leading-relaxed mb-2">
                Utrustning
              </h2>
              <dl>
                <div tw="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt tw="text-sm font-medium text-gray-500">Bollar</dt>
                  <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Titleist Velocity (Grön eller orange). Bollarna markeras
                    även med svart kontrastriktlinjer för linjering mot
                    riktpunkt vid puttning.
                  </dd>
                </div>
                <div tw="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt tw="text-sm font-medium text-gray-500">Träklubbor</dt>
                  <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Driver, Trä5 och Trä7 med markering var klubbans centrum är.
                  </dd>
                </div>
                <div tw="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt tw="text-sm font-medium text-gray-500">Järnklubbor</dt>
                  <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Standardklubbor
                  </dd>
                </div>
                <div tw="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt tw="text-sm font-medium text-gray-500">Putter</dt>
                  <dd tw="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Speciell putter med sikte och linjeingstekning (Fabrikat
                    SeeMoore)
                  </dd>
                </div>
              </dl>
            </div>
            <div tw="flex w-full lg:w-1/2 justify-center self-center">
              <div tw="">Image</div>
            </div>
          </div>
        </Section>
      </Layout>
    </React.Fragment>
  );
}
