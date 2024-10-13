 "use client"
  
  let ctxp = new AudioContext();
  let EffectSource

   // 音源を取得しAudioBuffer形式に変換して返す関数
  async function setupEffect(soundUrl:string) {
    console.log(soundUrl);
    const response = await fetch(soundUrl);

    console.log(response);

    ctxp = new AudioContext();

    const arrayBuffer = await response.arrayBuffer();
    // Web Audio APIで使える形式に変換
    const audioBuffer = await ctxp.decodeAudioData(arrayBuffer);
    return audioBuffer;
  }

  function playEffect(ctx:AudioContext, audioBuffer:AudioBuffer) {
    EffectSource = ctx.createBufferSource();
    // 変換されたバッファーを音源として設定
    EffectSource.buffer = audioBuffer;
    // 出力につなげる
    EffectSource.connect(ctx.destination);
    EffectSource.start();
  }

  const soundPlay = async(soundUrl:string) =>{
    if (typeof window !== 'undefined') {
      const effect = await setupEffect(soundUrl);
      playEffect(ctxp, effect);
    }
  }


  export {
    soundPlay
  }