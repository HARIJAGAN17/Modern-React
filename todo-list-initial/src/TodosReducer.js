export default function TodosReducer(todos, action) {
  switch (action.type) {
    case "deleted":
      if (confirm("Are you sure you wan to delete ?"))
        return todos.filter((item) => item.id !== action.elId);
    case "toggle":
      return todos.map((item) => {
        if (item.id === action.elId) {
          item.isDone != item.isDone;
          return item;
        } else {
          return item;
        }
      });
  }
}
