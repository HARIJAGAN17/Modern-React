import classes from "./FooterFilters.module.scss";

function Filter() {
  return (
    <>
      <div className={classes.filters}>
        <div>
          <p>Filter by state</p>
        </div>
      </div>
    </>
  );
}

export default Filter;