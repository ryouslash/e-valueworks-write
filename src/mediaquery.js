const breakpoints = {
  // モバイル端末の中でも特に小型のスマートフォン
  xs: "420px",
  // 一般的な小型デバイス（小型スマートフォンや古いスマートフォン）向け
  sm: "576px",
  // タブレットや中型のスマートフォン
  md: "768px",
  // ラップトップや小型デスクトップ向け
  lg: "1025px",
  // 大型のデスクトップモニター
  xl: "1260px",
  // 超大型モニター向け
  xxl: "1400px",
};

// max-widthとmin-widthの両方を定義する
export const media = Object.keys(breakpoints).reduce((acc, label) => {
  // max-widthの定義
  acc[label] = (...args) => `
    @media (max-width: ${breakpoints[label]}) {
      ${args}
    }
  `;

  // min-widthの定義 (+1pxを追加)
  const minWidthValue = parseInt(breakpoints[label], 10) + 1;
  acc[`${label}Up`] = (...args) => `
    @media (min-width: ${minWidthValue}px) {
      ${args}
    }
  `;

  return acc;
}, {});
