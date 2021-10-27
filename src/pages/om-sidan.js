import React from 'react';
import tw, { styled } from 'twin.macro';
import Layout from '@/components/Layout';
import PageTitle from '@/components/PageTitle';
import Section from '@/components/Section';
import FacebookIcon from '@/icons/facebook-icon';
import TwitterIcon from '@/icons/twitter-icon';

const SocialLinksContainer = tw.div`flex justify-center md:justify-start mt-4 gap-3`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block hover:text-gray-700 transition duration-300`}
  svg {
    ${tw`w-7 h-7`}
  }
`;

export default function OmSidan() {
  return (
    <React.Fragment>
      <Layout>
        <PageTitle title="Om sidan" />
        <Section>
          <div tw="w-full">
            <div tw="pb-10">
              <h2 tw="text-xl font-medium pb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </h2>
              <p tw="text-base text-gray-700 md:text-lg pb-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p tw="text-base text-gray-700 md:text-lg">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
            </div>
            <div tw="max-w-5xl mx-auto">
              <figure tw="md:flex bg-gray-100 rounded p-8 md:p-0 shadow-lg">
                <img
                  tw="w-32 h-32 md:w-48 md:h-auto rounded-full md:(rounded-l rounded-r-none) mx-auto"
                  src="https://images.squarespace-cdn.com/content/v1/5b59baa289c172304acb6993/1631085446050-DPPJRJGU3UFX5C5LIEQT/blank-profile-picture.png"
                  alt=""
                  width="384"
                  height="512"
                />
                <div tw="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p tw="text-lg font-semibold">
                      “Tailwind CSS is the only framework that I've seen scale
                      on large teams. It’s easy to customize, adapts to any
                      design, and the build size is tiny.”
                    </p>
                  </blockquote>
                  <figcaption tw="font-medium">
                    <div tw="text-gray-600">Magnus Grimberg</div>
                    <SocialLinksContainer>
                      <SocialLink href="https://facebook.com">
                        <FacebookIcon />
                      </SocialLink>
                      <SocialLink href="https://twitter.com">
                        <TwitterIcon />
                      </SocialLink>
                    </SocialLinksContainer>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </Section>
      </Layout>
    </React.Fragment>
  );
}
