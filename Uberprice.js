class UberPrice {
  constructor(pricePerMile, pricePerPeakHourMinute, pricePerNormalHourMinute, baseFare, minimumFare, tipPercentage) {
    this.pricePerMile = pricePerMile;
    this.pricePerPeakHourMinute = pricePerPeakHourMinute;
    this.pricePerNormalHourMinute = pricePerNormalHourMinute;
    this.baseFare = baseFare;
    this.minimumFare = minimumFare;
    this.tipPercentage = tipPercentage;
  }

  isPeakHour(time) {
    // Implement your logic to check if it's peak hour
    // For example, you can check if the current hour is between 7am and 9am or 5pm and 7pm
    const hour = time.getHours();
    return (hour >= 7 && hour < 9) || (hour >= 17 && hour < 19);
  }

  calculatePricePerMinute(time) {
    return this.isPeakHour(time) ? this.pricePerPeakHourMinute : this.pricePerNormalHourMinute;
  }

  calculatePrice(time, minutes, miles) {
    const pricePerMinute = this.calculatePricePerMinute(time);
    const pricePerMileDistance = miles * this.pricePerMile;
    const price = pricePerMinute * minutes + pricePerMileDistance + this.baseFare;
    return Math.max(price, this.minimumFare) * (1 + this.tipPercentage / 100);
  }
}
// Example:
const uberPrice = new UberPrice(1.5, 0.5, 0.3, 2.5, 5, 10); // $1.5 per mile, $0.5 per peak hour minute, $0.3 per normal hour minute, $2.5 base fare, $5 minimum fare, 10% tip
const time = new Date(); // Use the current time
time.setHours(8); // Set the hour to 8am (peak hour)
console.log(uberPrice.calculatePrice(time, 15, 5)); // Calculate the price for a 15 minute, 5 mile trip