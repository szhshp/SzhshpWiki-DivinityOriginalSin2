import {
  OutlinedInputProps,
  TextField,
  OutlinedTextFieldProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const STextField = styled((props: OutlinedTextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    variant="outlined"
    {...props}
  />
))(({ theme }) => ({
  "& .MuiInputBase-input ": {
    padding: theme.spacing(1),
  },
}));
