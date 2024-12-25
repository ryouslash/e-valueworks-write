import { createGlobalStyle } from "styled-components";
import { media } from "/src/assets/js/mediaquery.js";

// グローバルスタイルを定義
const GlobalStyle = createGlobalStyle`
/*
* リセットCSS
*/
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;

  @media screen and (min-width: 1921px) {
    font-size: 0.6vw;
  }
}

body {
  font-family: sans-serif;
  overflow-y: scroll;
  word-break: break-all;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
main,
small {
  display: block;
  box-sizing: border-box;
}

ul,
ol,
li,
dd {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  text-decoration: none;
  color: #000;
}

ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}

mark {
  background-color: #ff9;
  color: #000;
  font-weight: bold;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 1em 0;
  padding: 0;
}

del {
  text-decoration: line-through;
}

abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

input,
select {
  vertical-align: middle;
}

img {
  width: 100%;
  height: auto;
  vertical-align: bottom;
}

/*
* ベースCSS
*/
// Googleフォント読み込み
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
  font-size: 1.6rem;
  font-family: "Noto Sans JP", sans-serif;
  min-width: 120rem;

  ${media.md`
    min-width: initial;
  `}

  ${media.sm`
    font-size: 1.5rem;
    `}
}

`;

export default GlobalStyle;
