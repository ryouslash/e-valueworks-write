import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ListWithIcon from "/src/components/common/ListWithIcon.jsx";

const MvLists = () => {
  return (
    <ul>
      <ListWithIcon
        text="EEATを満たしたライターにお願いしたい方"
        icon={faCheck}
        className="fa-check"
        color="#73be60"
      />
      <ListWithIcon
        text="難解なIT用語を初心者向けに噛み砕いた解説記事を執筆して欲しい方など"
        icon={faCheck}
        className="fa-check"
        color="#73be60"
      />{" "}
    </ul>
  );
};

export default MvLists;
