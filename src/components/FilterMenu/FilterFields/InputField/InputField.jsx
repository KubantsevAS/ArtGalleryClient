import { Input } from "fwt-internship-uikit";
import { cross, crossDark } from "../../../../common/Cross";
import styles from "./InputField.module.scss";

export function InputField({
  setCurrentPage,
  setFilterItems,
  dispatch,
  filter,
}) {
  const handleInputName = (e) => {
    dispatch(setFilterItems({ ...filter, name: e.target.value }));
    dispatch(setCurrentPage(1));
  };

  const clearValue = () => {
    dispatch(setFilterItems({ ...filter, name: "" }));
  };

  return (
    <div className={styles["field-wrapper"]}>
      <Input
        value={filter.name || ''}
        onChange={handleInputName}
        placeholder="Name"
        isDarkTheme={false}
      />
      {filter.name && (
        <button onClick={clearValue} className={styles["clear-button"]}>
          {cross}
        </button>
      )}
    </div>
  );
}
