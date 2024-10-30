'use client'
import { sendGAEvent } from '@next/third-parties/google'

export const Button = () => {
    return (
        <button
            onClick={() => sendGAEvent({ event: "Click Aqui", value: "ID_EVENT" })}
        >
            Send Event
        </button>
    )
}
