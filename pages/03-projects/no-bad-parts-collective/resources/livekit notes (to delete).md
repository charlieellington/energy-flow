
  
https://cloud-api.livekit.io/api/sandbox/connection-details

🎉 Your token server is running! This service is intended for prototyping and development purposes only. For production environments, you must create a secure token server that is integrated with your application's authentication system.

To generate a token, simply make a `POST` request to the endpoint with the following format:

|REQUEST FORMAT|   |   |
|---|---|---|
|URL|`https://cloud-api.livekit.io/api/sandbox/connection-details`|   |
|Method|`POST`|   |
|Headers|`X-Sandbox-ID`|`responsive-byte-1cgfuu`|
|`Content-Type`|`application/json`|
|Parameters|`roomName`|The name of the room to join. If omitted, a random new room name will be generated instead.|
|`participantName`|The identity of the participant the token should connect as connect as. If omitted, a random identity will be used instead.|

This will return a `JSON` response with everything you need to connect to LiveKit:

| RESPONSE FORMAT    |          |                                                               |
| ------------------ | -------- | ------------------------------------------------------------- |
| Field              | Type     | Description                                                   |
| `serverUrl`        | `string` | The LiveKit Cloud URL for the associated project.             |
| `participantToken` | `string` | The access token for the participant. _Valid for 15 minutes._ |
| `roomName`         | `string` | The room name associated with the token.                      |
| `participantName`  | `string` | The participant identity associated with the token.           |