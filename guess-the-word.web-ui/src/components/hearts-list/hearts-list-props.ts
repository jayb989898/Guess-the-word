export class HeartsListProps {
  totalLifes: number;
  remainingLifes: number;
  constructor(totalLifes: number, remainingLifes: number) {
    this.totalLifes = totalLifes;
    this.remainingLifes = remainingLifes;
  }
}
