'use client';

import { ReactTyped } from "react-typed";

export default function Typewriter({
    messages
}: {
    messages: string[];
}) {
    return (
        <ReactTyped
            strings={messages}
            typeSpeed={50}
            className={'typewriter'}
            backDelay={1500}
            showCursor={true}
            onComplete={(self) => {
                if (self.cursor) self.cursor.remove();
            }}
        />
    );
}