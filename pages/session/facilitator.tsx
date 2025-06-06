import LKWrapper from '../../components/livekit-wrapper';
import {
  ParticipantTile,
  useRoomContext,
} from '@livekit/components-react';
import { useEffect, useState } from 'react';

function HintStream() {
  const { room } = useRoomContext();
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const handle = room.on('dataReceived', ({ payload, participant }) => {
      if (participant?.identity?.startsWith('agent')) {
        setLines((l) => [...l, new TextDecoder().decode(payload)]);
      }
    });
    return () => {
      room.off('dataReceived', handle);
    };
  }, [room]);

  // Add failure toast for offline state
  if (!room.canPlaybackAudio) {
    return <div className="p-4 text-red-500">AI offline — continue as normal.</div>;
  }

  return (
    <pre className="h-full overflow-auto bg-zinc-900 p-4 text-sm text-zinc-100">
      {lines.length === 0 ? 'Waiting for AI hints...' : lines.join('\n')}
    </pre>
  );
}

export default function Facilitator() {
  return (
    <LKWrapper token={process.env.NEXT_PUBLIC_FACILITATOR_TOKEN!}>
      <div className="grid h-full grid-cols-[2fr_1fr] bg-black">
        <ParticipantTile isLocal />
        <HintStream />
      </div>
    </LKWrapper>
  );
} 