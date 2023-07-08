import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';

const TodoList = () => {
  // const todos = [{ text: 'Dog', id: 1 }];
  const todos = useSelector(selectTodos);
  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ... </Text>
      )}
      <Grid>
        {todos.length > 0 &&
          todos.map(({ id, text, likes }, index) => (
            <GridItem key={id}>
              <Todo id={id} text={text} likes={likes} counter={index + 1} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default TodoList;
