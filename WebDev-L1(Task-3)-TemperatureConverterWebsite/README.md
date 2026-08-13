# Temperature Converter

Interactive temperature converter web tool for converting values in Celsius,
Fahrenheit and Kelvin in real-time for Track: Web Development & Designing — Level 1,
Task 3.

Live Link : https://aashik-123-stu.github.io/OIBSIP/WebDev-L1(Task-3)-TemperatureConverterWebsite/

#  Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla)

#  Project Structure
```
temperature-converter/
├── index.html          # Markup: form, input, unit selector, results
├── css/
│   └── style.css        # Card-style design, error / highlight states
├── js/
│   └── script.js         # Input validation, conversion logic and
│                         # edge cases handling
└── README.md
```

#  Feature Checklist
- [x] Numeric input field with inline error message if the input is not a number
- [x] Dropdown menu with **input** units (Celsius / Fahrenheit / Kelvin)
- [x] All three values in different units are converted **concurrently**
       (automatic conversion), with highlighting of the input unit
- [x] Clicking on convert button runs the conversion process
- [x] Result block with labels of units (°C / °F / K)
- [x] Edge case of absolute zero — warning message instead of meaningless result
      when input value is below −273.15°C (in °F / K accordingly)
- [x] Clean, centered design with labels

#  Formulas for Conversion
| From → To | Formula |
|---|---|
| C → F | `F = C × 9/5 + 32` |
| F → C | `C = (F − 32) × 5/9` |
| C → K | `K = C + 273.15` |
| K → C | `C = K − 273.15` |
| F → K | `K = (F − 32) × 5/9 + 273.15` |
| K → F | `F = (K − 273.15) × 9/5 + 32` |

All conversions are done via internal conversion to Celsius (`toCelsius` → `fromCelsius`)
so as to keep the logic in one function instead of six separate formulas.

#  Absolute Zero Reference Points
| Unit | Absolute zero |
|---|---|
| Celsius | −273.15 °C |
| Fahrenheit | −459.67 °F |
| Kelvin | 0 K |

#  Inspiration Sources
Formulas for conversion verified against MDN Web Docs' recommendations on input validation
and general tutorials on temperature converter JavaScript web apps on YouTube.
Code and logic written from scratch.
