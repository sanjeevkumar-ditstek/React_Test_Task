import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { increment, decrement, selectCount } from "./counterSlice";
import Box from "../Box";
import { Button, ButtonsWrapper, Count, CounterWrapper } from "./elements";
const Counter: FC = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <Box>
      <CounterWrapper>
        <ButtonsWrapper>
          <Button title="increment" onClick={() => dispatch(increment())}>
            +1
          </Button>
          <Count title="count" >{count}</Count>
          <Button title="decrement" onClick={() => dispatch(decrement())}>-1</Button>
        </ButtonsWrapper>
      </CounterWrapper>
    </Box>
  );
};

export default Counter;
