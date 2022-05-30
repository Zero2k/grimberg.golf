import React from 'react';
import 'twin.macro';
import Image from 'next/image';

export default function ImageGrid() {
  return (
    <div tw="max-w-7xl mx-auto px-6 lg:px-20 xl:px-12 mt-10 mb-6 lg:mb-32">
      <div tw="flex justify-center">
        <h3 tw="font-bold text-center text-4xl pb-10 xl:pb-20">
          Bilder från tävlingar där jag har medverkat
        </h3>
      </div>
      <div tw="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
        <div tw="lg:(transform scale-110 -rotate-6 -translate-x-5)">
          <div tw="w-full h-40 lg:h-60 xl:h-80 bg-white rounded lg:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center">
            <img
              tw="object-cover object-center w-full h-40 lg:h-60 xl:h-80 rounded lg:rounded-xl"
              src="https://ucdf266524bfa6a5cb61d7aaf663.previews.dropboxusercontent.com/p/thumb/ABhAqqFv-s1B2gM5b6KD5SBh-he00ZOqZlDOJBXxd_9PCSxNARMlaOElAKoVLJ2OgFOzJXPiT13fFckGV0Cb6h3aqICB2LiTdiJ-cGy7GzYGkqo0wFeSJi3N03IBDrM2fG1ZE46WYiDYSCAcllEC23DmqdZjLUDsh9POXktxIrcKLMgHgYeNxVqkiQzMbczB8P5PrxQ94Uj5YNb7fAn1mNw4Hme4cflS0objn-xttEH63WSv_vXz4jAGAWeqTAXKq1B4jTX_GJMmQP5l8vzlARv0qpihGTWCkn7s6j_QUEnrbp5dPdKO92dirdcd26fOJ0wF84JM5rq3x12EF1Ajpz0gV3j9wtctS_aVOAHCmFXMl5ldDHpp7jo8iyGzD9aYBxbf93cr4U_pjExBFo7RWCKvjvQ1PylYclJrz4J_B9AqcEdS_iFjWHd1X52G4HDNi1i-r016nzDD4B8s7dGunXfKAdi0VlIMunqxyHNWaIh70QDbOrEotMcRN3zEGvS-M0T3LGIWwAKbHLIKdAt0nmq4vWWt-2dtBiGCoYSvFNUviNGGL0Q59fuEv13hfZMPVcA/p.jpeg"
              alt=""
            />
          </div>
        </div>
        <div tw="col-start-3 lg:(transform scale-90 rotate-6 translate-x-7 translate-y-14)">
          <div tw="w-full h-40 lg:h-60 xl:h-80 bg-white rounded lg:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center">
            <img
              tw="object-cover object-center w-full h-40 lg:h-60 xl:h-80 rounded lg:rounded-xl"
              src="https://ucf3133bbc74e43dde3fa2bdd3a5.previews.dropboxusercontent.com/p/thumb/ABjwEtPR8r_bqRWudTnihWNIAVTXI8O1a-Z8jTqOcZln-QBSJPErQOCwHWvxugjRiTi4gqx2nHmILfC6f2QOfxhW1dYqqWXGS5YWlKnv5sMeioGDwsBg9D37sfPoxxfpC8rFL-FEDzLGerKmwKJ-hRl9w9NKEGIE36zKZcOxPQ338NYz6vGUgiVc5Y-a8csByHPVpRuO758qgSqIYmo1TsE3rXyIZHwEtKVLzegvg8_EDMQj9MEAfxJssraUumzcPRtAxfYHLRHkW9ZmIF6YAoXZCz2BFQ0h0axtB7FQCA3Tfwf7-1z8Mp6OfotkJsFWeteKjaiJVRwteLLJB04SSmxOvIR_PrzRZIMdnFNNdNSD1wpok-5-pvJLFCtRx7uTD_gt52CAldhpiC2b4-e1yV3NL9l6D3DsGt-yCAPrzLSkCXK7lXl_tRpRo54rEnu-cfLWJKndeIyswwp4_CbFWy7VCo_qcPsgma-PVFQE_R92UKPHHxnTIxUct4wJ7EqO-AuYdmdEbevbgPVI-bRP5b_RgpNSmiyFscI93Fc1mqpLD-QUVxPPYkV1P3A45QLMfic/p.jpeg"
              alt=""
            />
          </div>
        </div>
        <div tw="lg:(transform scale-90 -translate-x-7 translate-y-11)">
          <div tw="w-full h-40 lg:h-60 xl:h-80 bg-white rounded lg:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center">
            <img
              tw="object-cover object-center w-full h-40 lg:h-60 xl:h-80 rounded lg:rounded-xl"
              src="https://uc9b6a3ab1313a2b6801ff600e86.previews.dropboxusercontent.com/p/thumb/ABg6jdtWHQc3twDIJfCJPOTKvD2OJC2KvkjFfztrVgFEB6-Pu4oHP_BiIzgsJbTaOgAY8QtfADsgyhLLBGdoF38AtgsrN2GgNliQC2stfsrRXUWWx1b7qzIpAMgT5BITwS3ifOtxdQCV1ymEhTE5DIGUisYI_jnaw1H49IogDJhyop9ieEugaprkBmwDdkTxqYonqRCFT94LVScwEqRa1tdSvS6pLwV62iEFzzL6tf4cyixFmtZCrdALvH8wl5_5HAiITlAwd5OrR2sfV04RsrKgzzuqVNBjayHNacEE61hFf-80-HKpxQXmzxZwcoxFXC7gHuqKnXcaAZ1u-Z7isif3zvqnL3U6Xar3txCWY4u-RKXS9SeEHc20nNfQk6kRIvk/p.jpeg"
              alt=""
            />
          </div>
        </div>
        <div tw="lg:(transform translate-y-24)">
          <div tw="w-full h-40 lg:h-60 xl:h-80 bg-white rounded lg:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center">
            <img
              tw="object-cover object-bottom w-full h-40 lg:h-60 xl:h-80 rounded lg:rounded-xl"
              src="https://uc2f222869db013a8c8e0c91a75d.previews.dropboxusercontent.com/p/thumb/ABjvOArXd2YwD9iKNvJoITvu4HUdxRIsKZNOx498MN4HhEDE85f1CZBaTpr0hurZFMCtBXr8u62RyGF_zRV7nd0UMG90pdNd8f5b6S9fsYBXmGrdiKd8fFGarJ_Ui7YbzdsuX9bWJPcmPvRCst59cYNxsXy89fdbuJd4EFKxB-dwRWXL2dqNP7isrFilwI1U0yGwkKBFFO59UUv2ae73RWR-lOpFKUm_cno3fOLlAv6VMrQIBUHHM72bjPlbn41NaIOFL_j0RpTWUwDRWCOf9US7D-04k6UnpK0vlJ6_BKjfvDjunkXaRLsSv5bQ2vbM7hQL4vUjzBIx51PglF8NoGOrNo5TmMRJkAx51DpCpIBr0UvpF0xVb0IsXQbk44xbjj0/p.jpeg"
              alt=""
            />
          </div>
        </div>
        <div tw="row-start-1 col-start-2 col-span-2 lg:(transform translate-x-12)">
          <div tw="w-full h-40 lg:h-60 xl:h-80 bg-white rounded lg:rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center">
            <img
              tw="object-cover object-bottom w-full h-40 lg:h-60 xl:h-80 rounded lg:rounded-xl"
              src="https://uce9947f63375f53e3578c0efe16.previews.dropboxusercontent.com/p/thumb/ABhXtWDPMiIT2aD1hyYEG9RcA40RYen1dwAIcRwlNSy5KiabtomXx9u3zh4_8jdVl0B02xzWXmBXW0c1wCABD5_SyDEEksqFaGMPAJf9JbCmOSzOoYcWTAWVHgmCfnlvbm5cjZ-ul6vvzG9Q-wcmh2xkPJqfPGu1_nO4xW3JMN99DNaPA9jp8eH80enr9tVA1uaO5BT47w1QZrLx2f0owRB1ndXqbdvDgbSoGZM0bPFwVyWOUO_iZ-Eq0wI-Fv8nfLpCJjhLosF_8TpSshh1DRjzk5flQ_cXLjiOWhbT2zWLW9i02Lvy01RBeHFxn_2utxcNlLfOVwC3F2z9rJ_8BI5aUvPyIRYDqANFuViNgvrH0DXhW7no3Oxo3_vJ_shrp3s/p.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
