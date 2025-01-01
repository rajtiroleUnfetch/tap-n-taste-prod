import { Box, Divider } from '@mui/material';
import { TButton } from '@tap-n-taste/ui';
import CallIcon from '@mui/icons-material/Call';

const IssueSection = () => {
  return (
    <Box className="mt-6 mb-6">
      <Divider
        textAlign="left"
        className="text-2xl text-zinc-700 font-semibold mb-6"
      >
        Having an issue?
      </Divider>
      <Box className="mt-8 mb-8"></Box>
      <TButton
        text="Contact Us"
        className={{
          root: 'w-full mt-8 bg-white',
          text: 'text-primary',
        }}
        styles={{
          border: '2px solid #F1414F',
        }}
        icon={<CallIcon className="text-primary" />}
      />
    </Box>
  );
};

export default IssueSection;
