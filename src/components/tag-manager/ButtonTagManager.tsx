'use client'

import { sendGTMEvent } from '@next/third-parties/google'

interface ButtonTagManagerProp {
    evenName: string,
    value: string | number
}

export function EventButton({ evenName, value }: ButtonTagManagerProp) {
    return (
        <div>
            <button
                onClick={() => sendGTMEvent({ event: evenName, value: value })}
            >
                Send Event
            </button>
        </div>
    )
}