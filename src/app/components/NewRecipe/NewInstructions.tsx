import {
  AddBoxOutlined,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type NewInstructionsInterface = {
  instructions: string[]
  setInstrunctions: Dispatch<SetStateAction<string[]>>;
};

export default function NewInstructions(props: NewInstructionsInterface) {
  const [instructionCount, setInstrunctionCount] = useState<number>(1);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "full",
          justifyContent: "center",
          m: 1,
          fontSize: "2rem",
        }}
      >
        <IndeterminateCheckBoxOutlined
          onClick={() =>
            setInstrunctionCount(Math.max(instructionCount - 1, 0))
          }
          sx={{ fontSize: "inherit" }}
        />
        <AddBoxOutlined
          onClick={() => setInstrunctionCount(instructionCount + 1)}
          sx={{ fontSize: "inherit" }}
        />
      </Box>
      {Array.from({ length: instructionCount }).map((_, index) => (
        <TextField
          key={index}
          label={`Instruction ${index + 1}`}
          value={props.instructions[index] || ""}
          onChange={(e) => {
            const newInstructions = [...props.instructions];
            newInstructions[index] = e.target.value;
            props.setInstrunctions(newInstructions);
          }}
          multiline
          sx={{ m: 1, width: '90%' }}
        />
      ))}
    </Box>
  );
}
