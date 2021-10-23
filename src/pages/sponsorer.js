import React from 'react';
import tw, { styled } from 'twin.macro';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';

const Card = styled.a(({ selected = false }) => [
  tw`border h-auto rounded hover:bg-gray-100 cursor-pointer`,
  selected && tw`bg-gray-100`,
]);

export default function Sponsorer() {
  const [selected, setSelected] = React.useState(1);
  return (
    <React.Fragment>
      <Layout>
        <PageTitle />
        <Section>
          <div tw="w-full overflow-hidden mt-6 xl:mt-0">
            <div tw="grid grid-cols-3 xl:grid-cols-4 gap-3">
              {[1, 2, 3, 4, 5, 6].map(index => (
                <Card
                  key={index}
                  selected={selected === index}
                  onClick={() => setSelected(index)}
                >
                  <img
                    tw="p-8"
                    src="https://static.wixstatic.com/media/620c21_9e02d1d38f5449b3be2d1661347bdcde~mv2.png/v1/fill/w_440,h_157,al_c,q_85,usm_0.66_1.00_0.01/Black%20logo%20-%20no%20background.webp"
                  />
                </Card>
              ))}
            </div>
          </div>
          <div tw="my-10 shadow-2xl rounded">
            <div tw="flex flex-col lg:flex-row lg:divide-x">
              <div tw="w-full lg:w-2/3 p-5 lg:p-10">
                <h2 tw="text-lg lg:text-xl font-medium pb-4">Företagsnamn</h2>
                <p tw="pb-4 italic">Information</p>
                <a tw="text-indigo-600 hover:text-indigo-800" href="/">
                  http://google.com
                </a>
              </div>
              <div tw="w-full lg:w-1/3 p-5 lg:p-10 order-first lg:order-last">
                <img src="https://static.wixstatic.com/media/620c21_9e02d1d38f5449b3be2d1661347bdcde~mv2.png/v1/fill/w_440,h_157,al_c,q_85,usm_0.66_1.00_0.01/Black%20logo%20-%20no%20background.webp" />
              </div>
            </div>
          </div>
        </Section>
      </Layout>
    </React.Fragment>
  );
}
