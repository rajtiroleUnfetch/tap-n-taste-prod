import styled from 'styled-components';
import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import React from 'react';
import { sortOptions } from 't-scanning/src/app/constants/MenuPageData';

const StyledTSortPopUp = styled.div`
  color: pink;
`;

export function TSortPopUp() {
  const [selectedValue, setSelectedValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box className="border font-primary rounded-2xl">
      <header className="bg-white flex justify-between rounded-t-2xl px-6 py-4 cursor-pointer">
        <h1 className="text-2xl">Sort</h1>
        <ExpandMoreIcon />
      </header>
      <Box className="p-3 bg-zinc-100">
        <Box className="bg-white rounded-xl">
          <Box className="p-3">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedValue}
                onChange={handleChange}
                name="radio-buttons-group"
              >
                {sortOptions.map((option, index) => (
                  <FormControlLabel
                    value={option}
                    control={
                      <Radio
                        sx={{
                          color: '#F1414F',
                          '&.Mui-checked': {
                            color: '#F1414F',
                          },
                        }}
                      />
                    }
                    label={<span className="font-primary">{option}</span>}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TSortPopUp;
