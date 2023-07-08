import { InputSearch } from 'components/SearchForm/SearchForm.styled';
import { FilterWrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const handleInput = (event) => {
      dispatch(setFilter(event.target.value))
  };

  return (
    <FilterWrapper>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={filter}
        autoFocus
      />
    </FilterWrapper>
  );
};
