import React from 'react'

interface GreenChainIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

export function GreenChainIcon({ size = 36, v1, v2, v3 }:GreenChainIconProps) {
    return (
        <span
            role="img"
            style={{
            fontSize: size,
            filter: v1 ? 'saturate(0.5)' : undefined,
            }}
        >
            🟩⛓️
        </span>
    )
}

