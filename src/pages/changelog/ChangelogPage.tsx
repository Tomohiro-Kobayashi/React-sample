import { Box } from '@mui/system';

type Props = {}

const ChangelogPage = (props: Props) => {
  return (
    <>
    <div>ChangelogPage</div>
    <Box
      sx={{
        width: 100,
        height: 100,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    </>
  )
}

export default ChangelogPage;