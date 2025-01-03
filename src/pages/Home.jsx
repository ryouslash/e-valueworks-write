import Content from "/src/components/common/Content";
import Mv from "/src/components/page/top/mv/Mv";
import Feature from "/src/components/page/top/feature/Feature";
import Genre from "/src/components/page/top/genre/Genre";

const Home = () => {
  return (
    <Content>
      <Mv />
      <Feature />
      <Genre />
    </Content>
  );
};

export default Home;
