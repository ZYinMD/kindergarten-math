export function sample(from: any[], sampleSize: number) {
  const sample = [];
  const _from = [...from];
  while (sample.length <= sampleSize) {
    const randomIndex = Math.floor(Math.random() * _from.length);
    const randomElement = _from[randomIndex];
    sample.push(randomElement);
    _from.splice(randomIndex, 1);
  }
  return sample;
}
