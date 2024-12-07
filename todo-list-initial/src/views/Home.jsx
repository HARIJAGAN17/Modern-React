import Filter from "../components/Filter.jsx";
import AddTodoModal from "../components/modals/AddTodoModal.jsx";
import ModalWindow from "../components/modals/ModalWindow.jsx";
import TodosList from "../components/TodosList.jsx";
import { useTodos } from "../TodosContext.jsx";

function Home() {
  const store = useTodos();

  return (
    <>
      {store.modals && (
        <ModalWindow>
          <AddTodoModal />
        </ModalWindow>
      )}
      <div className="container">
        <Filter />
        <TodosList />
      </div>
    </>
  );
}

export default Home;
