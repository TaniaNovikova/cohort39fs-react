//Создайте компонент "Card" в папке "components".
// В нем нужно создать карточку с информацией о вымышленном пользователе Гомере Симпсоне:

// аватар
// имя и фамилия
// род деятельности
// хобби
// Верстка и стили на ваше усмотрение.
// Писать нужно на React, используя изученный на лекции синтаксис jsx.

import "./styles.css";
import avatar from "../../assets/images/Homer_Simpson .png";

function Card() {
  const firstName = "Homer";
  const lastName = "Simpson";
  const job =
    "Nuclear safety inspector at the Springfield Nuclear Power Plant (in Sector 7-G)";
  const hobby = "Donuts, Duff beer and eating in general";

  return (
    <div className="user-card-wrapper">
      <div className="img-wrapper">
        <img className="avatar" src={avatar} alt="User avatar" />
      </div>
      <div className="info-wrapper">
        <div className="user-info">
          <p className="user-label">Firstname:</p>
          <p className="user-data">{firstName}</p>
        </div>
        <div className="user-info">
          <p className="user-label">Lastname:</p>
          <p className="user-data">{lastName}</p>
        </div>
        <div className="user-info">
          <p className="user-label">Job:</p>
          <p className="user-data">{job}</p>
        </div>
        <div className="user-info">
          <p className="user-label">Hobby:</p>
          <p className="user-data">{hobby}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
