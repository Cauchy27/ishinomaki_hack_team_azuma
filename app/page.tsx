import Battle from "./_screen/battle";
import Result from "./_screen/result";
import Select from "./_screen/select";
import Tittle from "./_screen/title";



const Home = () => {
  return (
    <div className="">
      {/* <Battle/> */}
      <Result
        score={70}
        totalQuestions={10}
        message="あなたの勝利です！！かわいい❤️"
      />
      {/* <Select/> */}
      {/* <Tittle/> */}
    </div>
  );
}

export default Home;
