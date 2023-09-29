import Stack from 'react-bootstrap/Stack';

function HorizontalStack() {
  return (
    <Stack direction="horizontal" gap={3} style={{justifyContent: 'center'}}>
      <div className="p-2"><a href='https://github.com/Moebirdie' target='_blank'><img src='https://uploads-ssl.webflow.com/6515fbe1ba5a602a0f9586a5/6516407bf99c2aac118c7a95_githubicon.png'/></a></div>
      <div className="p-2"><a href='https://www.linkedin.com/in/maureen-maher-2192aa35/' target='_blank'><img src='https://uploads-ssl.webflow.com/6515fbe1ba5a602a0f9586a5/6516442333d9510e362e52a4_linkediniconsmall.png'/></a></div>
      <div className="p-2"><a href='https://meta.stackexchange.com/users/1415019/maureen-erbe-maher' target='_blank'><img src='https://uploads-ssl.webflow.com/6515fbe1ba5a602a0f9586a5/65164420cdda289e2e466a50_stackOverflow.png'/></a></div>
    </Stack>
  );
}

export default HorizontalStack;