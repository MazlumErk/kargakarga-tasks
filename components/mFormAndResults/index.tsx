// React js
import { useEffect, useState } from "react";


// type
type datas = {
  sources: [],
  facilities: [],
  units: [],
  fuel_types: [],
  fuels: [],
}

export default function MFormAndResults() {
  // States
  const [data, setData] = useState<datas>();
  const [isLoaded, setIsLoaded] = useState(false);

  // source
  const [source, setSource] = useState("");
  // fuel type
  const [fuelType, setFuelType] = useState("");
  // fuel
  const [fuel, setFuel] = useState("");

  // Fonksiyonlar
  const getForms = async () => {
    try {
      const response = await fetch(
        "http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data",
        {
          method: "GET",
          // mode: "no-cors",
          headers: { "Content-type": "application/json" },
        }
      );
      setData(await response.json());
      setIsLoaded(true);
      console.log("Yüklendi");
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect
  useEffect(() => {
    getForms();
  }, []);
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
        {isLoaded ? (
          <form>
            {/* Facilty */}
            <div className="mCustomInput">
              <label className="customInputName">Facilty</label>
              <div className="customInputBorder">
                <select
                  id="facilty"
                  name="facilty"
                  onChange={(event) => console.log(event.target.value)}
                >
                  <option value="null">Seçiniz</option>
                  {data!.facilities.map((facility: any, index: number) => (
                    <option value={facility} key={index}>
                      {facility}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Fuel Source */}
            <div className="mCustomInput">
              <label className="customInputName">Fuel Source</label>
              <div className="customInputBorder">
                <select
                  id="source"
                  name="source"
                  onChange={(event) => setSource(event.target.value)}
                >
                  <option value="null">Seçiniz</option>
                  {data!.sources.map((source: any, index: number) => (
                    <option value={source.id} key={index}>
                      {source.name_tr}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Fuel Type */}
            <div className="mCustomInput">
              <label className="customInputName">Fuel Type</label>
              <div className="customInputBorder">
                <select
                  id="fuelType"
                  name="fuelType"
                  onChange={(event) => setFuelType(event.target.value)}
                >
                  <option value="null">Seçiniz</option>
                  {data!.fuel_types.map((fuelType: any, index: number) =>
                    fuelType.source_type_id == source ? (
                      <option value={fuelType.id} key={index}>
                        {fuelType.name_tr}
                      </option>
                    ) : (
                      <></>
                    )
                  )}
                </select>
              </div>
            </div>
            {/* Fuel */}
            <div className="mCustomInput">
              <label className="customInputName">Fuel</label>
              <div className="customInputBorder">
                <select
                  id="fuel"
                  name="fuel"
                  onChange={(event) => setFuel(event.target.value)}
                >
                  <option value="null">Seçiniz</option>
                  {data!.fuels.map((fuel: any, index: number) =>
                    fuel.fuel_type_id == fuelType ? (
                      <option value={fuel.id} key={index}>
                        {fuel.name_tr}
                      </option>
                    ) : (
                      <></>
                    )
                  )}
                </select>
              </div>
            </div>
          </form>
        ) : (
          <p>Yükleniyor...</p>
        )}
      </div>
      {/* Sonuçlar */}
      <div className="resultArea"></div>
    </div>
  );
}
