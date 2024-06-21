import TableRecord from '@/components/table-record/TableRecord';
import styles from './mealplanner.module.css';

const records = [
  {
    title: 'Starch',
    subTitle: '',
    carb: 15,
    protein: 3,
    fat: '0',
    fiber: 2,
    calorie: 80,
  },
  {
    title: 'Vegetables',
    subTitle: '',
    carb: 5,
    protein: 1,
    fat: 0,
    fiber: 1.5,
    calorie: 25,
  },
  {
    title: 'Fruits',
    subTitle: '',
    carb: 15,
    protein: 0,
    fat: 0,
    fiber: 1.5,
    calorie: 60,
  },
  {
    title: 'Legume',
    subTitle: '',
    carb: 15,
    protein: 7,
    fat: 0,
    fiber: 3,
    calorie: 25,
  },
  {
    title: 'Milk',
    subTitle: 'Low Fat',
    carb: 12,
    protein: 8,
    fat: 3,
    fiber: 0,
    calorie: 100,
  },
  {
    title: 'Milk',
    subTitle: 'Medium Fat',
    carb: 12,
    protein: 8,
    fat: 5,
    fiber: 0,
    calorie: 120,
  },
  {
    title: 'Milk',
    subTitle: 'High Fat',
    carb: 12,
    protein: 8,
    fat: 8,
    fiber: 0,
    calorie: 160,
  },
  {
    title: 'Meat',
    subTitle: 'Low Fat',
    carb: 0,
    protein: 7,
    fat: 3,
    fiber: 0,
    calorie: 45,
  },
  {
    title: 'Meat',
    subTitle: 'Medium Fat',
    carb: 0,
    protein: 7,
    fat: 5,
    fiber: 0,
    calorie: 75,
  },
  {
    title: 'Meat',
    subTitle: 'High Fat',
    carb: 0,
    protein: 7,
    fat: 8,
    fiber: 0,
    calorie: 100,
  },
  {
    title: 'Fat',
    subTitle: 'SFA',
    carb: 0,
    protein: 0,
    fat: 5,
    fiber: 0,
    calorie: 45,
  },
  {
    title: 'Fat',
    subTitle: 'MUFA',
    carb: 0,
    protein: 0,
    fat: 5,
    fiber: 0,
    calorie: 45,
  },
  {
    title: 'Fat',
    subTitle: 'PUFA',
    carb: 0,
    protein: 0,
    fat: 5,
    fiber: 0,
    calorie: 45,
  },
  {
    title: 'Other',
    subTitle: '',
    carb: 15,
    protein: 0,
    fat: 0,
    fiber: 0,
    calorie: 0,
  },
];
const MealPlannerPage = () => {
  return (
    <div>
      <div>
        <table>
          <thead className={styles.tableHead}>
            <tr>
              <th>Food Group</th>
              <th>Serving Units</th>
              <th>Carbohydrates</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Fiber</th>
              <th>Calorie</th>
              {/* <th width="19%">Food Group</th>
              <th width="15%">Serving Units</th>
              <th width="12%">Carbohydrates</th>
              <th width="12%">Protein</th>
              <th width="12%">Fat</th>
              <th width="12%">Fiber</th>
              <th width="12%">Calorie</th> */}
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <TableRecord item={record} key={record.title}></TableRecord>
            ))}
          </tbody>
        </table>
      </div>
      <div>target</div>
    </div>
  );
};

export default MealPlannerPage;
