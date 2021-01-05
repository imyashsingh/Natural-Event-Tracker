const Infobox = ({ info }) => {
  return (
    <div className="infobox">
      <h2>Event Location Info</h2>
      <ul>
        <li>
          TITLE : <strong>{info.title}</strong>
        </li>
        <li>
          Source :
          <strong>
            <a href={info.source}>Link</a>
          </strong>
        </li>
        <li>
          <strong>
            coordinates : {info.lat},{info.lng}
          </strong>
        </li>
      </ul>
    </div>
  );
};

export default Infobox;
