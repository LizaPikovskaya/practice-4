import { RiDeleteBinLine } from 'react-icons/ri';
import { AiFillDislike, AiFillLike, AiOutlineEdit, AiOutlineSave } from 'react-icons/ai';
import { Text } from 'components';
import { DeleteButton, TodoWrapper, LikeButton, EditButton, InputEdit } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { decrementLike, deleteTodo, editTextTodo, incrementLike } from 'redux/todosSlice';
import { useState } from 'react';

export const Todo = ({ text, counter, id, likes }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEdit(true)
  };

  const handleSave = () => {
    setIsEdit(false);
    dispatch(editTextTodo({ id, text: editText }));
  };

  const handleChange = (event) => {
    setEditText(event.target.value)
  }

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{isEdit ? <InputEdit defaultValue={text} onChange={handleChange} /> : <>{ text }</>}</Text>
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
        {!isEdit ? (<EditButton onClick={handleEdit} type="button">
          <AiOutlineEdit size={24}/>
        </EditButton>): (<EditButton onClick={handleSave} type="button">
          <AiOutlineSave size={24}/>
        </EditButton>)}
      </TodoWrapper>
    </>
  );
};
