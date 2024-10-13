import Image from "next/image";

import Battle from "./_screen/battle";
import Result from "./_screen/result";
import Select from "./_screen/select";
import Tittle from "./_screen/title";

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* ここにとりあえず出すようにして、ステートで表示を切り替えようと思います */}
      {/* <Battle/>
      <Result/>
      <Select/> */}
      
      <Tittle/>
    </div>
  );
}

export default Home;
