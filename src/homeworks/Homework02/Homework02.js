// Создайте локально новую ветку от вашей главной (например от главной ветки main создать ветку homework02)

// Создайте компонент "Card" в папке "components". 
// В нем нужно создать карточку с информацией о вымышленном пользователе Гомере Симпсоне:

// аватар
// имя и фамилия
// род деятельности
// хобби
// Верстка и стили на ваше усмотрение. 
// Писать нужно на React, используя изученный на лекции синтаксис jsx.
//  Затем нужно импортировать компонет Card в компонент Homework02, где переиспользовать его 3 раза.
//   В App.jsx отобразить компонент Homework02.

import Card from "../../components/Card/Card";
import "./styles.css";

function Homework02() {
  return (
    <div className="homework02-component">
      <div className="homework-name">Homework02</div>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Homework02;

