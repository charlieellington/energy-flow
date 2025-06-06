
### WHAT’S DONE ✅

- **LiveKit Cloud project** created (`no-bad-parts`, EU region).
    
- **Sandbox → Token server** template deployed — you can see the card `token-server` with a green dot.
    
- Token-server **docs page is open** and shows:
    
    - the public endpoint  
        `https://cloud-api.livekit.io/api/sandbox/connection-details`
        
    - your **X-Sandbox-ID** header value (e.g. `responsive-byte-1cgfuu`).
        
    - request / response format tables.
        

### WHAT’S NEXT ⏭️

1. **Mint two long-lived tokens**
    
    ```bash
    # Partner
    curl -s -X POST https://cloud-api.livekit.io/api/sandbox/connection-details \
      -H "Content-Type: application/json" \
      -H "X-Sandbox-ID: <your-sandbox-id>" \
      -d '{"roomName":"ifs-demo","participantName":"partner","ttl":7200}'
    
    # Facilitator
    curl -s -X POST https://cloud-api.livekit.io/api/sandbox/connection-details \
      -H "Content-Type: application/json" \
      -H "X-Sandbox-ID: <your-sandbox-id>" \
      -d '{"roomName":"ifs-demo","participantName":"facilitator","ttl":7200}'
    ```
    
    _Copy the `participantToken` value from each response._
    
2. **Create `.env.local` in your repo**
    
    ```
    NEXT_PUBLIC_LK_URL=wss://ifs-demo.eu.livekit.cloud   # use the serverUrl you got back
    NEXT_PUBLIC_PARTNER_TOKEN=<paste partner token>
    NEXT_PUBLIC_FACILITATOR_TOKEN=<paste facilitator token>
    ```
    
3. **Run the Agent locally**
    
    ```bash
    docker run --env-file .agent.env livekit/agent-audio-llm:latest
    ```
    
4. **Start the Next.js dev server**
    
    ```bash
    npm run dev
    ```
    
    _Open `/partner` and `/facilitator` — confirm video tile appears._
    
5. **If hints flow, deploy Agent to Fly.io** (optional Day-2 step).
    

That’s the next block of work to turn the Cloud setup into a fully working proof-of-concept.