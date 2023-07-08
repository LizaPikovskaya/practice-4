import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';

const TodoList = () => {
  // const todos = [{ text: 'Dog', id: 1 }];

  const filter = useSelector(state => state.filter);
  const todos = useSelector(selectTodos);

  const visibleTodos = () => {
    return todos.filter(todo => todo.text.includes(filter));
  };

  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
      <Grid>
        {todos.length > 0 &&
          visibleTodos().map(({ id, text, likes }, index) => (
            <GridItem key={id}>
              <Todo id={id} text={text} likes={likes} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default TodoList;
