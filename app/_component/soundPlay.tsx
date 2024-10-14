"use client"

let ctxp: AudioContext = new AudioContext();
let effectSource: AudioBufferSourceNode | null = null;

// 音源を取得しAudioBuffer形式に変換して返す関数
async function setupEffect(soundUrl: string): Promise<AudioBuffer> {
  console.log(soundUrl);
  const response = await fetch(soundUrl);

  console.log(response);

  // AudioContextを再作成
  ctxp = new AudioContext();

  const arrayBuffer = await response.arrayBuffer();
  // Web Audio APIで使える形式に変換
  const audioBuffer = await ctxp.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

// 音声を再生する関数
function playEffect(ctx: AudioContext, audioBuffer: AudioBuffer, volume:number) {
  effectSource = ctx.createBufferSource();

  // GainNodeを作成して音量を設定
  const gainNode: GainNode = ctx.createGain();
  gainNode.gain.value = volume; // 音量を0.3に設定

  // 変換されたバッファーを音源として設定
  effectSource.buffer = audioBuffer;

  // 接続を設定
  effectSource.connect(gainNode);     // BufferSource → GainNode
  gainNode.connect(ctx.destination);  // GainNode → 出力先

  // 再生開始
  effectSource.start();
}

// 外部から呼び出す関数
const soundPlay = async (soundUrl: string, volume:number=0.3): Promise<void> => {
  if (typeof window !== 'undefined') {
    const effect = await setupEffect(soundUrl);
    playEffect(ctxp, effect, volume);
  }
}

export {
  soundPlay
}
