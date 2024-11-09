export class AsyncModel {
  isLoading: boolean = true;
  isOk: boolean = false;

  setOk() {
    this.isLoading = false;
    this.isOk = true;
  }
  setError() {
    this.isLoading = false;
    this.isOk = false;
  }
}
