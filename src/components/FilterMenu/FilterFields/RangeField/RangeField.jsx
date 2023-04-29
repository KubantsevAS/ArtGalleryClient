import { Range } from "fwt-internship-uikit";
import styles from "./RangeField.module.scss";

export function RangeField({
  setCurrentPage,
  setFilterItems,
  dispatch,
  filter,
}) {
  const handleInput = (e) => {
    if (e.target.placeholder === "from") {
      dispatch(setFilterItems({ ...filter, rangeStart: e.target.value }));
    } else {
      dispatch(setFilterItems({ ...filter, rangeEnd: e.target.value }));
    }
    dispatch(setCurrentPage(1));
  };

  return (
    <Range onClose={() => {}} value="Created">
      <input
        className={styles["range__input"]}
        placeholder="from"
        type={"number"}
        value={filter.rangeStart}
        onChange={handleInput}
      />
      <span className={styles["dash"]} />
      <input
        className={styles["range__input"]}
        placeholder="before"
        type={"number"}
        value={filter.rangeEnd}
        onChange={handleInput}
      />
    </Range>
  );
}
