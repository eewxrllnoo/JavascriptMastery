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

  const num2 = "Item (" + (1 + 1) + "):  $" + (2095 + 799) / 100; // Concatenation
  console.log(num2);

  // Template String
  // Interpolation and Multi-line strings

  const num3 = `Item (${1 + 1}):  $${(2095 + 799) / 100}`; // Interpolation
  console.log(num3);

  const num4 = `Some
  text`; // Multi-line string
  console.log(num4);

  // Interpolation - Insert a value durectly into a string

  console.log(
    "--------------------String Fundamentals---------------------------------"
  );
}
