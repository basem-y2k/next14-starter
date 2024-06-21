import styles from './table-record.module.css';

const TableRecord = ({ item }) => {
  return (
    <tr>
      <td className={styles.tableLable}>
        {item.title}
        <div className={styles.tableSubLable}>{item.subTitle}</div>
      </td>
      <td>
        <span className={styles.placeHolderNone}>PlaceHolder</span>
        <input className={styles.tableInputServings} />
      </td>
      <td>
        <span
          className={
            item.carb === 0 ? styles.placeHolderNone : styles.placeHolder
          }
        >
          {item.carb}
        </span>
        <input className={styles.tableInputNutrients} disabled value="0" />
      </td>
      <td>
        <span
          className={
            item.protein === 0 ? styles.placeHolderNone : styles.placeHolder
          }
        >
          {item.protein}
        </span>
        <input className={styles.tableInputNutrients} disabled value="0" />
      </td>
      <td>
        <span
          className={
            item.fat === 0 ? styles.placeHolderNone : styles.placeHolder
          }
        >
          {item.fat}
        </span>
        <input className={styles.tableInputNutrients} disabled value="0" />
      </td>
      <td>
        <span
          className={
            item.fiber === 0 ? styles.placeHolderNone : styles.placeHolder
          }
        >
          {item.fiber}
        </span>
        <input className={styles.tableInputNutrients} disabled value="0" />
      </td>
      <td>
        <span
          className={
            item.calorie === 0 ? styles.placeHolderNone : styles.placeHolder
          }
        >
          {item.calorie}
        </span>
        <input className={styles.tableInputNutrients} disabled value="0" />
      </td>
    </tr>
  );
};

export default TableRecord;
