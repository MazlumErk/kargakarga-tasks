// React js
import { useEffect, useState } from "react";

// types
type datas = {
  sources: [];
  facilities: [];
  units: [];
  fuel_types: [];
  fuels: [];
};

type results = {
  co2: string;
  ch4: string;
  no2: string;
  co2e: string;
};

export default function MFormAndResults() {
  // States
  const [data, setData] = useState<datas>(); // form data
  const [resultData, setResultData] = useState<results>({co2: "",ch4: "", no2: "", co2e : ""});
  const [isFormLoaded, setIsFormLoaded] = useState(false); // form yüklendi mi
  const [isResultLoaded, setIsResultLoaded] = useState(false); // cevap yüklendi mi

  // source
  const [source, setSource] = useState("");
  // fuel type
  const [fuelType, setFuelType] = useState("");
  // fuel
  const [fuel, setFuel] = useState("");

  // Fonksiyonlar

  // Form verilerini almak için
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
      setIsFormLoaded(true);
      console.log("Form Yüklendi");
    } catch (error) {
      console.log(error);
    }
  };
// sonuçları almak için
  const getResults = async () => {
    try {
      const response = await fetch(
        "http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data-calculate?source_id=12&fuel_type_id=12&fuel_id=12&unit_id=12&amount=12&facility=somestring&year=2022",
        {
          method: "GET",
          // mode: "no-cors",
          headers: { "Content-type": "application/json" },
        }
      );
      setResultData(await response.json());
      setIsResultLoaded(true);
      console.log("Cevap Yüklendi");
    } catch (error) {
      console.log(error);
    }
  };

  // Formu resetlemek için

  const resetForm = () => {
    document.getElementById("form")!.reset();
  }


  // useEffect
  useEffect(() => {
    getForms();
  }, []);
  return (
    <div className="mFormAndResults">
      <div className="inputArea">
        {/* Form başlığı ve açıklaması ---------------------------*/}
        <h1 className="inputFormTitle">GİRDİ ALANI</h1>
        <hr style={{ width: 140, strokeWidth: 1, stroke: "#D0D0D0" }}></hr>
        <p className="inputExplanation">
          Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları
          doldurun:
        </p>
        {/* Form */}
        {isFormLoaded ? (
          <form id="form">
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
            {/* Year */}
            <div className="mCustomInput">
              <label className="customInputName">Year</label>
              <div className="customInputBorder">
                <input type="date" name="date" id="date" />
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
                  {data!.fuel_types.map(
                    (fuelType: any, index: number) =>
                      fuelType.source_type_id == source && (
                        <option value={fuelType.id} key={index}>
                          {fuelType.name_tr}
                        </option>
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
                  {data!.fuels.map(
                    (fuel: any, index: number) =>
                      fuel.fuel_type_id == fuelType && (
                        <option value={fuel.id} key={index}>
                          {fuel.name_tr}
                        </option>
                      )
                  )}
                </select>
              </div>
            </div>
            {/* Amount of activity */}
            <div className="mCustomInput">
              <label className="customInputName">Amount of Activity</label>
              <div className="customInputBorder">
                <input
                  type="number"
                  name="text"
                  id="text"
                  placeholder="Giriniz"
                />
                {/* Units */}
                <div className="units">
                  <h6>Units</h6>
                  <select
                    id="units"
                    name="units"
                    onChange={(event) => getResults()}
                  >
                    <option value="null">Seçiniz</option>
                    {data!.units.map(
                      (unit: any, index: number) =>
                        unit.fuel_id == fuel && (
                          <option value={unit.id} key={index}>
                            {unit.name_tr}
                          </option>
                        )
                    )}
                  </select>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <p>Yükleniyor...</p>
        )}
      </div>
      {/* Sonuçlar ---------------------------*/}
      <div className="resultArea">
        {/* Sonu */}
        <h1 className="inputFormTitle">SONUÇ ALANI</h1>
        <hr style={{ width: 140, strokeWidth: 1, stroke: "#D0D0D0" }}></hr>
        <p className="inputExplanation">
          `Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz miktarları
          aşağıdaki gibidir:`
        </p>
        {/* Sonuç kutuları */}
        {/* co2 */}
        <div className="mResultBox">
          <div className="resultName">
            <h4>CO<sub>2</sub></h4>
          </div>
          {isFormLoaded && <p>{resultData!.co2}</p>}
        </div>
        {/* ch4 */}
        <div className="mResultBox">
          <div className="resultName">
            <h4>CH<sub>4</sub></h4>
          </div>
          {isFormLoaded && <p>{resultData!.ch4}</p>}
        </div>
        {/* n2o */}
        <div className="mResultBox">
          <div className="resultName">
            <h4>N<sub>2</sub>O</h4>
          </div>
          {isFormLoaded && <p>{resultData!.no2}</p>}
        </div>
        {/* co2e */}
        <div className="mResultBox">
          <div className="resultName">
            <h4>CO<sub>2</sub>e</h4>
          </div>
          {isFormLoaded && <p>{resultData!.co2e}</p>}
        </div>
        <input type="button" value="aa" onClick={() => resetForm()}/>
        
      </div>
    </div>
  );
}
