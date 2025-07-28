export function string() {
  console.log(
    "--------------------String Fundamentals---------------------------------"
  );

  //alert("Hello, World!");
  const greeting = "Hello" + ", " + "World!";
  console.log(greeting);

  // Type coersion
  const numString = "Hello" + "3";
  console.log(numString);

  // When calculating money
  // 1.Calculate in cents
  // 2.Convert back to dollars

  // const num = "$" + (20.95 + 7.99);
  const num = "$" + (2095 + 799) / 100;
  console.log(num);

  console.log(
    "--------------------String Fundamentals---------------------------------"
  );
}
