/**
 * Lightweight Web Audio API ocean waves sound generator.
 * Does not depend on external mp3 files.
 */
class OceanWaveSynth {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private lfoNode: OscillatorNode | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start(): void {
    if (this.isPlaying) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      // Generate 5 seconds of soft pink/brown-ish noise buffer
      const bufferSize = this.ctx.sampleRate * 5;
      const buffer = this.ctx.createBuffer(2, bufferSize, this.ctx.sampleRate);
      for (let channel = 0; channel < 2; channel++) {
        const data = buffer.getChannelData(channel);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
          b6 = white * 0.115926;
        }
      }

      this.noiseNode = this.ctx.createBufferSource();
      this.noiseNode.buffer = buffer;
      this.noiseNode.loop = true;

      // Filter: sweeps smoothly between 200Hz and 700Hz like tidal swells
      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = 'lowpass';
      this.filterNode.frequency.setValueAtTime(320, this.ctx.currentTime);
      this.filterNode.Q.setValueAtTime(2.5, this.ctx.currentTime);

      // LFO for wave swelling cycle (~0.12 Hz = ~8.3 second wave period)
      this.lfoNode = this.ctx.createOscillator();
      this.lfoNode.type = 'sine';
      this.lfoNode.frequency.setValueAtTime(0.12, this.ctx.currentTime);

      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(220, this.ctx.currentTime);

      this.lfoNode.connect(lfoGain);
      lfoGain.connect(this.filterNode.frequency);

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      // Gentle fade-in
      this.masterGain.gain.exponentialRampToValueAtTime(0.25, this.ctx.currentTime + 1.2);

      this.noiseNode.connect(this.filterNode);
      this.filterNode.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.noiseNode.start();
      this.lfoNode.start();
      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  public stop(): void {
    if (!this.isPlaying || !this.ctx || !this.masterGain) {
      this.isPlaying = false;
      return;
    }

    try {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);
      setTimeout(() => {
        try {
          this.noiseNode?.stop();
          this.lfoNode?.stop();
          this.ctx?.close();
        } catch {
          // ignore cleanup errors
        }
        this.ctx = null;
        this.isPlaying = false;
      }, 650);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const oceanAudio = new OceanWaveSynth();
