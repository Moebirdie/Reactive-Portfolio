import Stack from 'react-bootstrap/Stack';

function HorizontalStack() {
  return (
    <Stack direction="horizontal" gap={3} style={{justifyContent: 'center'}}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack>
  );
}

export default HorizontalStack;