import { ReactComponent as Fire } from "./icon/fire.svg";
import { ReactComponent as Iceberg } from "./icon/iceberg.svg";

import volcano from "./icon/volcano.png";
import drought from "./icon/drought.png";
import earthquake from "./icon/earthquake.png";
import flood from "./icon/flood.png";
import wind from "./icon/wind.png";
import snow from "./icon/snow.png";
const LocationMarker = ({ id, onClick }) => {
  return (
    <div className="marker" onClick={onClick}>
      {id === 8 && <Fire />}
      {id === 10 && <img src={wind} alt="Storm" />}
      {id === 15 && <Iceberg />}
      {id === 17 && <img src={snow} alt="snow" />}
      {id === 6 && <img src={drought} alt="drought" />}
      {id === 16 && <img src={earthquake} alt="earthquake" />}
      {id === 9 && <img src={flood} alt="flood" />}
      {id === 12 && <img src={volcano} alt="volcano" />}
    </div>
  );
};

export default LocationMarker;
