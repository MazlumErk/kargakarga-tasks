// React
import { useEffect } from "react";

const inputs = [
  {
    inputName: "Facilty",
    id: "Facilty",
    options: [
      {
        value: "s",
        name: "s",
      },
      {
        value: "s",
        name: "s",
      },
      {
        value: "s",
        name: "s",
      },
    ],
  },
  {
    inputName: "Year",
    id: "Year",
    options: [
      {
        value: "s",
        name: "s",
      },
      {
        value: "s",
        name: "s",
      },
      {
        value: "s",
        name: "s",
      },
    ],
  },
  {
    inputName: "Fuel Source",
    id: "FuelSource",
    options: [
      {
        value: "s",
        name: "s",
      },
      {
        value: "s",
        name: "s",
      },
      {
        value: "s",
        name: "s",
      },
    ],
  },
  {
    inputName: "Fuel Type",
    id: "FuelType",
    options: [
      {
        value: "s",
        name: "s",
      },
      {
        value: "s",
        name: "s",
      },
      {
        value: "s",
        name: "s",
      },
    ],
  },
  {
    inputName: "Fuel",
    id: "Fuel",
    options: [
      {
        value: "s",
        name: "s",
      },
      {
        value: "s",
        name: "s",
      },
      {
        value: "s",
        name: "s",
      },
    ],
  },
];

export default function MFormAndResults() {
  // Fonksiyonlar
  const getForms = async () => {
    try {
      const response = await fetch(
        "http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data",
        {
          method: "GET",
          mode: "no-cors",

        }
      );
      const data = await response.json()
      console.log(data)
      console.log("bitti");
    } catch (error) {
      console.log(error)
    }
  };
  // useEffect
  useEffect(() => {
    getForms();
  });
  return (
    <div className="mFormAndResults">
      <div className="inputArea">
        {/* Form başlığı ve açıklaması */}
        <h1 className="inputFormTitle">Girdi Alanı</h1>
        <hr style={{ width: 140, strokeWidth: 1, stroke: "#D0D0D0" }}></hr>
        <p className="inputExplanation">
          Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları
          doldurun:
        </p>
        {/* Form */}
        <form>
          {inputs.map((input, index) => (
            <div className="mCustomInput" key={index}>
              <label className="customInputName">{input.inputName}</label>
              <div className="customInputBorder">
                <select id={input.id} name={input.inputName}>
                  {input.options.map((option, index) => (
                    <option value={option.value} key={index}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </form>
      </div>
      {/* Sonuçlar */}
      <div className="resultArea"></div>
    </div>
  );
}
