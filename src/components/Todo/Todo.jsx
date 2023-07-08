import { RiDeleteBinLine } from 'react-icons/ri';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { Text } from 'components';
import { DeleteButton, TodoWrapper, LikeButton } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { decrementLike, deleteTodo, incrementLike } from 'redux/todosSlice';

export const Todo = ({ text, counter, id, likes }) => {
  const dispatch = useDispatch();
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <Text>
          {likes}
          <LikeButton type="button" onClick={() => dispatch(incrementLike(id))}>
            <AiFillLike size={24} />
          </LikeButton>
          <LikeButton type="button" onClick={() => dispatch(decrementLike(id))}>
            <AiFillDislike size={24} />
          </LikeButton>
        </Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
