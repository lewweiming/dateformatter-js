# dateformatter-js
Simple date formatter class

Code organised by ChatGPT

## Usage

```
// Example usage:
const date = new Date();
date.setDate(date.getDate() - 1); // set date to yesterday
console.log(DateFormatter.getTimeDiffString(date.getTime())); // Outputs: Yesterday at [current time formatted]

date.setDate(date.getDate() - 4); // set date to 4 days ago
console.log(DateFormatter.getTimeDiffString(date.getTime())); // Outputs: 5 days ago

console.log(DateFormatter.getTimeDiffString(new Date().getTime())); // Outputs: Just now

date.setHours(17);
date.setMinutes(42);
console.log(DateFormatter.getTimeDiffString(date.getTime())); // Outputs: Today at 5:42PM
```
