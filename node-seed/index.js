import { initiateUserControlledWalletsClient } from "@circle-fin/user-controlled-wallets";

const circleUserSdk = initiateUserControlledWalletsClient({
  apiKey:
    "TEST_API_KEY:299e498e7b603cf5b622ed41727697d5:76f80e042de9e528105fe18a611cb67a",
});

const userToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoTW9kZSI6IlNTTyIsImRldmVsb3BlckVudGl0eUVudmlyb25tZW50IjoiVEVTVCIsImVudGl0eUlkIjoiZGVlOWIyYzAtYWY4NS00NjFhLTk4NzMtMjRkNTU3NjM5NGVjIiwiZXhwIjoxNzMwNjgzMjAwLCJpYXQiOjE3Mjk0NzM2MDAsImludGVybmFsVXNlcklkIjoiNzA5NjU3OTItYmM1NC01ODE2LThjZDYtMjliYjI3YjJkYTgwIiwiaXNzIjoiaHR0cHM6Ly9wcm9ncmFtbWFibGUtd2FsbGV0LmNpcmNsZS5jb20iLCJqdGkiOiJmMmYzNTJmMS00YjRjLTRmNjgtODJhMy0xMzEzNzA4NzZhMzQiLCJzdWIiOiI2NTUzNzM3Yy1lN2E3LTUzMjAtYWU5Yi1kZTkwMDM4YzYxMzYifQ.SC5xKRVQqCry21yD1OFII1o0Y_tGcLvrn4deXfERGPeNWHYcb5_zJXqZPdktfOxA25m7mP1qlQEqAY-SqIWPnD5DVd4CSAcZj2hUWsXY2KkJoQ-Ded90sayng8ElcL2j7uKoMSUZ0RKVm8u5duMUMN_HmC8Sx2vGO0d7z78hZ8ywYar-5eC5R4rYCqoTtuuv-1yYDXarSQdq1C1ezroq29y5IfJKzy8MPog45rhNYVlCIVRxMlVbQajxxuH_I2h6KsATEJxZD0eI87gmCebKOtHNyL1qj4RW5Mq_1KkIupDXiDTz0ijL5xlq_BM4tnKaDel6574kXdaupsFeTRE25Q";

// const response = await circleUserSdk.createDeviceTokenForSocialLogin({
//   deviceId: "09a4f525-02db-48e5-b4ea-f4c13b448ec8",
// });

// console.log(response?.data);

const response = await circleUserSdk.getUserStatus({
  userToken:
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoTW9kZSI6IlNTTyIsImRldmVsb3BlckVudGl0eUVudmlyb25tZW50IjoiVEVTVCIsImVudGl0eUlkIjoiZGVlOWIyYzAtYWY4NS00NjFhLTk4NzMtMjRkNTU3NjM5NGVjIiwiZXhwIjoxNzMwNjgzMjAwLCJpYXQiOjE3Mjk0NzM2MDAsImludGVybmFsVXNlcklkIjoiNzA5NjU3OTItYmM1NC01ODE2LThjZDYtMjliYjI3YjJkYTgwIiwiaXNzIjoiaHR0cHM6Ly9wcm9ncmFtbWFibGUtd2FsbGV0LmNpcmNsZS5jb20iLCJqdGkiOiJmMmYzNTJmMS00YjRjLTRmNjgtODJhMy0xMzEzNzA4NzZhMzQiLCJzdWIiOiI2NTUzNzM3Yy1lN2E3LTUzMjAtYWU5Yi1kZTkwMDM4YzYxMzYifQ.SC5xKRVQqCry21yD1OFII1o0Y_tGcLvrn4deXfERGPeNWHYcb5_zJXqZPdktfOxA25m7mP1qlQEqAY-SqIWPnD5DVd4CSAcZj2hUWsXY2KkJoQ-Ded90sayng8ElcL2j7uKoMSUZ0RKVm8u5duMUMN_HmC8Sx2vGO0d7z78hZ8ywYar-5eC5R4rYCqoTtuuv-1yYDXarSQdq1C1ezroq29y5IfJKzy8MPog45rhNYVlCIVRxMlVbQajxxuH_I2h6KsATEJxZD0eI87gmCebKOtHNyL1qj4RW5Mq_1KkIupDXiDTz0ijL5xlq_BM4tnKaDel6574kXdaupsFeTRE25Q",
});

const walletResponse = await circleUserSdk.listWallets({
  userToken,
});

//  Check user balance

export const getWalletTokenBalance = async () => {
  try {
    const response = await circleUserSdk.getWalletTokenBalance({
      userToken,
      walletId: "00e33b6a-ee3f-5e44-89bb-1b7c5bc0e6df",
    });
    console.log(response.data?.tokenBalances[0].token);
  } catch (error) {
    next(error);
  }
};

// console.log(walletResponse.data);
getWalletTokenBalance();
