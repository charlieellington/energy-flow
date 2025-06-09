import LKWrapper from '../../components/livekit-wrapper';
import { ParticipantTile } from '@livekit/components-react';

export default function Partner() {
  return (
    <LKWrapper token={process.env.NEXT_PUBLIC_PARTNER_TOKEN!}>
      <div className="flex h-screen items-center justify-center bg-black">
        <ParticipantTile isLocal />
      </div>
    </LKWrapper>
  );
} 