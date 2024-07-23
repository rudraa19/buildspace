# Basic Unit Converter

---

### Approach

This program is designed to convert various units of temperature, currency, and mass based on user input. It prompts the user to select a category (Temperature, Currency, or Mass) and then provides specific conversion options within the chosen category. The program reads the user's choice, performs the appropriate conversion, and displays the result.

<br />
### Functionality Required

1. **User Input**: Prompt the user to select a conversion category (Temperature, Currency, or Mass) and the specific conversion type within that category.
2. **Temperature Conversion**:
   - Fahrenheit to Celsius
   - Celsius to Fahrenheit
3. **Currency Conversion**:
   - INR to USD
   - INR to Euro
   - INR to JPY
4. **Mass Conversion**:
   - Ounces to Kilograms
   - Grams to Kilograms
5. **Conversion Calculation**: Perform the necessary calculations for the selected conversion type.
6. **Output**: Display the converted value to the user.

<br />
### Sample Input/Output

```
Welcome to Unit Converter! 
Here is a list of conversions to choose from: 
Temperature(T), Currency(C), Mass(M) 
Please enter the letter you want to convert.
T
Welcome to Temperature Converter! 
Here is a list of conversions to choose from: 
Enter 1 for Fahrenheit to Celsius. 
Enter 2 for Celsius to Fahrenheit. 
1
Please enter the Fahrenheit degree: 
94
Celsius: 34
```

<br />
### Source Code

<pre><code language='c'>

\#include \<stdio.h\>

int main() {
  char category;
  int tempChoice;
  int currencyChoice;
  int massChoice;
  int userinputF; // User inputted Fahrenheit
  int userinputC; // User inputted Celsius
  int userinputINRtoUSD; // User inputted for INR to USD
  int userinputINRtoEuro; // User inputted for INR to Euro
  int userinputINRtoJPY; // User inputted for INR to JPY
  int userinputOunce; // User inputted for Ounce
  int userinputGram; // User inputted for Gram
  int fahrenheitToCelcius; // variable that stores the converted F->C
  int celciusToFahrenheit; // variable that stores the converted C->F
  float INRtoUSD; // variable that stores the converted INR->USD
  float INRtoEuro; // stores the converted INR->Euro
  float INRtoJPY; // stores the converted INR->JPY
  float ounceToKg; // stores the converted Ounce->Kg
  float gramsToKg; // stores the converted Grams->Kg
  // printing and getting input
  printf("Welcome to Unit Converter! \n");
  printf("Here is a list of conversions to choose from: \n");
  printf("Temperature(T), Currency(C), Mass(M) \n");
  printf("Please enter the letter you want to convert.\n");
  scanf(" %c", &category); // Note the space before %c to consume any leftover newline character
  if(category \== 'T'){
      printf("Welcome to Temperature Converter! \n");
      printf("Here is a list of conversions to choose from: \n");
      printf("Enter 1 for Fahrenheit to Celsius. \n");
      printf("Enter 2 for Celsius to Fahrenheit. \n");
      scanf("%d", &tempChoice);
      if(tempChoice \== 1){
          printf("Please enter the Fahrenheit degree: \n");
          scanf("%d", &userinputF);
          fahrenheitToCelcius = ((userinputF-32) \* (5.0/9.0));
          printf("Celsius: %d\n", fahrenheitToCelcius);
      }
      else if(tempChoice \== 2){
        printf("Please enter the Celsius degree: \n");
        scanf("%d", &userinputC);
        celciusToFahrenheit = ((9.0/5.0) \* userinputC + 32);
        printf("Fahrenheit: %d\n", celciusToFahrenheit);
      }
      else
        printf("Please enter the correct choice. \n");
  }
  else if(category \== 'C') {
      printf("Welcome to Currency Converter! \n");
      printf("Here is a list of conversions to choose from: \n");
      printf("Enter 1 for INR to USD. \n");
      printf("Enter 2 for INR to Euro. \n");
      printf("Enter 3 for INR to JPY. \n");
      scanf("%d", &currencyChoice);
      if(currencyChoice \== 1){
          printf("Please enter the INR amount: \n");
          scanf("%d", &userinputINRtoUSD);
          INRtoUSD = userinputINRtoUSD \* 0.013; // Conversion rate from INR to USD
          printf("USD: %.2f\n", INRtoUSD); // %.2f = rounds the float to only 2 decimal places
      }
      else if(currencyChoice \== 2){
          printf("Please enter the INR amount: \n");
          scanf("%d", &userinputINRtoEuro);
          INRtoEuro = userinputINRtoEuro \* 0.011; // Conversion rate from INR to Euro
          printf("Euro: %.2f\n", INRtoEuro);
      }
      else if(currencyChoice \== 3) {
        printf("Please enter the INR amount: \n");
        scanf("%d", &userinputINRtoJPY);
        INRtoJPY = userinputINRtoJPY \* 1.44; // Conversion rate from INR to JPY
        printf("JPY: %.2f\n", INRtoJPY);
      }
      else
        printf("Please enter the correct choice. \n");
   }
  else if(category \== 'M'){
      printf("Welcome to Mass Converter! \n");
      printf("Here is a list of conversions to choose from: \n");
      printf("Enter 1 for ounces to kilograms. \n");
      printf("Enter 2 for grams to kilograms. \n");
      scanf("%d", &massChoice);
      if(massChoice \== 1){
          printf("Please enter the ounce amount: \n");
          scanf("%d", &userinputOunce);
          ounceToKg = userinputOunce \* 0.0283495; // Conversion rate from ounces to kilograms
          printf("Kilograms: %.4f\n", ounceToKg); // %.4f = rounds the float to 4 decimal places
      }
      else if(massChoice == 2) {
          printf("Please enter the gram amount: \n");
          scanf("%d", &userinputGram);
          gramsToKg = userinputGram * 0.001; // Conversion rate from grams to kilograms
          printf("Kilograms: %.4f\n", gramsToKg); // %.4f = rounds the float to 4 decimal places
      }
      else 
        printf("Please enter the correct choice. \n");
   }
  return 0;
}
</code></pre>

> *See code on github: * <button name='basic-unit-converter' language='c'>See Code</button>

<br />
### References

<u>[GitHub](https://github.com/achen58/Basic-Unit-Converter)</u>