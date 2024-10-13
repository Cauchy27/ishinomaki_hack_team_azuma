import Tittle from "./_screen/title";
import Select from "./_screen/select";
import Confirm from "./_screen/confirm";
import Battle from "./_screen/battle";
import Result from "./_screen/result";

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      ここにとりあえず出すようにして、ステートで表示を切り替えようと思います
      <Tittle/>
      <Select/>
      <Confirm/>
      <Battle/>
      <Result/>
    </div>
  );
}

export default Home;
