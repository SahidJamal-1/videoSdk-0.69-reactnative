export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJmYTg2MTJlNS03MGRkLTRmYzMtYTBhMi02ZDU1NzFmNGE3MTUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY3NzU2NTY4NCwiZXhwIjoxNjkzMTE3Njg0fQ.ApTQue7QsI83aNQnrULWdW-53WQWNdOR3jmkwA4jh1c"
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
