// 日付データをY/m/dにフォーマットする関数
export const formatDate = (dateString) => {
  const date = new Date(dateString);

  // 9時間を加算して日本時間に合わせる
  date.setHours(date.getHours() + 9);

  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const formatDate2 = (dateString) => {
  const date = new Date(dateString);

  // UTCの年月日
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1; // 月は0から始まるため+1
  let day = date.getUTCDate();
  let hours = date.getUTCHours() + 9; // 日本時間に+9時間

  // hoursが24以上になったら日付を繰り上げる
  if (hours >= 24) {
    hours -= 24; // 24を引いて0〜23の範囲に戻す
    day += 1; // 日付を繰り上げる
  }

  // 日付が月末を越えた場合の処理
  const daysInMonth = new Date(year, month, 0).getDate(); // 月末の日を取得

  if (day > daysInMonth) {
    day = 1; // 月をまたぐ場合は1日にする
    month += 1; // 月を繰り上げる
  }

  // 12月を越えた場合の処理
  if (month > 12) {
    month = 1;
    year += 1;
  }

  // 2桁表示に揃える
  const formattedMonth = String(month).padStart(2, "0");
  const formattedDay = String(day).padStart(2, "0");

  return `${year}-${formattedMonth}-${formattedDay}`;
};
