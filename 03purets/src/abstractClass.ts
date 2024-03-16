abstract class TakePhoto1 {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

class FaceBook extends TakePhoto1 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("Sepia");
  }
}

const bh1 = new FaceBook("kek", "top", 1);
