import Stack from 'react-bootstrap/Stack';

function HorizontalStack() {
  return (
    <Stack direction="horizontal" gap={3} style={{justifyContent: 'center'}}>
      <div className="p-2"><a href='https://github.com/Moebirdie' target='_blank'><img src='Data/images/githubicon.png'/></a></div>
      <div className="p-2"><a href='https://www.linkedin.com/in/maureen-maher-2192aa35/' target='_blank'><img src='Data/images/linkediniconsmall.png'/></a></div>
      <div className="p-2"><a href='https://meta.stackexchange.com/users/1415019/maureen-erbe-maher' target='_blank'><img src='Data/images/stackOverflow.png'/></a></div>
    </Stack>
  );
}

export default HorizontalStack;