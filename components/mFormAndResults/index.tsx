"use client";
// React js
import { useEffect, useState } from "react";
import MCustomButton from "../mCustomButton";

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
  const [resultData, setResultData] = useState<results>({
    co2: "",
    ch4: "",
    no2: "",
    co2e: "",
  });
  const [isFormLoaded, setIsFormLoaded] = useState(false); // form yüklendi mi
  const [isResultLoaded, setIsResultLoaded] = useState(false); // cevap yüklendi mi

  // Filtreler
  // source
  const [source, setSource] = useState("");
  // facility id
  const [facilityId, setFacilityId] = useState("");
  // year
  const [selectedYear, setSelectedYear] = useState("");
  // fuel type
  const [fuelType, setFuelType] = useState("");
  // fuel
  const [gettedFuel, setFuel] = useState("");
  const [fuelName, setFuelName] = useState("");
  // amount of fuel
  const [amountOfFuel, setAmountOfFuel] = useState("");
  // units
  const [units, setUnits] = useState("");

  // tablo verileri
  const [savedDatas, setSavedDatas] = useState([
    // Örnek veri
    {
      facilityId: "1",
      selectedYear: "2023",
      fuel: "1",
      amountOfFuel: "1",
      units: "1",
      co2: "1",
      ch4: "1",
      no2: "1",
      co2e: "1",
    },
  ]);

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

  // tabloya kayıt
  const saveToTable = () => {
    setSavedDatas([
      ...savedDatas,
      {
        facilityId: facilityId,
        selectedYear: selectedYear,
        fuel: fuelName,
        amountOfFuel: amountOfFuel,
        units: units,
        co2: resultData.co2,
        ch4: resultData.ch4,
        no2: resultData.no2,
        co2e: resultData.co2e,
      },
    ]);
  };

  // tablo slime

  const deleteFromTable = (index: number) => {
    const newTableDatas = savedDatas.splice(index, index);
    setSavedDatas(newTableDatas);
  };

  // tablodan veri çekme

  const getValuesFromTable = (facilty:number) => {
    // facility
    const faciltyElement = document.getElementById(
      "facilty"
    ) as HTMLFormElement | null;
    if (faciltyElement) {
      faciltyElement.value = 2
    }

    // year
    const yearElement = document.getElementById(
      "date"
    ) as HTMLFormElement | null;
    if (faciltyElement) {
      faciltyElement.value = 3
    }
  };

  // Formu resetlemek için

  const resetForm = () => {
    const formElement = document.getElementById(
      "form"
    ) as HTMLFormElement | null;
    if (formElement) {
      formElement.reset();
    }
  };

  // useEffect
  useEffect(() => {
    getForms();
  }, []);
  return (
    <div className="mFRAndTable">
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
                    onChange={(event) => setFacilityId(event.target.value)}
                  >
                    <option value="null">Seçiniz</option>
                    {data!.facilities.map((facility: any, index: number) => (
                      <option value={index + 1} key={index}>
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
                  <input
                    type="date"
                    name="date"
                    id="date"
                    onChange={(event) => setSelectedYear(event.target.value)}
                  />
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
                    onChange={(event) => {
                      setFuel(event.target.value);
                      data!.fuels.map((fuel: any, index: number) => {
                        if (fuel.id == gettedFuel) {
                          setFuelName(fuel.name_tr);
                        }
                      });
                    }}
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
                    onChange={(event) => {
                      setAmountOfFuel(event.target.value);
                    }}
                  />
                  {/* Units */}
                  <div className="units">
                    <h6>Units</h6>
                    <select
                      id="units"
                      name="units"
                      onChange={(event) => {
                        setUnits(event.target.value);
                        getResults();
                      }}
                    >
                      <option value="null">Seçiniz</option>
                      {data!.units.map(
                        (unit: any, index: number) =>
                          unit.fuel_id == gettedFuel && (
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
          {/* Sonuç */}
          <h1 className="inputFormTitle">SONUÇ ALANI</h1>
          <hr style={{ width: 140, strokeWidth: 1, stroke: "#D0D0D0" }}></hr>
          <p className="inputExplanation">
            Girdi Alanı&apos;nda girdiğiniz değerlere göre salınan gaz
            miktarları aşağıdaki gibidir:
          </p>
          {/* Sonuç kutuları */}
          {/* co2 */}
          <div className="mResultBox">
            <div className="resultName">
              <h4>
                CO<sub>2</sub>
              </h4>
            </div>
            {isResultLoaded && <p>{resultData!.co2}</p>}
          </div>
          {/* ch4 */}
          <div className="mResultBox">
            <div className="resultName">
              <h4>
                CH<sub>4</sub>
              </h4>
            </div>
            {isResultLoaded && <p>{resultData!.ch4}</p>}
          </div>
          {/* n2o */}
          <div className="mResultBox">
            <div className="resultName">
              <h4>
                N<sub>2</sub>O
              </h4>
            </div>
            {isResultLoaded && <p>{resultData!.no2}</p>}
          </div>
          {/* co2e */}
          <div className="mResultBox">
            <div className="resultName">
              <h4>
                CO<sub>2</sub>e
              </h4>
            </div>
            {isResultLoaded && <p>{resultData!.co2e}</p>}
          </div>
          <div className="resetAndSave">
            <MCustomButton
              label={"Sıfırla"}
              func={function () {
                resetForm();
              }}
            />
            <MCustomButton
              label={"Kaydet"}
              func={function () {
                // Kayıt yapılacağı zaman
                saveToTable();
              }}
            />
          </div>
        </div>
      </div>
      {/* Tablo */}
      <table className="savedResults">
        <tbody>
          <tr>
            <th>Facilty ID</th>
            <th>Year</th>
            <th>Fuel</th>
            <th>Amount of Fuel</th>
            <th>Units</th>
            <th>
              CO<sub>2</sub>
            </th>
            <th>
              CH<sub>4</sub>
            </th>
            <th>
              N<sub>2</sub>O
            </th>
            <th>
              CO<sub>2</sub>e
            </th>
            <th></th>
          </tr>
          {savedDatas.map((data, index) => (
            <tr key={index}>
              <td>{data.facilityId}</td>
              <td>{data.selectedYear}</td>
              <td>{data.fuel}</td>
              <td>{data.amountOfFuel}</td>
              <td>{data.units}</td>
              <td>{data.co2}</td>
              <td>{data.ch4}</td>
              <td>{data.no2}</td>
              <td>{data.co2e}</td>
              <td>
                <div className="tableButtons">
                  <MCustomButton
                    label={"Sil"}
                    func={function () {
                      deleteFromTable(index);
                    }}
                  />
                  <MCustomButton label={"Düzenle"} func={function () {
                    getValuesFromTable(parseInt(data.facilityId))
                  }} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
