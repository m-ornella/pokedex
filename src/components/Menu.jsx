import { LANGUAGES } from "../constants";
import i18n from "../i18n";




export const Menu = () => {
  return (
    <nav>
      {/* <div>
        <li className={isActive} to="/">
          EN
        </li>
        <li className={isActive} to="/">
          FR
        </li>
      </div> */}

      <select defaultValue={"en"} onChange={handleSelectChange}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </nav>
  );
};
const handleSelectChange = (event) => {
  console.log(event);
  const newValue = event.target.value;
  i18n.changeLanguage(newValue);
};
export default Menu;