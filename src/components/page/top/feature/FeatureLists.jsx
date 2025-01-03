import styled from "styled-components";

import feature1 from "/src/assets/img/feature1.jpg";
import feature2 from "/src/assets/img/feature2.png";
import feature3 from "/src/assets/img/feature3.jpg";
import feature4 from "/src/assets/img/feature4.jpg";
import FeatureList from "/src/components/page/top/feature/FeatureList";

const FeatureLists = () => {
  const featureLists = [
    {
      img: feature1,
      heading: "専門性が求められる高度なIT分野の記事作成",
      text: (
        <>
          <p>
            IT業界（専門はWeb）に精通した現役Webエンジニアが、専門性が求められる高度なIT分野の記事を作成します。
          </p>

          <p>
            専門性とわかりやすさを両立させたライティングで、ITの基礎を知りたい方から現場で活躍する方まで、多様な読者にわかりやすく有益な記事を作成します。
          </p>
        </>
      ),
    },
    {
      img: feature2,
      heading: "独自記事構成テンプレを使った顧客ニーズの深掘り",
      text: (
        <>
          <p>
            顕在ニーズと潜在ニーズを的確に引き出す独自のテンプレートを使用し、ユーザーファーストなコンテンツを作成します。
          </p>
          <p>
            また、競合他社が満たせていないニーズを徹底的に分析し、そのギャップを埋めることで、差別化された価値あるコンテンツを提供します。
          </p>
        </>
      ),
    },
    {
      img: feature3,
      heading: "視覚的に訴求するインフォグラフィック制作",
      text: (
        <>
          <p>
            難解なテーマについては、テキストだけでは十分に伝わらない情報がある場合があります。
          </p>
          <p>
            複雑な情報を直感的に理解できるよう整理し、視覚的に伝えるインフォグラフィックを制作します。
          </p>
        </>
      ),
    },
    {
      img: feature4,
      heading: "1次ソースのみにこだわった正確な情報収集",
      text: (
        <>
          <p>
            英語での情報収集が可能な現役エンジニアが、技術書や公式ドキュメントなどの1次ソースに基づいて正確な情報を収集します。
          </p>
        </>
      ),
    },
  ];

  return (
    <ul>
      {featureLists.map((item, index) => (
        <FeatureList
          key={index}
          img={item.img}
          heading={item.heading}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default FeatureLists;
