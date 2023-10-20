import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import {
  setValue,
  setPasswordLength,
  setIncludeUppercase,
  setIncludeLowercase,
  setIncludeNumbers,
  setIncludeSymbols,
  setPasswordStrength,
} from "../redux/passwordGeneratorSlice";
import { style } from "./passwordGenerator.css";

const PasswordGenerator = () => {
  const dispatch = useDispatch();
  const {
    value,
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    passwordStrength,
  } = useSelector((state) => state.passwordGenerator);

  const calculatePasswordStrength = (length) => {
    if (length < 8) {
      return "Weak";
    } else if (length >= 8 && length <= 15) {
      return "Medium";
    } else {
      return "Strong";
    }
  };

  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    let validChars = "";
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;
  
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols && passwordLength > 0) {
      dispatch(setPasswordStrength(""));
      dispatch(setValue(""));
    } else {
      let password = "";
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
      }
  
      dispatch(setValue(password));
      dispatch(setPasswordStrength(calculatePasswordStrength(passwordLength)));
    }
  };
  

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <Box sx={style.mainBox}>
      <Box sx={style.secondBox}>
        <Typography sx={style.pasGeneratorText}>Password Generator</Typography>
        <Box sx={style.textfieldBox}>
          {value ? (
            <Box sx={style.pswValue}>{value}</Box>
          ) : (
            <Box sx={style.pswPlaceholder}>eMIvwPJrAk</Box>
          )}
          <ContentCopyIcon
            sx={value ? style.copyIconActive : style.copyIconInactive}
            onClick={copyPasswordToClipboard}
          />
        </Box>
        <div style={{ height: "25px" }}></div>
        <Box sx={style.bottomContent}>
          <Box sx={style.lengthBox}>
            <Typography sx={style.textfieldTextColor}>
              Character Length
            </Typography>
            <Typography sx={style.sameGreen}>{passwordLength}</Typography>
          </Box>
          <Slider
            value={passwordLength}
            min={0}
            max={30}
            step={1}
            onChange={(e, newValue) => {
              dispatch(setPasswordLength(newValue));
              dispatch(
                setPasswordStrength(calculatePasswordStrength(newValue))
              );
            }}
            valueLabelDisplay="auto"
            sx={style.slider}
          />

          <FormGroup sx={style.formGroup}>
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: "palegreen" }}
                  checked={includeUppercase}
                  onChange={() =>
                    dispatch(setIncludeUppercase(!includeUppercase))
                  }
                />
              }
              label="Include Uppercase letters"
              sx={style.textfieldTextColor}
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: "palegreen" }}
                  checked={includeLowercase}
                  onChange={() =>
                    dispatch(setIncludeLowercase(!includeLowercase))
                  }
                />
              }
              label="Include Lowercase letters"
              sx={style.textfieldTextColor}
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: "palegreen" }}
                  checked={includeNumbers}
                  onChange={() => dispatch(setIncludeNumbers(!includeNumbers))}
                />
              }
              label="Include Numbers"
              sx={style.textfieldTextColor}
            />
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: "palegreen" }}
                  checked={includeSymbols}
                  onChange={() => dispatch(setIncludeSymbols(!includeSymbols))}
                />
              }
              label="Include Symbols"
              sx={style.textfieldTextColor}
            />
          </FormGroup>
          <Box sx={style.strengthBox}>
            <Typography sx={style.strengthText}>
              STRENGTH:{" "}
              <span style={{ color: "white", textTransform: "uppercase" }}>
                {passwordStrength}
              </span>
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={generatePassword}
            sx={style.generateBtn}
          >
            <span style={style.generateBtnText}>
              Generate
              <ArrowForwardIcon sx={{ width: "25px", height: "20px" }} />
            </span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordGenerator;
