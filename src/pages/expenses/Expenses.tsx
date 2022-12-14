import React from "react"
import styles from "./Expenses.module.scss"
import personOne from "../../assets/png/person1.png"
import personTwo from "../../assets/png/person2.png"
import personThree from "../../assets/png/person3.png"
import addIcon from "../../assets/png/addIcon.png"

const Expenses = () => {
  return (
    <main className={styles.expenses}>
      <div className={styles.expensesCard}>
        <section className={styles.expensesOverview}>
          <div className={styles.expensesHeader}>
            <p className={styles.expensesTitle}>Expenses</p>
            <div className={styles.expensesActions}>
              <div className={styles.personImages}>
                <img src={personOne} alt='person one' />
                <img src={personTwo} alt='person two' />
                <img src={personThree} alt='person three' />
              </div>
              <button>
                <img src={addIcon} alt='add' />
              </button>
            </div>
          </div>
          <p className={styles.dateRange}>01 - 23 March, 2020</p>
        </section>
      </div>
    </main>
  )
}

export default Expenses
