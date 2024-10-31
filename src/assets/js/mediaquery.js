const breakpoints = {
  // モバイル端末の中でも特に小型のスマートフォン
  xs: "419px",
  // 一般的な小型デバイス（小型スマートフォンや古いスマートフォン）向け
  sm: "575px",
  // タブレットや中型のスマートフォン
  md: "767px",
  // ラップトップや小型デスクトップ向け
  lg: "1024px",
  // 大型のデスクトップモニター
  xl: "1259px",
  // 超大型モニター向け
  xxl: "1399px",
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
