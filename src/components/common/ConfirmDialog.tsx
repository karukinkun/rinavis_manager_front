import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";

type ConfirmDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string | JSX.Element;
  buttonName?: string;
  action: () => Promise<void> | void;
};
const ConfirmDialog: FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  title,
  content,
  buttonName = "はい",
  action,
}) => (
  <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        <Box>{content}</Box>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        fullWidth
        variant="contained"
        onClick={() => {
          void action();
          onClose();
        }}
      >
        {buttonName}
      </Button>
      <Button fullWidth onClick={onClose} variant="contained">
        いいえ
      </Button>
    </DialogActions>
  </Dialog>
);
export default ConfirmDialog;
