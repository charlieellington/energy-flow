"use client";
import { LiveKitRoom, RoomAudioRenderer } from '@livekit/components-react';
import { ReactNode } from 'react';

interface LKWrapperProps {
  token: string;
  children: ReactNode;
}

export default function LKWrapper({ token, children }: LKWrapperProps) {
  return (
    <LiveKitRoom
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LK_URL}
      connectOptions={{ autoSubscribe: true }}
      video
      audio
      style={{ height: '100%' }}
    >
      {/* brand bar */}
      <header className="h-10 w-full bg-zinc-900 px-4 flex items-center text-sm tracking-wide text-white/90">
        No&nbsp;Bad&nbsp;Parts&nbsp;•&nbsp;alpha
      </header>
      {/* main content fills the rest */}
      <main className="h-[calc(100vh-2.5rem)]">{children}</main>
      <RoomAudioRenderer />
    </LiveKitRoom>
  );
} 