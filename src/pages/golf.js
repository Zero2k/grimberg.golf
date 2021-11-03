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
            hålla reda på vart bollen tar vägen, därefter ledsaga mig fram till
            bollen och nästa slag.
          </p>
        </Section>
        <Section>
          <TimeLine />
        </Section>
      </Layout>
    </React.Fragment>
  );
}
