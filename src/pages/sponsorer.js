import React from 'react';
import tw, { styled } from 'twin.macro';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';

const data = [0, 1, 2, 3, 4, 5, 6, 7];

const Card = styled.a(({ selected = false }) => [
  tw`transition duration-300 border h-auto rounded hover:bg-gray-100 cursor-pointer`,
  selected && tw`bg-gray-100`,
]);
const Animate = tw(motion.div)`mt-10 mb-5 shadow-lg rounded border`;

export default function Sponsorer() {
  const [selected, setSelected] = React.useState(0);

  const Sponsor = ({ sponsor }) => (
    <AnimatePresence exitBeforeEnter={true}>
      <Animate
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeIn', duration: 0.6 }}
      >
        <div tw="flex flex-col lg:flex-row lg:divide-x-2">
          <div tw="w-full lg:w-2/3 p-5 lg:p-10">
            <h2 tw="text-lg lg:text-xl font-medium pb-4">
              Företagsnamn {sponsor}
            </h2>
            <p tw="pb-4 italic">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <a tw="text-indigo-600 hover:text-indigo-800" href="/">
              http://sponsorlink.com
            </a>
          </div>
          <div tw="w-full lg:w-1/3 p-5 lg:p-10 order-first lg:order-last">
            <img src="https://static.wixstatic.com/media/620c21_9e02d1d38f5449b3be2d1661347bdcde~mv2.png/v1/fill/w_440,h_157,al_c,q_85,usm_0.66_1.00_0.01/Black%20logo%20-%20no%20background.webp" />
          </div>
        </div>
      </Animate>
    </AnimatePresence>
  );

  return (
    <React.Fragment>
      <Layout>
        <PageTitle title="Sponsorer" />
        <Section>
          <div tw="w-full overflow-hidden mt-6 xl:mt-0">
            <div tw="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {data.map(item => (
                <Card
                  key={item}
                  selected={selected === item}
                  onClick={() => setSelected(item)}
                >
                  <img
                    tw="p-8"
                    src="https://static.wixstatic.com/media/620c21_9e02d1d38f5449b3be2d1661347bdcde~mv2.png/v1/fill/w_440,h_157,al_c,q_85,usm_0.66_1.00_0.01/Black%20logo%20-%20no%20background.webp"
                  />
                </Card>
              ))}
            </div>
          </div>
          <Sponsor sponsor={data[selected]} />
        </Section>
      </Layout>
    </React.Fragment>
  );
}
